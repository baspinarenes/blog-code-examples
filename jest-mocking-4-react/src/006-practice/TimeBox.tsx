import React from "react";

const TimeBox: React.FC<TimeBoxProps> = ({ type, value }) => {
  const helperTextsByType = {
    day: "gün",
    hour: "saat",
    min: "dakika",
    sec: "saniye",
  };

  return (
    <div className="time-box">
      <p>{value}</p>
      <p>{helperTextsByType[type]}</p>
    </div>
  );
};

export interface TimeBoxProps {
  value: number;
  type: "day" | "hour" | "min" | "sec";
}

export default TimeBox;
