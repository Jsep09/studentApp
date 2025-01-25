import Control from "../components/Control";
import StudentTable from "../components/StudentTable";
const StudentsList = () => {
  return (
    <div className="container min-h-screen max-w-7xl m-auto p-15">
      <header>
        <div className="flex justify-between items-center">
          <p className="text-4xl">Student Details</p>
        </div>
        <div className="w-full h-0.5 bg-slate-200 my-5 rounded-2xl "></div>
      </header>
      <Control />
      <StudentTable />
    </div>
  );
};

export default StudentsList;
