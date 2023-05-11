import { ReactNode } from "react";
import s from "./Section.module.scss";

interface Props {
  promptCommand: ReactNode;
  promptDir?: string;
  children: ReactNode;
  className?: string;
}

export function Section({
  promptCommand,
  promptDir,
  children,
  className,
}: Props) {
  return (
    <div className={`${s.section} ${className}`}>
      <div className={s.cmd}>
        <span style={{ color: "var(--vim-vimVar)" }}>user@vertex</span>{" "}
        <span style={{ color: "var(--vim-vimCommand)" }}>
          {promptDir || "~"}{" "}
          <span style={{ color: "var(--vim-vimVar)" }}>{`\uf105`}</span>
        </span>{" "}
        {promptCommand}
      </div>
      <div className={s.out}>{children}</div>
    </div>
  );
}

export default Section;
