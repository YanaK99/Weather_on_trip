import { useCallback, useState } from "react";
import apiService from "../ApiClient";
import { Weather } from "../../models/Weather";

export const useGetCurrentWeather = () => {
  const [currentWeather, setCurrentWeather] = useState<Weather | null>(null);
  const getCurrentWeather = useCallback(async (city: string, date: string) => {
    const data = await apiService.get<Weather>(`${city}/${date}/${date}`);
    setCurrentWeather(data);
  }, []);
  return { getCurrentWeather, currentWeather };
};
