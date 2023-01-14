import React, { useEffect, useState } from "react";
import TimeBox from "./TimeBox";
import { calculateDeltaBetweenDates, convertDeltaToDaysHoursMinutes } from "./utils/date";

const timerEndDate = new Date(2023, 5, 18, 17);

const RemainingTimer: React.FC = () => {
  const [remainingTime, setRemainingTime] = useState(calculateDeltaBetweenDates(timerEndDate));
  let remainingTimerInterval: any;

  useEffect(() => {
    remainingTimerInterval = setInterval(() => {
      setRemainingTime(calculateDeltaBetweenDates(timerEndDate));
    }, 1000);

    return () => {
      clearInterval(remainingTimerInterval);
    };
  }, []);

  if (remainingTime === 0) {
    clearInterval(remainingTimerInterval);

    return <div data-testid="timer-ended-text">Timer finished!</div>;
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
