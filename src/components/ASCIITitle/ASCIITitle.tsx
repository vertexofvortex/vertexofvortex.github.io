import asciify from "../../asciificator";
import s from "./ASCIITitle.module.scss";

interface Props {
  text: string;
}

export function ASCIITitle({ text }: Props) {
  const textCharacters = asciify(text);

  return (
    <div className={s.asciiTitle}>
      {textCharacters.map((char, key) => (
        <div className={s.char} key={key}>
          {char}
        </div>
      ))}
    </div>
  );
}

export default ASCIITitle;
