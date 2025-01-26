import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../hooks";
import { filterBySearch } from "../reducers/StudentSlice";

const Control = () => {
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (search) {
      dispatch(filterBySearch(search));
    }
  };
  return (
    <div className="flex justify-between mb-5">
      <form onSubmit={handleSubmit}>
        <div className="flex">
          <div className="relative w-full ">
            <input
              type="search"
              id="search"
              onChange={handleSearch}
              className="block p-2.5 min-w-96 z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
              placeholder="Search name ..."
              required
            />
            <button
              type="submit"
              className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg "
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </div>
        </div>
      </form>
      <Link to={`/create`}>
        <button className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-500 cursor-pointer">
          Add New Student
        </button>
      </Link>
    </div>
  );
};

export default Control;
