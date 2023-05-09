import s from "./WhoamiBlock.module.scss";

export function WhoamiBlock() {
  return (
    <div className={`block ${s.about}`}>
      <div className={`cmd ${s.cmd}`}>
        <span style={{ color: "var(--vim-vimVar)" }}>user@vertex: ~</span>{" "}
        whoami
      </div>
      <div className={s.out}>
        Меня зовут Николай, я из Краснодара, на данный момент являюсь
        фронтенд-разработчиком, но это не мешает мне заниматься чем угодно,
        кроме фронтенда. Так, например, иногда я пишу бэкенд или разбираюсь с
        алгоритмами на С++. Ниже представлен более-менее полный список того, что
        я умею делать.
      </div>
    </div>
  );
}

export default WhoamiBlock;
