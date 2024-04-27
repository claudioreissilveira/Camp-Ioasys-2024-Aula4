import styles from "./Astyle.module.css";

export function Abuttonlink({ href, children }) {
    return <a className={styles.a} href={href}>{children}</a>;
  }
