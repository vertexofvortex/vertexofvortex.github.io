import { useLoaderData } from "react-router-dom";
import { Gallery, MainContent, Section } from "../../components";
import s from "./project.module.scss";
import { IProject } from "../../models";

export function Project() {
  const project = useLoaderData() as IProject;

  return (
    <MainContent>
      <Section
        className={s.project}
        promptCommand="cat *"
        promptDir={`~/projects/${project.slugId}`}
      >
        {/* TODO: мб сделать тут аски арт из заголовка? */}
        <div className={s.title}>VK RSS Parser</div>
        <div className={s.cover}>
          <img src={project.coverUrl} />
        </div>
        <div className={s.description}>{project.fullView.description}</div>
        {project.fullView.galleryPicturesUrls && (
          <Gallery pictures={project.fullView.galleryPicturesUrls} />
        )}
      </Section>
    </MainContent>
  );
}

export default Project;
