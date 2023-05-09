import { Suspense, lazy } from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import Root from "./routes/root/root";
import { loadContent } from "./routes/main/main.loader";

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
        element: (
          <Suspense>
            <Main />
          </Suspense>
        ),
        loader: loadContent,
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
      },
    ],
  },
]);
