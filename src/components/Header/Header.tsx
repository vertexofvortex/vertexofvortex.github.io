import { Link } from "react-router-dom";
import s from "./Header.module.scss";

export function Header() {
  return (
    <header>
      <div className={s.content}>
        <div className={s.logo}>~ vertex@github.io</div>
        <div className={s.links}>
          <Link to={"/"} className={"button-link"}>
            {`\udb81\udd9f`} Main page
          </Link>
          <Link to={"projects"} className={"button-link"}>
            {`\udb80\udd69`} Projects
          </Link>
          <Link to={""} className={"button-link"}>
            {`\ueba1`} GitHub
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
