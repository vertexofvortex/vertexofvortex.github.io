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
import parse, { DOMNode, Element, Text } from "html-react-parser";

export function Project() {
  const project = useLoaderData() as IProject;

  const replaceInternalLink = (
    domNode: DOMNode
  ): false | void | object | JSX.Element | null | undefined => {
    if (!(domNode instanceof Element)) return;

    if (
      domNode.name === "a" &&
      domNode.attribs &&
      domNode.attribs.href.startsWith("/")
    ) {
      return (
        <Link to={domNode.attribs.href}>
          {(domNode.children[0] as Text).data}
        </Link>
      );
    }
  };

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
        <div className={s.description}>
          {parse(project.fullView.description, {
            replace: replaceInternalLink,
          })}
        </div>
        {project.fullView.galleryPictures && (
          <div className={s.gallery}>
            <Gallery pictures={project.fullView.galleryPictures} hasTitle />
          </div>
        )}
        <div className={s.links}>
          <Title hasMarginBottom>Ссылки</Title>
          <div className={s.container}>
            {project.buttons?.map((button, key) => {
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
                  <Link
                    to={button.url}
                    className={"button-link blue"}
                    key={key}
                  >
                    {button.children}
                  </Link>
                );
            })}
          </div>
        </div>
      </Section>
    </MainContent>
  );
}

export default Project;
