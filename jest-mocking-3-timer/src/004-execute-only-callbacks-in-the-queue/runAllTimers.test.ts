import callbackRunner from "./callbackRunner";

test("playground", () => {
  jest.useFakeTimers();

  callbackRunner();

  jest.runAllTimers();
});
