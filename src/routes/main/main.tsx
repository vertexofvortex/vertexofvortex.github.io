import {
  MainContent,
  NeofetchBlock,
  ProjectsBlock,
  SkillsBlock,
  WhoamiBlock,
} from "../../components";

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
