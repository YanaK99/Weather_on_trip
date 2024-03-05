import storageService from "../StorageClient";
import { Trip } from "../../models/Trip";
import { useCallback } from "react";

export const useAddTrips = () => {
  const addTrip = useCallback((trip: Omit<Trip, "id">) => {
    storageService.addItem(trip);
  }, []);
  const addTrips = useCallback((trips: Omit<Trip, "id">[]) => {
    storageService.addItems(trips);
  }, []);
  return { addTrip, addTrips };
};
