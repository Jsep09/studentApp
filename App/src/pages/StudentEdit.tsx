import { useState } from "react";
import { useParams } from "react-router-dom";

const StudentEdit = () => {
  const [studentData, setStudentData] = useState({
    id: Number,
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    major: "",
    gpa: Number,
  });
  const { id } = useParams();
  return <div>StudentEdit {id}</div>;
};

export default StudentEdit;
