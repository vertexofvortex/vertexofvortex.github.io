import { SkillCard } from "..";
import s from "./SkillsBlock.module.scss";

export function SkillsBlock() {
  return (
    <div className={`block ${s.skills}`}>
      <div className={`cmd ${s.cmd}`}>
        <span style={{ color: "var(--vim-vimVar)" }}>user@vertex: ~</span> cat
        skills.txt
      </div>
      <div className={`out ${s.out}`}>
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
            description={"У меня есть диплом"}
          />
          <div className={s.more}>
            В будущем здесь обязательно появятся новые карточки...
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsBlock;
