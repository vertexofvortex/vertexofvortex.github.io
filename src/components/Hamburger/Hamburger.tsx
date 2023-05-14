import { useRef, useState } from "react";
import s from "./Hamburger.module.scss";
import { Link } from "react-router-dom";
import { IHeaderLink } from "../../models";

interface Props {
  data: IHeaderLink[];
}

export function Hamburger({ data }: Props) {
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
            {data.map((link) => {
              if (link.type !== "external") {
                return (
                  <Link
                    to={link.url}
                    className={"button-link big"}
                    onClick={() => setIsMenuOpen(false)}
                    key={link.url}
                  >
                    {link.text}
                  </Link>
                );
              } else {
                return (
                  <a
                    href={link.url}
                    target="_blank"
                    className={"button-link big"}
                    onClick={() => setIsMenuOpen(false)}
                    key={link.url}
                  >
                    {link.text}
                  </a>
                );
              }
            })}
          </div>
          <div className={s.outside} onClick={() => setIsMenuOpen(false)} />
        </>
      )}
    </>
  );
}

export default Hamburger;
