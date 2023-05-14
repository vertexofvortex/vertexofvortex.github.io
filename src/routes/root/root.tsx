import { Footer, Header } from "../../components";
import s from "./root.module.scss";
import { Outlet, useLoaderData } from "react-router-dom";
import ErrorPage from "../error/error";
import { IHeaderLink } from "../../models";

interface Props {
  isError?: boolean;
}

function Root({ isError }: Props) {
  const headerLinks = useLoaderData() as IHeaderLink[];

  return (
    <div className={s.root}>
      <Header data={headerLinks} />
      <main>
        {!isError && <Outlet />}
        {isError && <ErrorPage />}
      </main>
      <Footer />
    </div>
  );
}

export default Root;
