import { Link } from "react-router-dom";

const StudentCreate = () => {
  return (
    <div className="container min-h-screen max-w-5xl m-auto p-15">
      <div className="w-full  shadow-[0px_0px_15px_rgba(0,0,0,0.25)] p-10 rounded-md">
        <form action="submit">
          <div className="flex ">
            <div className="flex-1 px-10">
              <label className="text-sm block">Firstname</label>
              <input
                type="text"
                className="bg-white p-1 rounded-md border border-s-1 shadow-2xs border-slate-300 w-full "
              />
            </div>
            <div className="flex-1 px-10">
              <label className="text-sm block">Lastname</label>
              <input
                type="text"
                className="bg-white p-1 rounded-md border border-s-1 shadow-2xs border-slate-300 w-full "
              />
            </div>
          </div>
          <div className="flex mt-12 w-full justify-between px-10 items-center">
            <div>
              <label className="text-sm block">Age</label>
              <input
                type="number"
                className="bg-white p-1 rounded-md border border-s-1 shadow-2xs border-slate-300 w-20 "
              />
            </div>
            <div>
              <label className="text-sm block">Gender</label>
              <select name="gender" id="">
                <option value="Male">Male</option>
                <option value="Male">Female</option>
                <option value="Male">Other</option>
              </select>
            </div>
            <div>
              <label className="text-sm block">Major</label>
              <select name="gender" id="">
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
                max="4"
                step="0.01"
                className="bg-white p-1 rounded-md border border-s-1 shadow-2xs border-slate-300 w-20 "
              />
            </div>
          </div>
          <div className="mt-20 w-full flex justify-center gap-36">
            <button className="px-10 py-2 bg-green-600 text-white rounded-md cursor-pointer">
              Save
            </button>
            <Link to={"/"}>
              <button className="px-10 py-2 bg-red-600 text-white rounded-md cursor-pointer">
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
