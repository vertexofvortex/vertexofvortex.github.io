import { Children, ReactNode } from "react";
import s from "./MainContent.module.scss";

interface Props {
  children: ReactNode;
}

export function MainContent({ children }: Props) {
  return (
    <main>
      <div className={`${s.content} content`}>{children}</div>
    </main>
  );
}

export default MainContent;
