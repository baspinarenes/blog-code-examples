import setupTimeouts from "./setupTimeouts";

test("playground", () => {
  jest.useFakeTimers();

  setupTimeouts();

  console.log("Step 1:");
  jest.advanceTimersToNextTimer();
  console.log("Step 2:");
  jest.advanceTimersToNextTimer();
  console.log("Step 3:");
  jest.advanceTimersToNextTimer();
});
