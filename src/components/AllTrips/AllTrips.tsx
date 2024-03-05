import { Header } from "../common/Header/Header";
import { SearchInput } from "../common/SearchInput/SearchInput";
import { Slider } from "../common/Slider/Slider";
import styles from "./AllTrips.module.css";
import { Weather } from "./components/Weather/Weather";
import { useStorage } from "../../providers/StorageProvider";
import { useState } from "react";

export function AllTrips() {
  const { searchTrips } = useStorage();
  const [value, setValue] = useState("");

  const { weather } = useStorage();

  const handleChange = (value: string) => {
    setValue(value);
    searchTrips(value);
  };
  return (
    <div className={styles.wrapper}>
      <Header headerText="Weather" header="Forecast" />
      <SearchInput onChange={handleChange} value={value} />
      <Slider />
      <Weather weathers={weather?.days ?? []} />
    </div>
  );
}
