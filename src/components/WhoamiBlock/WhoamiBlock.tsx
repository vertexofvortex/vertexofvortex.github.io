import { Section } from "..";
import s from "./WhoamiBlock.module.scss";

export function WhoamiBlock() {
  return (
    <Section className={s.whoami} promptCommand={"whoami"}>
      <div className={s.out}>
        Меня зовут Николай, я фронтенд-разработчик. В основном пишу на React, но в последнее время также осваиваю и Vue 3. Однако помимо фронтенда я также занимаюсь и другими вещами, например, иногда пишу бэкенды на Python и Go, ботов для Telegram и Discord, разбираюсь с алгоритмами и структурами данных, пытаюсь в C++. Ниже представлен список основных вещей, которые я умею делать
      </div>
    </Section>
  );
}

export default WhoamiBlock;
