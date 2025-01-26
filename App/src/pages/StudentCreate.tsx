import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hooks";
import { createStudent } from "../reducers/StudentSlice";

const StudentCreate = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    id: Math.floor(Math.random() * 100),
    firstName: "",
    lastName: "",
    age: 0,
    gender: "Male",
    major: "Computer Science",
    gpa: 0.0,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    // console.log(e.target.name);

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(createStudent(formData))
      .unwrap() //.unwrap() จะดึง response.data จาก payload ออกมา และส่งต่อให้ฟังก์ชันใน .then()
      // หาก Action rejected
      //.unwrap() จะโยน error ออกมา ทำให้ฟังก์ชันใน .catch()
      .then(() => {
        alert("Student created successfully!");
        navigate("/");
      })
      .catch((error) => alert("Error creating student: " + error));
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

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
                required
                className="bg-white p-1 rounded-md border border-s-1 shadow-2xs border-slate-300 w-20 "
              />
            </div>
            <div>
              <label className="text-sm block">Gender</label>
              <select
                name="gender"
                onChange={handleChange}
                value={formData.gender} // กำหนดค่าเริ่มต้นในกรณีที่ไม่มีอะไรเปลี่ยนจาก state form
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
                value={formData.major}
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

export default StudentCreate;
