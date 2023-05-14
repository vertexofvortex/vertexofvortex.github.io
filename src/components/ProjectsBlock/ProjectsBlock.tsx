import { Link } from "react-router-dom";
import { ProjectCard, Section } from "..";
import { IProject } from "../../models";
import s from "./ProjectsBlock.module.scss";

interface Props {
  data: IProject[];
}

export function ProjectsBlock({ data }: Props) {
  return (
    <Section className={s.projects} promptCommand="ls ./projects -U | head -2">
      <div className={s.content}>
        {data.slice(data.length - 2, data.length).map((project, key) => (
          <ProjectCard {...project} key={key} />
        ))}
      </div>
      <div className={s.moreButton}>
        <Link to="/projects" className="button-link">
          {`\udb80\udd69`} Мои остальные работы
        </Link>
      </div>
    </Section>
  );
}

export default ProjectsBlock;
