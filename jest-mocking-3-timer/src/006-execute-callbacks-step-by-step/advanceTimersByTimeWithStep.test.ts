import callbackRunner from "./callbackRunner";

test("playground", () => {
  jest.useFakeTimers();

  callbackRunner();

  console.log("Step 1-2: callbacks");
  jest.advanceTimersToNextTimer(2);
});
