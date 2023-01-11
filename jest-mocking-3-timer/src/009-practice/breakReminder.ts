function breakReminder(breakActivity: any) {
  console.log("Starting working...");
  let breakCount = 0;

  const breakTimer = setInterval(() => {
    if (breakCount > 2) {
      clearInterval(breakTimer);
      console.log("Ending working.");
    } else {
      breakActivity();
    }

    breakCount += 1;
  }, 3000);
}

export default breakReminder;
