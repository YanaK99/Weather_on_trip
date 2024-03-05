import styles from "./Header.module.css";

type HeaderProps = {
  headerText?: string;
  header: string;
  secondColor?: boolean;
};

export function Header({
  headerText = "",
  header,
  secondColor = false,
}: HeaderProps) {
  return (
    <h2 className={secondColor ? styles.secondColor : ""}>
      {headerText && <span className={styles.headerText}>{headerText}</span>}
      {header}
    </h2>
  );
}
