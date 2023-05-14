import s from "./ProjectCard.module.scss";
import { IProject } from "../../models";
import { Link } from "react-router-dom";

export function ProjectCard(project: IProject) {
  return (
    <div className={s.card}>
      <div
        className={s.picture}
        style={
          project.coverVerticalPos && { alignItems: project.coverVerticalPos }
        }
      >
        <img src={project.coverUrl} />
      </div>
      <div className={s.title}>
        <b>{project.title}</b>
      </div>
      <div className={s.description}>{project.featuredView.description}</div>
      <div className={s.buttons}>
        {project.buttons &&
          project.buttons.map((button, key) => {
            if (button.type === "external")
              return (
                <a
                  href={button.url}
                  target="_blank"
                  className={"button-link blue"}
                  key={key}
                >
                  {button.children}
                </a>
              );
            if (button.type === "internal")
              return (
                <Link to={button.url} className={"button-link blue"} key={key}>
                  {button.children}
                </Link>
              );
          })}
        <Link to={`/projects/${project.slugId}`} className="button-link">
          {`\udb84\udc02`} Подробнее
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
