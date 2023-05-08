import { MainContent, SkillCard } from "../../components";
import s from "./main.module.scss";

function Main() {
  const dateBirth = new Date(1017230400000);
  const dateNow = new Date();

  return (
    <MainContent>
      <div className={`block ${s.neofetch}`}>
        <div className={s.cmd}>
          <span style={{ color: "var(--vim-vimVar)" }}>user@vertex: ~</span>{" "}
          neofetch
        </div>
        <div className={s.out}>
          <div className={s.logo} />
          <div className={s.terminal}>
            <span className={s.colored}>user</span>@
            <span className={s.colored}>vertex</span>
            <br />
            ---------------
            <br />
            <span className={s.colored}>OS</span>: Standard Human Neural System
            <br />
            <span className={s.colored}>Kernel</span>: 5.10.102.1
            <br />
            <span className={s.colored}>Uptime</span>:{" "}
            {dateNow.getFullYear() - dateBirth.getFullYear()} years
            <br />
            <span className={s.colored}>Packages</span>: 5948 (pacman)
            <br />
            <span className={s.colored}>Shell</span>: zsh 5.8.1
            <br />
            <span className={s.colored}>Theme</span>: Light [Melanin pigment]
            <br />
            <span className={s.colored}>Terminal</span>: vertex's personal
            website
            <br />
            <span className={s.colored}>CPU</span>: Human Brain @ 0.500GHz -
            25.000GHz
            <br />
            <span className={s.colored}>GPU</span>: Visual Cortex
            <br />
            <span className={s.colored}>Memory</span>: 86B Neurons
          </div>
        </div>
      </div>
      <div className={`block ${s.about}`}>
        <div className={s.cmd}>
          <span style={{ color: "var(--vim-vimVar)" }}>user@vertex: ~</span>{" "}
          whoami
        </div>
        <div className={s.out}>
          Меня зовут Николай, я из Краснодара, на данный момент являюсь
          фронтенд-разработчиком, но это не мешает мне заниматься чем угодно,
          кроме фронтенда. Так, например, иногда я пишу бэкенд или разбираюсь с
          алгоритмами на С++. Ниже представлен более-менее полный список того,
          что я умею делать.
        </div>
      </div>
      <div className={`block ${s.skills}`}>
        <div className={s.cmd}>
          <span style={{ color: "var(--vim-vimVar)" }}>user@vertex: ~</span> cat
          skills.txt
        </div>
        <div className={s.out}>
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
          </div>
        </div>
      </div>
    </MainContent>
  );
}

export default Main;
