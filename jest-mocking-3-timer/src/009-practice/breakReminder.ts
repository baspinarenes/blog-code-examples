export default function breakReminder(breakActivity: any) {
  console.log("starting working...");
  let breakCount = 0;

  const breakTimer = setInterval(() => {
    if (breakCount > 2) {
      clearInterval(breakTimer);
      console.log("ending working.");
    } else {
      breakActivity();
    }

    breakCount += 1;
  }, 3000);
}
