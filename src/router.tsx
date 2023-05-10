import { Suspense, lazy } from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import Root from "./routes/root/root";
import { loadMain } from "./routes/main/main.loader";
import { loadProjects } from "./routes/projects/projects.loader";

const Main = lazy(() => import("./routes/main/main"));
const Projects = lazy(() => import("./routes/projects/projects"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Root isError />,
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
    ],
  },
]);
