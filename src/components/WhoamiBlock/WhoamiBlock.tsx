import { Section } from "..";
import s from "./WhoamiBlock.module.scss";

export function WhoamiBlock() {
  return (
    <Section className={s.whoami} promptCommand={"whoami"}>
      <div className={s.out}>
        Меня зовут Николай, я из Краснодара, на данный момент являюсь
        фронтенд-разработчиком, но это не мешает мне заниматься и другими вещами. Например, иногда я пишу бэкенд, разбираюсь с
        алгоритмами и структурами данных на С++ и Java, дизайню логотипы на некоммерческой основе. Ниже представлен список основных вещей, которые я умею делать.
      </div>
    </Section>
  );
}

export default WhoamiBlock;
