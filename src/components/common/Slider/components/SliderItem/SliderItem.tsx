import styles from "./SliderItem.module.css";
import { convertDate } from "./utils";

type SliderItemProps = {
  src: string;
  isVisible: boolean;
  city: string;
  startDate: string;
  endDate: string;
  onClick: () => void;
};

export function SliderItem({
  src,
  isVisible,
  city,
  startDate,
  endDate,
  onClick,
}: SliderItemProps) {
  return (
    <div
      style={{ display: isVisible ? "flex" : "none" }}
      className={styles.wrapper}
      onClick={onClick}
    >
      <img src={src} alt="city" />
      <div className={styles.content}>
        <div>{city}</div>
        <div className={styles.contentDate}>
          <span>{convertDate(startDate)}</span>
          <span className={styles.hyphen}>-</span>
          <span>{convertDate(endDate)}</span>
        </div>
      </div>
    </div>
  );
}
