import callAfterThreeSeconds from "./callAfterThreeSeconds";

jest.spyOn(global, "setTimeout");

describe("callAfterThreeSeconds() tests", () => {
  test("should call callback after 3 second (wrong)", () => {
    const mockCallback = jest.fn();
    callAfterThreeSeconds(mockCallback);

    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 3000);
    expect(mockCallback).toHaveBeenCalled();
  });

  test("should call callback after 3 second (correct)", (done) => {
    const mockCallback = jest.fn();
    callAfterThreeSeconds(mockCallback);

    setTimeout(() => {
      expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 3000);
      expect(mockCallback).toHaveBeenCalled();
      done();
    }, 3000);
  });
});
