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

// สร้าง Interface สำหรับ slice state นั้นก็คือ initialState

interface studentSlice {
  students: Student[];
  currentUser: any | null;
  loading: boolean;
  error: string | null;
}

const initialState: studentSlice = {
  students: [],
  currentUser: null,
  loading: false,
  error: null,
};

const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchStudents.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStudents.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.students = action.payload;
      })
      .addCase(fetchStudents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Fetch students error";
      })
      .addCase(fetchStudentDetail.pending, (state) => {
        state.loading = true;
        state.currentUser = null; // ล้างข้อมูลเดิม
      })
      .addCase(fetchStudentDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.currentUser = action.payload; // อัปเดต currentUser ด้วยข้อมูลที่ได้จาก API
        state.error = null;
      })
      .addCase(fetchStudentDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch student detail";
      });
  },
});

// Selectors
export const selectStudents = (state: RootState) => state.student.students;
export const selectCurrentUser = (state: RootState) =>
  state.student.currentUser;
export const selectLoading = (state: RootState) => state.student.loading;
export const selectError = (state: RootState) => state.student.error;

export default studentSlice.reducer;
