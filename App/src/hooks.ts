import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "./store";

//ลดการเขียน Type ซ้ำๆ
//ถ้าใช้ useDispatch และ useSelector ตรงๆ จะต้องระบุ type ของ dispatch และ state ทุกครั้งที่ใช้

// Hook สำหรับ Dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();
// Hook สำหรับ Selector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
