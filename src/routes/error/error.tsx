import { useRouteError } from "react-router-dom";
import { MainContent } from "../../components";
import s from "./error.module.scss";

export function ErrorPage() {
  const error = useRouteError();

  return (
    <MainContent>
      <div className={s.error}>
        <span>
          {`\ue654`} An error occured. Look into the browser console
          <div className={s.errorText}>{JSON.stringify(error)}</div>
        </span>
      </div>
    </MainContent>
  );
}

export default ErrorPage;
