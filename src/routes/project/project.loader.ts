import axios, { AxiosResponse } from "axios";
import { IProject } from "../../models";
import { LoaderFunctionArgs } from "react-router-dom";

export const loadProject = async ({
  request,
  params,
}: LoaderFunctionArgs): Promise<any> => {
  const projects: AxiosResponse<IProject[]> = await axios.get(
    "/content/projects.json"
  );

  return projects.data.find((e) => e.slugId === params.slug);
};
