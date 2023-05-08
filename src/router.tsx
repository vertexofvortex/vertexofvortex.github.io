import { createBrowserRouter } from "react-router-dom";
import Root from "./routes/root/root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);
