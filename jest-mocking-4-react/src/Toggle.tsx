import { useState } from "react";
const Toggle = () => {
  const [on, setOn] = useState(false);
  return <button onClick={() => setOn(!on)}>{on ? "ON" : "OFF"}</button>;
};
export default Toggle;
