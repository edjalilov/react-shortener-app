import styles from "./Navbar.module.scss";
import Logo from "../../assets/logo.svg";

export const Navbar = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <img src={Logo} alt="Logo" />
      </nav>
    </div>
  );
};
