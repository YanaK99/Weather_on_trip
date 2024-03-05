import styles from "./SliderArrow.module.css";
import { IMAGES, POSITIONS, Side } from "./constants";

type SliderArrowProps = {
  side: Side;
  onClick: () => void;
};

export function SliderArrow({ side, onClick }: SliderArrowProps) {
  return (
    <div
      onClick={onClick}
      className={`${styles.wrapper} ${styles[POSITIONS[side]]}`}
    >
      <img src={IMAGES[side]} alt="arrow" />
    </div>
  );
}
