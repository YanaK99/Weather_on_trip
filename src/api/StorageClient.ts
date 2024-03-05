import { v4 as uuidv4 } from "uuid";
import { Trip } from "../models/Trip";

class StorageClient {
  private localStorageKey = "trips";

  constructor() {}

  public getList(): Trip[] {
    return this.getDataFromLocalStorage();
  }

  public addItem(trip: Omit<Trip, "id">): void {
    const list = this.getDataFromLocalStorage();

    const newTrip: Trip = { ...trip, id: uuidv4() };

    list.unshift(newTrip);

    this.setDataToLocalStorage(list);
  }

  public addItems(trips: Omit<Trip, "id">[]): void {
    const list = this.getDataFromLocalStorage();

    const newTrips: Trip[] = trips.map((trip) => ({ ...trip, id: uuidv4() }));

    list.unshift(...newTrips);

    this.setDataToLocalStorage(list);
  }

  private getDataFromLocalStorage(): Trip[] {
    const data = localStorage.getItem(this.localStorageKey);
    if (!data) return [];

    return JSON.parse(data) ?? [];
  }

  private setDataToLocalStorage(list: Trip[]) {
    localStorage.setItem(this.localStorageKey, JSON.stringify(list));
  }
}

export default new StorageClient();
