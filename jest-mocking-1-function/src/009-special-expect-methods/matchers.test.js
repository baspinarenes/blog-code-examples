test("playground", async () => {
  const mockAreaCalculate = jest.fn((x, y) => x * y);

  mockAreaCalculate(7, 13);
  mockAreaCalculate(3, 5);
  mockAreaCalculate(5, 8);

  expect(mockAreaCalculate).toHaveBeenCalled();
  expect(mockAreaCalculate).toHaveBeenCalledTimes(3);
  expect(mockAreaCalculate).toHaveBeenCalledWith(7, 13);
  expect(mockAreaCalculate).toHaveBeenLastCalledWith(5, 8);
  expect(mockAreaCalculate).toHaveBeenNthCalledWith(2, 3, 5);

  expect(mockAreaCalculate).toHaveReturned();
  expect(mockAreaCalculate).toHaveReturnedTimes(3);
  expect(mockAreaCalculate).toHaveReturnedWith(7 * 13);
  expect(mockAreaCalculate).toHaveLastReturnedWith(5 * 8);
  expect(mockAreaCalculate).toHaveNthReturnedWith(2, 3 * 5);
});
