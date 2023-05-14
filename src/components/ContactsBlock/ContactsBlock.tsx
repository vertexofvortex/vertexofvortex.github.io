import { Section } from "..";
import { IContact } from "../../models";
import s from "./ContactsBlock.module.scss";

interface Props {
  data: IContact[];
}

export function ContactsBlock({ data }: Props) {
  return (
    <Section className={s.contacts} promptCommand="cat contacts.txt">
      <div className={s.content}>
        {data.map((link, key) => (
          <a
            href={link.url}
            target="_blank"
            className="button-link big"
            key={key}
            style={{ background: link.background, color: link.color }}
          >
            {link.text}
          </a>
        ))}
      </div>
    </Section>
  );
}

export default ContactsBlock;
