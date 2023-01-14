import breakReminder from "./breakReminder";

describe("breakReminder() tests", () => {
  let mockBreakActivity: jest.Mock;

  beforeAll(() => {
    jest.useFakeTimers();

    jest.spyOn(global, "setInterval");
    jest.spyOn(global, "clearInterval");
    jest.spyOn(console, "log");

    mockBreakActivity = jest.fn();
    // we will call the method we will test in beforeAll
    // and advance it step by step in each test.
    breakReminder(mockBreakActivity);
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test("should start work on first iteration", () => {
    expect(console.log).toHaveBeenCalledWith("starting working...");
    expect(setInterval).toHaveBeenCalledWith(expect.any(Function), 3000);
  });

  test("should call breakActivity on second, third and fourth iteration", () => {
    jest.advanceTimersToNextTimer(3);

    expect(mockBreakActivity).toHaveBeenCalledTimes(3);
  });

  test("should end work on last iteration", () => {
    jest.advanceTimersByTime(3000);

    expect(console.log).toHaveBeenCalledWith("ending working.");
    expect(clearInterval).toHaveBeenCalled();
  });
});
