import { RouteErrorContext } from "react-router/dist/lib/context";
import { Footer, Header } from "../../components";
import s from "./root.module.scss";
import { Outlet } from "react-router-dom";
import { RenderErrorBoundary } from "react-router/dist/lib/hooks";
import ErrorPage from "../error/error";

interface Props {
  isError?: boolean;
}

function Root({ isError }: Props) {
  return (
    <div className={s.root}>
      <Header />
      <main>
        {!isError && <Outlet />}
        {isError && <ErrorPage />}
      </main>
      <Footer />
    </div>
  );
}

export default Root;
