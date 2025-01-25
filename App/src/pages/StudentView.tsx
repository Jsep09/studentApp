import { useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../hooks";
import { useEffect } from "react";
import { fetchStudentDetail } from "../reducers/StudentSlice";
const StudentView = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const studentDetail = useAppSelector((state) => state.student.currentUser);

  useEffect(() => {
    if (id) {
      dispatch(fetchStudentDetail(id));
    }
  }, [dispatch, id]);

  console.log("Student Detail from Redux State:", studentDetail);

  return (
    <div className="container min-h-screen max-w-7xl m-auto p-15">
      <h1>Student Details</h1>
      <p>ID: {studentDetail?.id}</p>
      <p>Name: {studentDetail?.firstName}</p>
      <p>lasname: {studentDetail?.lastName}</p>
    </div>
  );
};

export default StudentView;
