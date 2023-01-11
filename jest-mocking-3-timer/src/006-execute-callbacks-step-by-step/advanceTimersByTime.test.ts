import callbackRunner from "./callbackRunner";

test("playground", () => {
  jest.useFakeTimers();

  callbackRunner();

  console.log("Step 1:");
  jest.advanceTimersToNextTimer();
  console.log("Step 2:");
  jest.advanceTimersToNextTimer();
  console.log("Step 3:");
  jest.advanceTimersToNextTimer();
});
