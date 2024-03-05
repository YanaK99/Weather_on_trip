import styles from "./Button.module.css";
import { COLORS } from "./constants";

type ButtonProps = {
  content: string;
  color: keyof typeof COLORS;
  onClick: () => void;
};

export function Button({ content, color, onClick }: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${styles.formButton} ${styles[COLORS[color]]}`}
    >
      {content}
    </button>
  );
}
