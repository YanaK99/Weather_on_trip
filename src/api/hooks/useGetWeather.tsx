import { useCallback, useState } from "react";
import apiService from "../ApiClient";
import { Weather } from "../../models/Weather";

export const useGetWeather = () => {
  const [weather, setWeather] = useState<Weather | null>(null);
  const getWeather = useCallback(
    async (city: string, startDate: string, endDate: string) => {
      const data = await apiService.get<Weather>(
        `${city}/${startDate}/${endDate}`
      );
      setWeather(data);
    },
    []
  );
  return { getWeather, weather };
};
