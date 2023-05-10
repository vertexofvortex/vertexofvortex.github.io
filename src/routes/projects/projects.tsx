import { useLoaderData } from "react-router-dom";
import { MainContent } from "../../components";
import { IProject } from "../../models";

function Projects() {
  const projects = useLoaderData() as IProject[];

  return <MainContent>Projects</MainContent>;
}

export default Projects;
