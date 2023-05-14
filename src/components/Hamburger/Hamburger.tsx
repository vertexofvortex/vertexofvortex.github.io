import { useEffect, useRef, useState } from "react";
import s from "./Hamburger.module.scss";
import { Link } from "react-router-dom";

export function Hamburger() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const menu = useRef<HTMLDivElement>(null);

  return (
    <>
      <div
        className={s.hamburger}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >{`\udb80\udf5c`}</div>
      {isMenuOpen && (
        <>
          <div className={s.menu} ref={menu}>
            <Link to={"/"} className={"button-link big"}>
              {`\udb81\udd9f`} Главная
            </Link>
            <Link to={"projects"} className={"button-link big"}>
              {`\udb80\udd69`} Проекты
            </Link>
            <Link to={""} className={"button-link big"}>
              {`\udb80\udea4`} GitHub
            </Link>
          </div>
          <div className={s.outside} onClick={() => setIsMenuOpen(false)} />
        </>
      )}
    </>
  );
}

export default Hamburger;
