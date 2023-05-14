import axios, { AxiosResponse } from "axios";
import { IHeaderLink } from "../../models";

export const loadRoot = async (): Promise<any> => {
  const headerLinks: AxiosResponse<IHeaderLink[]> = await axios.get(
    "/content/header_links.json"
  );

  return headerLinks.data;
};
