import { Header } from "../../../common/Header/Header";
import { WeatherItem } from "./WeatherItem/WeatherItem";
import styles from "./Weather.module.css";
import { Weather as WeatherType } from "../../../../models/Weather";
import { getDay } from "../../../../utils";
import { v4 as uuidv4 } from "uuid";

type WeatherProps = {
  weathers: WeatherType["days"];
};

export function Weather({ weathers }: WeatherProps) {
  return (
    <div className={styles.wrapper}>
      <Header header="Week" secondColor />
      <div className={styles.block}>
        {weathers.map(({ icon, tempmax, tempmin, datetime }) => (
          <WeatherItem
            key={uuidv4()}
            day={getDay(datetime)}
            temperatures={`${tempmin}°/${tempmax}°`}
            variant={icon}
          />
        ))}
      </div>
    </div>
  );
}
