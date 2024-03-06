import { useLoaderData } from "react-router";
import {
  ContactsBlock,
  MainContent,
  NeofetchBlock,
  ProjectsBlock,
  SEO,
  SkillsBlock,
  WhoamiBlock,
} from "../../components";
import { IContent } from "../../models";

function Main() {
  const content = useLoaderData() as IContent;

  return (
    <MainContent>
      <SEO
        title="vertex@github.io"
        description="Yet another web developer's website"
      />
      <NeofetchBlock />
      <WhoamiBlock />
      <SkillsBlock />
      <ProjectsBlock data={content.projects} />
      <ContactsBlock data={content.contacts} />
    </MainContent>
  );
}

export default Main;
