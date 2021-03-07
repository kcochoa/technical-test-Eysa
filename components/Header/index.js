import styles from "./Header.module.scss";
import Menu from "../Menu";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <Link href="/movies">
          <img className={styles.img_logo} src="/logo.svg" />
        </Link>
        <Menu />
      </header>
    </>
  );
};

export default Header;
