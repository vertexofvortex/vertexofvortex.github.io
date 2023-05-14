import axios, { AxiosResponse } from "axios";
import { IContact, IProject } from "../../models";

export const loadMain = async (): Promise<any> => {
  const projects: AxiosResponse<IProject[]> = await axios.get(
    "/content/projects.json"
  );
  const contacts: AxiosResponse<IContact[]> = await axios.get(
    "/content/contacts.json"
  );

  return {
    projects: projects.data,
    contacts: contacts.data,
  };
};
