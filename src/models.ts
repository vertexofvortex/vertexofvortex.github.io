import { ReactNode } from "react";

export interface IProjectButton {
  type: "internal" | "external";
  url: string;
  children: ReactNode;
}

export interface IGalleryPicture {
  url: string;
  description: ReactNode;
}

export interface IProject {
  slugId: string;
  coverUrl: string;
  coverVerticalPos?: "start" | "center" | "end";
  title: ReactNode;
  buttons?: IProjectButton[];

  featuredView: {
    description: string;
  };

  fullView: {
    description: string;
    galleryPictures?: IGalleryPicture[];
  };
}

export interface IContact {
  text: string;
  url: string;
  color: string;
  background: string;
}

export interface IContent {
  projects: IProject[];
  contacts: IContact[];
}
