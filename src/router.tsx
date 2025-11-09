import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import ProjectsPage from "../pages/ProjectsPage";
import ProjectDetail from "../pages/ProjectDetail";

export default function AppRoutes() {
  return useRoutes([
    { path: "/", element: <Home /> },
    { path: "/projects-page", element: <ProjectsPage /> },
    { path: "/project/:id", element: <ProjectDetail /> },
  ]);
}
