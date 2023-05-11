import { useLoaderData } from "react-router-dom";
import { ASCIITitle, Gallery, MainContent, Section } from "../../components";
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
        <div className={s.cover}>
          <div className={s.coverContainer}>
            <img src={project.coverUrl} />
          </div>
          <div className={s.title}>
            <ASCIITitle text={project.title?.toString()!} isDividedByWords />
          </div>
        </div>
        <div className={s.description}>{project.fullView.description}</div>
        <div className={s.gallery}>
          {project.fullView.galleryPictures && (
            <>
              <div>Галерея</div>
              <Gallery pictures={project.fullView.galleryPictures} />
            </>
          )}
        </div>
      </Section>
    </MainContent>
  );
}

export default Project;
