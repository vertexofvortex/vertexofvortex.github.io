import s from "./ProjectCard.module.scss";
import { IProject } from "../../models";
import { Link } from "react-router-dom";

export function ProjectCard(project: IProject) {
  return (
    <div className={s.card}>
      <div className={s.picture}>
        <img src={project.coverUrl} />
      </div>
      <div className={s.title}>
        <b>{project.title}</b>
      </div>
      <div className={s.description}>{project.featuredView.description}</div>
      <div className={s.buttons}>
        {project.buttons &&
          project.buttons.map((button, key) => (
            <>
              {button.type === "external" && (
                <a
                  href={button.url}
                  target="_blank"
                  className={"button-link blue"}
                  key={key}
                >
                  {button.children}
                </a>
              )}
              {button.type === "internal" && (
                <Link to={button.url} className={"button-link blue"} key={key}>
                  {button.children}
                </Link>
              )}
            </>
          ))}
      </div>
    </div>
  );
}

export default ProjectCard;
