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
  title: ReactNode;
  buttons?: IProjectButton[];

  featuredView: {
    description: ReactNode;
  };

  fullView: {
    description: ReactNode;
    galleryPictures?: IGalleryPicture[];
  };
}

export interface IContent {
  projects: IProject[];
}
