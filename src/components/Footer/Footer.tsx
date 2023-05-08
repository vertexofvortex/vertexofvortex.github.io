import s from "./Footer.module.scss";

export function Footer() {
  return (
    <footer>
      <div className={s.content}>
        <div className={s.copyright}>{`\udb81\udde6`} 2023 Nikolay Myagkov</div>
      </div>
    </footer>
  );
}

export default Footer;
