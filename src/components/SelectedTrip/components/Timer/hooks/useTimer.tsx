import { useEffect, useState } from "react";

export const useTimer = (deadline: string) => {
  function getTimeRemaining(endtime: string) {
    const currentTime = new Date();
    const t = Date.parse(endtime) - currentTime.getTime(),
      days = Math.floor(t / (1000 * 60 * 60 * 24)),
      seconds = Math.floor((t / 1000) % 60),
      minutes = Math.floor((t / 1000 / 60) % 60),
      hours = Math.floor((t / (1000 * 60 * 60)) % 24);

    return {
      total: t,
      days,
      hours,
      minutes,
      seconds,
    };
  }

  function getZero(num: number) {
    if (num >= 0 && num < 10) {
      return "0" + num;
    } else {
      return num.toString();
    }
  }

  const [date, setDate] = useState<{
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
  }>({ days: "", hours: "", minutes: "", seconds: "" });

  useEffect(() => {
    const timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
      const t = getTimeRemaining(deadline);

      setDate({
        days: getZero(t.days),
        hours: getZero(t.hours),
        minutes: getZero(t.minutes),
        seconds: getZero(t.seconds),
      });
    }
    return () => clearInterval(timeInterval);
  }, [deadline]);
  return date;
};
