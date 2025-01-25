import { configureStore } from "@reduxjs/toolkit";
import StudentSlice from "./reducers/StudentSlice";

const store = configureStore({
  reducer: {
    student: StudentSlice, // รวม reducers ต่างๆ เข้าไปใน store ข้อมูลที่จัดการโดย StudentSlice
  },
});

//store.getState เป็นฟังก์ชันที่ Redux มีให้ซึ่งใช้ดึง state ปัจจุบันจาก store.
//ReturnType เป็น Utility Type ของ TypeScript ที่ใช้เพื่อ "ดึงประเภทผลลัพธ์" ที่ฟังก์ชันส่งกลับ.
//ในกรณีนี้, RootState จะเป็นประเภทของ state ทั้งหมดใน store. ถ้า store ของคุณมี reducers หลายตัว, RootState จะรวม state ของ reducers เหล่านั้นทั้งหมด.
export type RootState = ReturnType<typeof store.getState>;

//store.dispatch เป็นฟังก์ชันที่ Redux ใช้เพื่อส่ง (dispatch) actions ไปยัง reducers.
//AppDispatch กำหนดประเภทให้กับ dispatch เพื่อรองรับ asynchronous actions ที่สร้างโดย createAsyncThunk.
export type AppDispatch = typeof store.dispatch;

export default store;
