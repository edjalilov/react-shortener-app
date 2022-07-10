import styles from "./Header.module.scss";
import Working from "../../assets/illustration-working.svg";

export const Header = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.img_wrapper}>
          <img src={Working} alt="working-img" />
        </div>
        <article className={styles.wrapper}>
          <h1 className={styles.title}>Paste the URL to be shortened</h1>
          <p className={styles.description}>
            Shortly is a free tool to shorten a URL or reduce a link Use our
            URL Shortener to create a shortened link making it easy to remember.
          </p>
        </article>
      </header>
    </div>
  );
};
