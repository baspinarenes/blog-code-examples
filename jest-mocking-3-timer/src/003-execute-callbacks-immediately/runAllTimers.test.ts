import callAfterThreeSeconds from "./callAfterThreeSeconds";

jest.useFakeTimers();
jest.spyOn(global, "setTimeout");

test("should wait 10 second before call callback", () => {
  const mockCallback = jest.fn();

  console.log("kalan fake timer sayısı:", jest.getTimerCount());
  callAfterThreeSeconds(mockCallback);
  console.log("kalan fake timer sayısı:", jest.getTimerCount());

  // runAllTimers öncesinde timer'lar sona ermediği
  // için callback'in çağrılmadığından emin olalım.
  expect(mockCallback).not.toHaveBeenCalled();

  jest.runAllTimers();
  console.log("kalan fake timer sayısı:", jest.getTimerCount());

  expect(mockCallback).toHaveBeenCalled();
});
