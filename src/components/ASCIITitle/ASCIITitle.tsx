import asciify from "../../asciificator";
import s from "./ASCIITitle.module.scss";

interface Props {
  text: string;
  char?: string;
  isDividedByWords?: boolean;
}

export function ASCIITitle({ text, char, isDividedByWords }: Props) {
  return (
    <>
      {!isDividedByWords && (
        <div className={`${s.asciiTitle} ${s.letters}`}>
          {asciify(text, char).map((char, key) => (
            <div className={s.char} key={key}>
              {char}
            </div>
          ))}
        </div>
      )}
      {isDividedByWords && (
        <div className={`${s.asciiTitle} ${s.words}`}>
          {asciify(text, char, true).map((word, wordKey) => (
            <div
              className={s.word}
              key={wordKey}
              style={{ animationDelay: `${wordKey / 10}s` }}
            >
              {word.map((char: string[], charKey: number) => (
                <div className={s.char} key={charKey}>
                  {char}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default ASCIITitle;
