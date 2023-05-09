import { ReactNode } from "react";
import s from "./ProjectCard.module.scss";

interface Props {
  pictureUrl: string;
  title: string;
  description: string;
  buttons: Array<{
    className: string;
    icon: ReactNode;
    href: string;
    text: ReactNode;
  }>;
}

export function ProjectCard({
  pictureUrl,
  title,
  description,
  buttons,
}: Props) {
  return (
    <div className={s.card}>
      <div className={s.picture}>
        <img src={pictureUrl} alt="" />
      </div>
      <div className={s.title}>
        <b>{title}</b>
      </div>
      <div className={s.description}>{description}</div>
      <div className={s.buttons}>
        {buttons.map((button, key) => (
          <a href={button.href} className={button.className} key={key}>
            {button.icon} {button.text}
          </a>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
