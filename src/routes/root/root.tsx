import { Footer, Header } from "../../components";
import styles from "./root.module.scss";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <div className={styles.root}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Root;
