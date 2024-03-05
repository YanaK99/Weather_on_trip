import { Weather } from "../../models/Weather";
import { getDay } from "../../utils";
import { weatherVariant } from "../common/constants";
import styles from "./SelectedTrip.module.css";
import { Timer } from "./components/Timer/Timer";
import iconPing from "../../assets/icons/pinguin.svg";
import { background } from "./constants";
import { fahrenheitToCelsius } from "../../utils";

type SelectedTripProps = {
  currentWeather: Weather | null;
  deadline: string;
};

export function SelectedTrip({ currentWeather, deadline }: SelectedTripProps) {
  return (
    <div className={styles.wrapper}>
      {currentWeather ? (
        <>
          <img
            className={styles.backgroundImage}
            src={background[currentWeather.days[0].icon]}
            alt="icon"
          />
          <img className={styles.logoImage} src={iconPing} alt="icon" />
          <div className={styles.blockWeatherToday}>
            <div className={styles.weekDay}>
              {getDay(currentWeather.days[0].datetime)}
            </div>
            <div className={styles.blockTemperatureToday}>
              <img
                src={weatherVariant[currentWeather.days[0].icon]}
                alt="weather"
              />
              <div className={styles.temperatureText}>
                {fahrenheitToCelsius(currentWeather.days[0].temp)}
              </div>
              <span className={styles.temperatureSpanText}>°C</span>
            </div>
            <div className={styles.temperatureCity}>
              {currentWeather.address}
            </div>
          </div>
          <Timer deadline={deadline} />
        </>
      ) : (
        <div className={styles.text}>Please select your trip!</div>
      )}
    </div>
  );
}
