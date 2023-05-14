import { Link, useLocation } from "react-router-dom";
import s from "./Header.module.scss";
import { Hamburger } from "..";

export function Header() {
  const location = useLocation();

  const decorateLocation = (location: string) => {
    if (location === "/") location = location.slice(1);

    return `~${location}`;
  };

  return (
    <header>
      <div className={s.content}>
        <div className={s.prompt}>
          <div className={s.wrapper}>
            <span className={s.user}>vertex@github.io:</span>{" "}
            <span className={s.location}>
              {decorateLocation(location.pathname)}
            </span>
          </div>
        </div>
        <div className={s.links}>
          <Link to={"/"} className={"button-link"}>
            {`\udb81\udd9f`} Главная
          </Link>
          <Link to={"projects"} className={"button-link"}>
            {`\udb80\udd69`} Проекты
          </Link>
          <Link to={""} className={"button-link"}>
            {`\udb80\udea4`} GitHub
          </Link>
        </div>
        <div className={s.hamburger}>
          <Hamburger />
        </div>
      </div>
    </header>
  );
}

export default Header;
