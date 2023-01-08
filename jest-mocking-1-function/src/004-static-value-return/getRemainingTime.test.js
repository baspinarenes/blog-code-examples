function getRemainingTime(endDate, startDate = new Date()) {
  let delta = (endDate.getTime() - startDate.getTime()) / 1000;

  return {
    remainingDays: Math.floor(delta / (60 * 60 * 24)),
    remainingHours: Math.floor((delta / (60 * 60)) % 24),
    remainingMinutes: Math.floor((delta / 60) % 60),
    remainingSeconds: Math.floor(delta % 60),
  };
}

test("should return remaining data when give future date", () => {
  const endDate = new Date(2023, 1, 1);
  const mockCurrDate = new Date(2022, 10, 16, 16, 9, 25);

  // we want the mock date to be returned when the constructor is called.
  global.Date = jest.fn().mockReturnValue(mockCurrDate);

  expect(getRemainingTime(endDate)).toEqual({
    remainingDays: 76,
    remainingHours: 7,
    remainingMinutes: 50,
    remainingSeconds: 35,
  });
});
