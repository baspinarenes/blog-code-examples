import React, { useEffect, useState } from "react";
import TimeBox from "./TimeBox";
import { calculateDeltaBetweenDates, convertDeltaToDaysHoursMinutes } from "./utils/date";

const justiceDate = new Date(2023, 5, 18, 17);
let RemainingTimerInterval: any;

const RemainingTimer: React.FC = () => {
  const [remainingTime, setRemainingTime] = useState(calculateDeltaBetweenDates(justiceDate));

  useEffect(() => {
    RemainingTimerInterval = setInterval(() => {
      setRemainingTime(calculateDeltaBetweenDates(justiceDate));
    }, 1000);

    return () => {
      clearInterval(RemainingTimerInterval);
    };
  }, []);

  if (remainingTime === 0) {
    clearInterval(RemainingTimerInterval);

    return <div data-testid="timer-ended-text">Başardık! Artık yeni bir problemimiz var...</div>;
  }

  const { remainingDays, remainingHours, remainingMinutes, remainingSeconds } =
    convertDeltaToDaysHoursMinutes(remainingTime);

  return (
    <div>
      <p>Adalet Sayacı</p>
      <div data-testid="time-box-container">
        <TimeBox
          type="day"
          value={remainingDays}
        />
        <TimeBox
          type="hour"
          value={remainingHours}
        />
        <TimeBox
          type="min"
          value={remainingMinutes}
        />
        <TimeBox
          type="sec"
          value={remainingSeconds}
        />
      </div>
    </div>
  );
};

export default RemainingTimer;
