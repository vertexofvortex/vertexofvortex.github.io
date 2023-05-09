import { ReactNode } from "react";

export interface IProject {
  pictureUrl: string;
  title: string;
  description: string;
  buttons: Array<{
    className: string;
    href: string;
    text: ReactNode;
  }>;
}

export interface IContent {
  projects: IProject[];
}
