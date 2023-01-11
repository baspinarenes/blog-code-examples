test("playground", () => {
  jest.useFakeTimers();

  jest.setSystemTime(new Date(1999, 2, 21));

  console.log("real date:", new Date(jest.getRealSystemTime()));
  console.log("fake date:", new Date(jest.now()));
});
