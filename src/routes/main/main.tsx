import { MainContent } from "../../components";
import s from "./main.module.scss";

function Main() {
  const dateBirth = new Date(1017230400000);
  const dateNow = new Date();

  return (
    <MainContent>
      <div className={s.neofetchBlock}>
        <div className={s.logo}>logo</div>
        <div className={s.terminal}>
          <span className={s.colored}>root</span>@
          <span className={s.colored}>nikolay_myagkov</span>
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
          <span className={s.colored}>Terminal</span>: vertex's personal website
          <br />
          <span className={s.colored}>CPU</span>: Human Brain @ 0.500GHz -
          25.000GHz
          <br />
          <span className={s.colored}>GPU</span>: Visual Cortex
          <br />
          <span className={s.colored}>Memory</span>: 86B Neurons
        </div>
      </div>
    </MainContent>
  );
}

export default Main;
