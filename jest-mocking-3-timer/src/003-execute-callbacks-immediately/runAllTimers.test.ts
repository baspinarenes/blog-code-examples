import callAfterThreeSeconds from "./callAfterThreeSeconds";

jest.useFakeTimers();
jest.spyOn(global, "setTimeout");

test("should wait 10 second before call callback", () => {
  const mockCallback = jest.fn();

  console.log("number of fake timers remaining:", jest.getTimerCount());
  callAfterThreeSeconds(mockCallback);
  console.log("number of fake timers remaining:", jest.getTimerCount());

  // make sure the callback is not called because
  // the timers dont expire before runAllTimers
  expect(mockCallback).not.toHaveBeenCalled();

  jest.runAllTimers();
  console.log("number of fake timers remaining:", jest.getTimerCount());

  expect(mockCallback).toHaveBeenCalled();
});
