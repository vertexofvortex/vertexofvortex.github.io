import { Link, useLocation } from "react-router-dom";
import s from "./Header.module.scss";
import { Hamburger } from "..";
import { IHeaderLink } from "../../models";

interface Props {
  data: IHeaderLink[];
}

export function Header({ data }: Props) {
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
          {data.map((link) => {
            if (link.type !== "external") {
              return (
                <Link to={link.url} className={"button-link"} key={link.url}>
                  {link.text}
                </Link>
              );
            } else {
              return (
                <a
                  href={link.url}
                  target="_blank"
                  className={"button-link"}
                  key={link.url}
                >
                  {link.text}
                </a>
              );
            }
          })}
        </div>
        <div className={s.hamburger}>
          <Hamburger data={data} />
        </div>
      </div>
    </header>
  );
}

export default Header;
