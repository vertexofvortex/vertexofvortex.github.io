import { useLoaderData } from "react-router";
import {
  MainContent,
  NeofetchBlock,
  ProjectsBlock,
  SkillsBlock,
  WhoamiBlock,
} from "../../components";
import { IContent } from "../../models";

function Main() {
  const content = useLoaderData() as IContent;

  return (
    <MainContent>
      <NeofetchBlock />
      <WhoamiBlock />
      <SkillsBlock />
      <ProjectsBlock data={content.projects} />
    </MainContent>
  );
}

export default Main;
