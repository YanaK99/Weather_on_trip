import { Days } from "./components/common/types";

export const fahrenheitToCelsius = (fahrenheit: number) => {
  return (((fahrenheit - 32) * 5) / 9).toFixed(2);
};

export const getCurrentDate = () => {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();

  return `${year}-${month}-${day}`;
};

export const getDay = (dateString: string): Days => {
  const parts = dateString.split("-");
  const year = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10) - 1;
  const day = parseInt(parts[2], 10);

  const date = new Date(year, month, day);

  const dayOfWeek = date.getDay();

  const days: Days[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[dayOfWeek];
};
