import { Section, SkillCard } from "..";
import s from "./SkillsBlock.module.scss";

export function SkillsBlock() {
  return (
    <Section className={s.skills} promptCommand="cat skills.txt">
      <div className={s.cards}>
        <SkillCard
          icon={`\udb80\udf1e`}
          title={"Фронтенд-разработка"}
          description={"JS/TS, React, NextJS, Redux, SCSS"}
        />
        <SkillCard
          icon={`\udb81\udc8d`}
          title={"Бэкенд-разработка"}
          description={"Python, FastAPI, SQL, SQLAlchemy"}
        />
        <SkillCard
          icon={`\udb80\ude00`}
          title={"Системное/сетевое администрирование"}
          description={
            "OSI, Cisco, MikroTik, Windows Server, Linux, Docker, VMWare ESXi"
          }
        />
        <SkillCard
          icon={`\udb81\udc83`}
          title={"Информационная безопасность"}
          description={"Работа с программно-аппаратными комплексами приватных вычислительных сетей, а также с DLP-системами"}
        />
        <div className={s.more}>
          В будущем здесь обязательно появятся новые карточки...
        </div>
      </div>
    </Section>
  );
}

export default SkillsBlock;
