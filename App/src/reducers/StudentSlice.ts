import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Student } from "../studentsInterface";
import { RootState } from "../store";
import axios from "axios";

const apiUrl = "http://localhost:8000/students";

export const fetchStudents = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get(apiUrl);
  return response.data;
});

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
      });
  },
});

export const selectStudents = (state: RootState) => {
  state.student.students;
};

export default studentSlice.reducer;
