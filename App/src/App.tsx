import { useRoutes } from "react-router-dom";
import "./App.css";
import StudentsList from "./pages/StudentsList";
import StudentView from "./pages/StudentView";
import StudentEdit from "./pages/StudentEdit";
import StudentCreate from "./pages/StudentCreate";

function App() {
  const element = useRoutes([
    {
      path: "/",
      element: <StudentsList />,
    },
    {
      path: "/create",
      element: <StudentCreate />,
    },
    {
      path: "/view/:id",
      element: <StudentView />,
    },
    {
      path: "/edit/:id",
      element: <StudentEdit />,
    },
  ]);
  return element;
}

export default App;
