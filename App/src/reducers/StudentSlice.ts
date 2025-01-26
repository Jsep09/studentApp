import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Student } from "../studentsInterface";
import { RootState } from "../store";
import axios from "axios";

const apiUrl = "http://localhost:8080/students";

export const fetchStudents = createAsyncThunk("students", async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error();
  }
});

export const fetchStudentDetail = createAsyncThunk(
  "students/:id",
  async (id: string) => {
    try {
      const response = await axios.get(apiUrl + `/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error();
    }
  }
);

export const deleteStudent = createAsyncThunk(
  "student/delete",
  async (id: number) => {
    try {
      await axios.delete(apiUrl + `/${id}`);
      return id; // ส่ง id ที่ถูกลบไป
    } catch (error) {
      console.log(error);
      throw new Error();
    }
  }
);

export const createStudent = createAsyncThunk(
  "create",
  async (student: Student) => {
    try {
      const response = await axios.post(apiUrl, student);
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error();
    }
  }
);

export const EditStudent = createAsyncThunk(
  "edit",
  //createAsyncThunk รับของเป็น object
  async ({ student, id }: { student: Student; id: string }) => {
    try {
      const response = await axios.patch(apiUrl + `/${id}`, student);
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error();
    }
  }
);
// สร้าง Interface สำหรับ slice state นั้นก็คือ initialState

interface studentSlice {
  students: Student[];
  filteredStudents: Student[];
  currentStudent: any | null;
  loading: boolean;
  error: string | null;
}

const initialState: studentSlice = {
  students: [],
  filteredStudents: [],
  currentStudent: null,
  loading: false,
  error: null,
};

const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    // ฟังก์ชันสำหรับกรองข้อมูลนักเรียนที่ตรงกับคำค้น
    filterBySearch: (state, action) => {
      const searchText = action.payload.toLowerCase();
      state.filteredStudents = state.students.filter(
        (student) =>
          student.firstName.toLowerCase().includes(searchText) ||
          student.lastName.toLowerCase().includes(searchText)
      );
    },
  },

  extraReducers(builder) {
    builder
      // fetch student
      .addCase(fetchStudents.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStudents.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.students = action.payload;
        state.filteredStudents = action.payload;
      })
      .addCase(fetchStudents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Fetch students error";
      })
      // fetch detail
      .addCase(fetchStudentDetail.pending, (state) => {
        state.loading = true;
        state.currentStudent = null; // ล้างข้อมูลเดิม
      })
      .addCase(fetchStudentDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.currentStudent = action.payload; // อัปเดต currentStudent ด้วยข้อมูลที่ได้จาก API
        state.error = null;
      })
      .addCase(fetchStudentDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch student detail";
      })

      //delete student
      .addCase(deleteStudent.pending, (state) => {
        state.loading = true;
        state.currentStudent = null;
      })
      .addCase(deleteStudent.fulfilled, (state, action) => {
        state.loading = false;
        state.students = state.students.filter(
          (item) => item.id !== action.payload //id ส่งมาทาง action.payload
        );
        state.error = null;
      })
      .addCase(deleteStudent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch student detail";
      })

      //create student
      .addCase(createStudent.pending, (state) => {
        state.loading = true;
      })
      .addCase(createStudent.fulfilled, (state, action) => {
        state.loading = false;
        state.students.push(action.payload); // เพิ่ม student ใหม่ใน state
        state.error = null;
      })
      .addCase(createStudent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to create student";
      })

      //Edit student
      .addCase(EditStudent.pending, (state) => {
        state.loading = true;
      })
      .addCase(EditStudent.fulfilled, (state, action) => {
        state.loading = false;
        state.students = action.payload; // น่าจะใช่
        state.error = null;
      })
      .addCase(EditStudent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to create student";
      });
  },
});

// Selectors
export const selectStudents = (state: RootState) => state.student.students;
export const selectcurrentStudent = (state: RootState) =>
  state.student.currentStudent;

export const { filterBySearch } = studentSlice.actions;

export default studentSlice.reducer;
