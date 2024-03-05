import { weatherVariant } from "../components/common/constants";

export type Weather = {
  address: string;
  days: {
    datetime: string;
    tempmax: number;
    tempmin: number;
    temp: number;
    icon: keyof typeof weatherVariant;
  }[];
};
