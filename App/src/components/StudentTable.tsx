import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../hooks";
import { Link } from "react-router-dom";
import { fetchStudents, deleteStudent } from "../reducers/StudentSlice";

const StudentTable = () => {
  const dispatch = useAppDispatch();
  const students = useAppSelector((state) => state.student.students);

  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  useEffect(() => {
    console.log(students);
  }, [students]);

  const handleDelete = (id: number) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      dispatch(deleteStudent(id)); // ลบ student ตาม id
    }
  };
  return (
    <div className="relative overflow-x-auto  ">
      <table className="w-full text-sm text-left rtl:text-right border border-slate-300">
        <thead className="text-xs uppercase ">
          <tr>
            <th scope="col" className="px-6 py-3 border border-slate-300">
              Firstname
            </th>
            <th scope="col" className="px-6 py-3 border border-slate-300">
              Lastname
            </th>
            <th scope="col" className="px-6 py-3 border border-slate-300">
              Age
            </th>
            <th scope="col" className="px-6 py-3 border border-slate-300">
              Gender
            </th>
            <th scope="col" className="px-6 py-3 border border-slate-300">
              Action
            </th>
          </tr>
        </thead>
        {students.map((items) => {
          return (
            <tbody key={items.id}>
              <tr className="odd:bg-white even:bg-gray-100">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium  border border-slate-300"
                >
                  {items.firstName}
                </th>
                <td className="px-6 py-4  border border-slate-300">
                  {" "}
                  {items.lastName}
                </td>
                <td className="px-6 py-4  border border-slate-300">
                  {" "}
                  {items.age}
                </td>
                <td className="px-6 py-4  border border-slate-300">
                  {items.gender}
                </td>
                <td className="px-6 py-4  border border-slate-300">
                  <div className="but-group flex justify-around w-full">
                    <Link to={`/view/${items.id}`}>
                      <svg
                        className="w-[22px] h-[22px] text-gray-800"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.998 7.78C6.729 6.345 9.198 5 12 5c2.802 0 5.27 1.345 7.002 2.78a12.713 12.713 0 0 1 2.096 2.183c.253.344.465.682.618.997.14.286.284.658.284 1.04s-.145.754-.284 1.04a6.6 6.6 0 0 1-.618.997 12.712 12.712 0 0 1-2.096 2.183C17.271 17.655 14.802 19 12 19c-2.802 0-5.27-1.345-7.002-2.78a12.712 12.712 0 0 1-2.096-2.183 6.6 6.6 0 0 1-.618-.997C2.144 12.754 2 12.382 2 12s.145-.754.284-1.04c.153-.315.365-.653.618-.997A12.714 12.714 0 0 1 4.998 7.78ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                    <a href="/edit">
                      <svg
                        className="w-[22px] h-[22px] text-gray-800"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.32 6.176H5c-1.105 0-2 .949-2 2.118v10.588C3 20.052 3.895 21 5 21h11c1.105 0 2-.948 2-2.118v-7.75l-3.914 4.144A2.46 2.46 0 0 1 12.81 16l-2.681.568c-1.75.37-3.292-1.263-2.942-3.115l.536-2.839c.097-.512.335-.983.684-1.352l2.914-3.086Z"
                          clipRule="evenodd"
                        />
                        <path
                          fillRule="evenodd"
                          d="M19.846 4.318a2.148 2.148 0 0 0-.437-.692 2.014 2.014 0 0 0-.654-.463 1.92 1.92 0 0 0-1.544 0 2.014 2.014 0 0 0-.654.463l-.546.578 2.852 3.02.546-.579a2.14 2.14 0 0 0 .437-.692 2.244 2.244 0 0 0 0-1.635ZM17.45 8.721 14.597 5.7 9.82 10.76a.54.54 0 0 0-.137.27l-.536 2.84c-.07.37.239.696.588.622l2.682-.567a.492.492 0 0 0 .255-.145l4.778-5.06Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <button
                      onClick={() => handleDelete(items.id)}
                      className="cursor-pointer"
                    >
                      <svg
                        className="w-[22px] h-[22px] text-gray-800"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default StudentTable;
