import { useLoaderData } from "react-router-dom";
import { MainContent, ProjectCard, Section } from "../../components";
import { IProject } from "../../models";
import s from "./projects.module.scss";

function Projects() {
  const projects = useLoaderData() as IProject[];

  return (
    <MainContent>
      <Section className={s.projects} promptCommand="ls" promptDir="~/projects">
        <div className={s.content}>
          {projects.map((project, key) => (
            <ProjectCard {...project} key={key} />
          ))}
        </div>
      </Section>
    </MainContent>
  );
}

export default Projects;
