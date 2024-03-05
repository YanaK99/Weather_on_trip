import {
  ReactNode,
  createContext,
  useContext,
  Context,
  useState,
  useEffect,
} from "react";
import { useGetTrips } from "../api/hooks/useGetTrips";
import { Trip } from "../models/Trip";
import { useGetWeather } from "../api/hooks/useGetWeather";
import { Weather } from "../models/Weather";
import { useGetCurrentWeather } from "../api/hooks/useGetCurrentWeather";

const StorageContext = createContext<StorageContextProps | undefined>(
  undefined
);

type StorageProviderProps = {
  children: ReactNode;
};

type StorageContextProps = {
  getTrips: () => Trip[];
  trips: Trip[];
  searchTrips: (value: string) => void;
  weather: Weather | null;
  getWeather: (
    city: string,
    startDate: string,
    endDate: string
  ) => Promise<void>;
  currentWeather: Weather | null;
  getCurrentWeather: (city: string, date: string) => Promise<void>;
};

export function StorageProvider({ children }: StorageProviderProps) {
  const [filteredTrips, setFilteredTrips] = useState<Trip[]>([]);
  const { getTrips, trips } = useGetTrips();
  const { weather, getWeather } = useGetWeather();
  const { currentWeather, getCurrentWeather } = useGetCurrentWeather();

  const searchTrips = (value: string) => {
    setFilteredTrips(trips.filter((trip) => trip.name.includes(value.trim())));
  };

  useEffect(() => {
    setFilteredTrips(trips);
  }, [trips]);
  return (
    <StorageContext.Provider
      value={{
        getTrips,
        trips: filteredTrips,
        searchTrips,
        weather,
        getWeather,
        currentWeather,
        getCurrentWeather,
      }}
    >
      {children}
    </StorageContext.Provider>
  );
}

export const useStorage = (): StorageContextProps => {
  const context = useContext<StorageContextProps>(
    StorageContext as Context<StorageContextProps>
  );
  if (!context) {
    throw new Error("useStorage must be used within a StorageProvider");
  }
  return context;
};
