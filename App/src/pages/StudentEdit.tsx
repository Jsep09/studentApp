import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks";
import { fetchStudentDetail } from "../reducers/StudentSlice";
import { Link, useNavigate } from "react-router-dom";
import { EditStudent } from "../reducers/StudentSlice";

const StudentEdit = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();
  const StudentEdit = useAppSelector((state) => {
    return state.student.currentStudent;
  });
  const navigate = useNavigate();
  const [student, setStudent] = useState({
    id: 0,
    firstName: "",
    lastName: "",
    age: 0,
    gender: "",
    major: "",
    gpa: 0,
  });

  useEffect(() => {
    if (id) {
      dispatch(fetchStudentDetail(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (StudentEdit) {
      setStudent({
        id: StudentEdit.id,
        firstName: StudentEdit.firstName,
        lastName: StudentEdit.lastName,
        age: StudentEdit.age,
        gender: StudentEdit.gender,
        major: StudentEdit.major,
        gpa: StudentEdit.gpa,
      });
    }
  }, [StudentEdit]);

  useEffect(() => {
    console.log(student);
  }, [student]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    // console.log(e.target.name);

    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (id) {
      dispatch(EditStudent({ student, id }))
        .unwrap() //.unwrap() จะดึง response.data จาก payload ออกมา และส่งต่อให้ฟังก์ชันใน .then()
        // หาก Action rejected
        //.unwrap() จะโยน error ออกมา ทำให้ฟังก์ชันใน .catch()
        .then(() => {
          alert("Student created successfully!");
          navigate("/");
        })
        .catch((error) => alert("Error edit student: " + error));
    }
  };

  return (
    <div className="container min-h-screen max-w-5xl m-auto p-15">
      <div className="w-full  shadow-[0px_0px_15px_rgba(0,0,0,0.25)] p-10 rounded-md">
        <form action="submit" onSubmit={handleSubmit}>
          <div className="flex ">
            <div className="flex-1 px-10">
              <label className="text-sm block">Firstname</label>
              <input
                name="firstName"
                type="text"
                onChange={handleChange}
                value={student.firstName}
                required // เพิ่ม required เพื่อบังคับให้กรอกข้อมูล
                className="bg-white p-1 rounded-md border border-s-1 shadow-2xs border-slate-300 w-full "
              />
            </div>
            <div className="flex-1 px-10">
              <label className="text-sm block">Lastname</label>
              <input
                name="lastName"
                type="text"
                onChange={handleChange}
                value={student.lastName}
                required
                className="bg-white p-1 rounded-md border border-s-1 shadow-2xs border-slate-300 w-full "
              />
            </div>
          </div>
          <div className="flex mt-12 w-full justify-between px-10 items-center">
            <div>
              <label className="text-sm block">Age</label>
              <input
                type="number"
                name="age"
                onChange={handleChange}
                value={student.age}
                required
                className="bg-white p-1 rounded-md border border-s-1 shadow-2xs border-slate-300 w-20 "
              />
            </div>
            <div>
              <label className="text-sm block">Gender</label>
              <select
                name="gender"
                onChange={handleChange}
                value={student.gender}
                required
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="text-sm block">Major</label>
              <select
                name="major"
                id=""
                onChange={handleChange}
                value={student.major}
                required
              >
                <option value="Computer Science">Computer Science</option>
                <option value="Electrical Engineering">
                  Electrical Engineering
                </option>
                <option value="Business Administration">
                  Business Administration
                </option>
                <option value="Mechanical Engineering">
                  Mechanical Engineering
                </option>
                <option value="Mechanical Engineering">
                  Mechanical Engineering
                </option>
                <option value="Design">Design</option>
              </select>
            </div>
            <div>
              <label className="text-sm block">GPA</label>
              <input
                type="number"
                name="gpa"
                max="4"
                step="0.01"
                value={student.gpa}
                onChange={handleChange}
                required
                className="bg-white p-1 rounded-md border border-s-1 shadow-2xs border-slate-300 w-20 "
              />
            </div>
          </div>
          <div className="mt-20 w-full flex justify-center gap-36">
            <button
              type="submit"
              className="px-10 py-2 bg-green-600 text-white rounded-md cursor-pointer"
            >
              Save
            </button>
            <Link to={"/"}>
              <button
                type="button"
                className="px-10 py-2 bg-red-600 text-white rounded-md cursor-pointer"
              >
                Cancel
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentEdit;
