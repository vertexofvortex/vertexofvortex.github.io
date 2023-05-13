import { Link, useLoaderData } from "react-router-dom";
import {
  ASCIITitle,
  Gallery,
  MainContent,
  Section,
  Title,
} from "../../components";
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
        {project.fullView.galleryPictures && (
          <div className={s.gallery}>
            <Gallery pictures={project.fullView.galleryPictures} hasTitle />
          </div>
        )}
        <div className={s.links}>
          <Title hasMarginBottom>Ссылки</Title>
          <div className={s.container}>
            {project.buttons?.map((button, key) => (
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
                  <Link
                    to={button.url}
                    className={"button-link blue"}
                    key={key}
                  >
                    {button.children}
                  </Link>
                )}
              </>
            ))}
          </div>
        </div>
      </Section>
    </MainContent>
  );
}

export default Project;
