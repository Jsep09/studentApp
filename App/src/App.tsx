import StudentsList from "./pages/StudentsList";
import { useRoutes } from "react-router-dom";
import "./App.css";
import StudentView from "./pages/StudentView";
import StudentEdit from "./pages/StudentEdit";

function App() {
  const element = useRoutes([
    {
      path: "/",
      element: <StudentsList />,
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
