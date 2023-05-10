import { ReactNode } from "react";

export interface IProjectButton {
  type: "internal" | "external";
  url: string;
  children: ReactNode;
}

export interface IProject {
  coverUrl: string;
  title: ReactNode;
  buttons?: IProjectButton[];

  featuredView: {
    description: ReactNode;
  };

  fullView: {
    description: ReactNode;
    galleryPicturesUrls?: string[];
  };
}

export interface IContent {
  projects: IProject[];
}
