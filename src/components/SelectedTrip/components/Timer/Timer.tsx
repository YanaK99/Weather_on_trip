import styles from "./Timer.module.css";
import { useTimer } from "./hooks/useTimer";

type TimesToProps = {
  deadline: string;
};

export function Timer({ deadline }: TimesToProps) {
  const date = useTimer(deadline);

  return (
    <div className={styles.promotionTimer}>
      <div className={styles.timer}>
        <div className={styles.timerBlock}>
          <span className={styles.timerItem}>{date.days}</span>
          Days
        </div>
        <div className={styles.timerBlock}>
          <span className={styles.timerItem}>{date.hours}</span>
          Hours
        </div>
        <div className={styles.timerBlock}>
          <span className={styles.timerItem}>{date.minutes}</span>
          Minutes
        </div>
        <div className={styles.timerBlock}>
          <span className={styles.timerItem}>{date.seconds}</span>
          Seconds
        </div>
      </div>
    </div>
  );
}
