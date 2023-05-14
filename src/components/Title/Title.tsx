import { ReactNode } from "react";
import s from "./Title.module.scss";

interface Props {
  children: ReactNode;
  hasMarginBottom?: boolean;
}

export function Title({ children, hasMarginBottom = false }: Props) {
  return (
    <div className={`${s.title} ${hasMarginBottom ? s.mb : ""}`}>
      {children}
    </div>
  );
}

export default Title;
