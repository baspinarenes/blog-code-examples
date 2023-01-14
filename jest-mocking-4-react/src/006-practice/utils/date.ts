function calculateDeltaBetweenDates(futureDate: Date, currDate: Date = new Date()) {
  let delta = futureDate.valueOf() - currDate.valueOf();

  if (delta < 0) {
    delta = 0;
  }

  return delta;
}

function convertDeltaToDaysHoursMinutes(delta: number) {
  const deltaAsSeconds = Math.floor(delta / 1000);

  return {
    remainingDays: Math.floor(deltaAsSeconds / (60 * 60 * 24)),
    remainingHours: Math.floor((deltaAsSeconds / (60 * 60)) % 24),
    remainingMinutes: Math.floor((deltaAsSeconds / 60) % 60),
    remainingSeconds: Math.floor(deltaAsSeconds % 60),
  };
}

export { calculateDeltaBetweenDates, convertDeltaToDaysHoursMinutes };
