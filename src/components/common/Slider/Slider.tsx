import { useSlider } from "./hooks";
import styles from "./Slider.module.css";
import { SliderArrow } from "./components/SliderArrow/SliderArrow";
import { SliderButton } from "./components/SliderButton/SliderButton";
import { SliderItem } from "./components/SliderItem/SliderItem";
import { useEffect, useRef, useState } from "react";
import { useStorage } from "../../../providers/StorageProvider";
import tripsJSON from "../../../assets/json/trip.json";
import { useAddTrips } from "../../../api/hooks/useAddTrips";
import { getCurrentDate } from "../../../utils";

export function Slider() {
  const { getTrips, trips, getWeather, getCurrentWeather } = useStorage();
  const [width, setWidth] = useState(0);

  const { addTrips } = useAddTrips();

  useEffect(() => {
    setWidth(wrapperRef.current?.offsetWidth ?? 0);
  }, []);

  useEffect(() => {
    const initialTrips = getTrips();

    if (!initialTrips.length) {
      addTrips(tripsJSON);
      getTrips();
    }
  }, [getTrips, addTrips]);

  const wrapperRef = useRef<HTMLDivElement>(null);

  const { imagesPerSlide, currentIndex, nextSlide, prevSlide } = useSlider(
    trips.length,
    width
  );

  const onItemClick = (name: string, startDate: string, endDate: string) => {
    getWeather(name, startDate, endDate);
    getCurrentWeather(name, getCurrentDate());
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.cardsWrapper} ref={wrapperRef}>
          <SliderArrow onClick={() => prevSlide()} side="left" />
          <SliderArrow onClick={() => nextSlide()} side="right" />
          <div className={styles.cards}>
            {width &&
              trips.map(({ endDate, image, name, startDate, id }, i) => (
                <SliderItem
                  isVisible={
                    i >= currentIndex && i < currentIndex + imagesPerSlide
                  }
                  src={image}
                  key={id}
                  endDate={endDate}
                  city={name}
                  startDate={startDate}
                  onClick={() => onItemClick(name, startDate, endDate)}
                />
              ))}
          </div>
        </div>
        <div className={styles.buttonWrapper}>
          <SliderButton />
        </div>
      </div>
    </>
  );
}
