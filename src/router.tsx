import { Suspense, lazy } from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import Root from "./routes/root/root";
import { loadMain } from "./routes/main/main.loader";
import { loadProjects } from "./routes/projects/projects.loader";
import { loadProject } from "./routes/project/project.loader";
import { loadRoot } from "./routes/root/root.loader";

const Main = lazy(() => import("./routes/main/main"));
const Projects = lazy(() => import("./routes/projects/projects"));
const Project = lazy(() => import("./routes/project/project"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Root isError />,
    loader: loadRoot,
    children: [
      {
        path: "",
        index: true,
        element: (
          <Suspense>
            <Main />
          </Suspense>
        ),
        loader: loadMain,
      },
      {
        path: "main",
        element: <Navigate to={"/"} />,
      },
      {
        path: "projects",
        element: (
          <Suspense>
            <Projects />
          </Suspense>
        ),
        loader: loadProjects,
      },
      {
        path: "projects/:slug",
        element: (
          <Suspense>
            <Project />
          </Suspense>
        ),
        loader: loadProject,
      },
    ],
  },
]);
