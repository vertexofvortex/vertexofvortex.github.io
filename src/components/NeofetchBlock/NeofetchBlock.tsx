import { Section } from "..";
import s from "./NeofetchBlock.module.scss";

export function NeofetchBlock() {
  const dateBirth = new Date(2002, 2, 27, 12);
  const dateNow = new Date();
  const dateDiff = dateNow.valueOf() - dateBirth.valueOf();

  return (
    <Section className={s.neofetch} promptCommand={"neofetch"}>
      <div className={s.content}>
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
          {Math.floor(dateDiff / (1000 * 3600 * 24 * 365.25))} years
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
    </Section>
  );
}

export default NeofetchBlock;
