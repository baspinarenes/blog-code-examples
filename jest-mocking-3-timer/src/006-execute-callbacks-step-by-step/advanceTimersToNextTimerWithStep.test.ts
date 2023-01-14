import setupTimeouts from "./setupTimeouts";

test("playground", () => {
  jest.useFakeTimers();

  setupTimeouts();

  console.log("Step 1-2: callbacks");
  jest.advanceTimersToNextTimer(2);
});
