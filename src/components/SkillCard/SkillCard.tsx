import { ReactNode } from "react";
import s from "./SkillCard.module.scss";

interface Props {
  icon: string;
  title: ReactNode;
  description: ReactNode;
}

export function SkillCard({ icon, title, description }: Props) {
  return (
    <div className={s.card}>
      {icon} {title}
      <br />
      <br />
      <div className={s.description}>{description}</div>
    </div>
  );
}

export default SkillCard;
