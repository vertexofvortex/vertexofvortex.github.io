import { ReactNode } from "react";
import s from "./MainContent.module.scss";
import { ScrollRestoration } from "react-router-dom";

interface Props {
  children: ReactNode;
}

export function MainContent({ children }: Props) {
  return (
    <main>
      <ScrollRestoration />
      <div className={`${s.content} content`}>{children}</div>
    </main>
  );
}

export default MainContent;
