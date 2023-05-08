import styles from "./root.module.scss";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <div className={styles.root}>
      <header>header</header>
      <main>
        <Outlet />
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default Root;
