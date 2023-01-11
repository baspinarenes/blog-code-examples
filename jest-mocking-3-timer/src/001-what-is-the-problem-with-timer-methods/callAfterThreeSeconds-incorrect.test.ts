import callAfterThreeSeconds from "./callAfterThreeSeconds";

jest.spyOn(global, "setTimeout");

test("should call callback after 3 second", () => {
  const mockCallback = jest.fn();
  callAfterThreeSeconds(mockCallback);

  expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 3000);
  expect(mockCallback).toHaveBeenCalled();
});
