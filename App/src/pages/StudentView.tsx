import { useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../hooks";
import { useEffect } from "react";
import { fetchStudentDetail } from "../reducers/StudentSlice";
const StudentView = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const studentDetail = useAppSelector((state) => state.student.currentStudent);

  useEffect(() => {
    if (id) {
      dispatch(fetchStudentDetail(id));
    }
  }, [dispatch, id]);

  return (
    <div className="container flex min-h-screen max-w-3xl m-auto items-center">
      <div className="bg-blue-600 w-full h-fit p-16 rounded-2xl  ">
        <div className="w-full flex justify-center">
          <div className="bg-white w-72 h-72 rounded-full flex justify-center items-center text-4xl  hover:scale-105 duration-300">
            <p>{studentDetail?.firstName}</p>
          </div>
        </div>
        <div className="w-full flex justify-center flex-col mt-10 text-white ">
          <p className="text-3xl">Fistname : {studentDetail?.firstName}</p>
          <p className="text-3xl">Lastname : {studentDetail?.lastName}</p>
          <p className="text-3xl">Age : {studentDetail?.age}</p>
          <p className="text-3xl">Gender : {studentDetail?.gender}</p>
          <p className="text-3xl">Major : {studentDetail?.major}</p>
          <p className="text-3xl">GPA : {studentDetail?.gpa}</p>
        </div>
      </div>
    </div>
  );
};

export default StudentView;
