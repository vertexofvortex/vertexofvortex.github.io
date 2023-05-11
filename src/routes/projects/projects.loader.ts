import axios, { AxiosResponse } from "axios";
import { IProject } from "../../models";

export const loadProjects = async (): Promise<any> => {
  const projects: AxiosResponse<IProject[]> = await axios.get(
    "/content/projects.json"
  );

  return projects.data;
};
