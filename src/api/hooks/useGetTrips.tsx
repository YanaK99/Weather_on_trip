import { useCallback, useState } from "react";
import storageService from "../StorageClient";
import { Trip } from "../../models/Trip";

export const useGetTrips = () => {
  const [trips, setTrips] = useState<Trip[]>([]);
  const getTrips = useCallback(() => {
    const data = storageService.getList();
    setTrips(data);
    return data;
  }, []);
  return { getTrips, trips };
};
