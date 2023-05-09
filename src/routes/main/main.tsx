import {
  MainContent,
  NeofetchBlock,
  ProjectsBlock,
  SkillsBlock,
  WhoamiBlock,
} from "../../components";
import s from "./main.module.scss";

function Main() {
  return (
    <MainContent>
      <NeofetchBlock />
      <WhoamiBlock />
      <SkillsBlock />
      <ProjectsBlock onlyFeatured />
    </MainContent>
  );
}

export default Main;
