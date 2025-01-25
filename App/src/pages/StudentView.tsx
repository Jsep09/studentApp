import { useParams } from "react-router-dom";

const StudentView = () => {
  const { id } = useParams();
  return <div>StudentViews {id}</div>;
};

export default StudentView;
