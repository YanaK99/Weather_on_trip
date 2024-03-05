import styles from "./WeatherItem.module.css";
import { weatherVariant } from "../../../../common/constants";
import { Days } from "../../../../common/types";

type WeatherItemProps = {
  variant: keyof typeof weatherVariant;
  day: Days;
  temperatures: string;
};

export function WeatherItem({ day, variant, temperatures }: WeatherItemProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contentDay}>{day}</div>
      <img src={weatherVariant[variant]} alt="weather" />
      <div className={styles.contentTemperature}>{temperatures}</div>
    </div>
  );
}
