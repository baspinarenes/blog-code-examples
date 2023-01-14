import setupTimeouts from "./setupTimeouts";

test("playground", () => {
  jest.useFakeTimers();

  setupTimeouts();

  jest.runOnlyPendingTimers();
});
