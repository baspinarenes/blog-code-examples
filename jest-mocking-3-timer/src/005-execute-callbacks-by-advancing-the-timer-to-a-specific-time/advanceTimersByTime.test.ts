import setupTimeouts from "./setupTimeouts";

test("playground", () => {
  jest.useFakeTimers();

  setupTimeouts();

  jest.advanceTimersByTime(4000);
});
