import s from "./ProjectCard.module.scss";
import { IProject } from "../../models";

export function ProjectCard({
  pictureUrl,
  title,
  description,
  buttons,
}: IProject) {
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
          <a href={button.href} className={"button-link blue"} key={key}>
            {button.text}
          </a>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
