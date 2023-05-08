import { lazy } from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import Root from "./routes/root/root";

const Main = lazy(() => import("./routes/main/main"));
const Projects = lazy(() => import("./routes/projects/projects"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        index: true,
        element: <Main />,
      },
      {
        path: "main",
        element: <Navigate to={"/"} />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
    ],
  },
]);
