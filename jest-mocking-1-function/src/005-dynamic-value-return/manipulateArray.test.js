function manipulateArray(array, manipulateMethod) {
  return array.map((item) => manipulateMethod(item));
}

test("playground", () => {
  const array = [0, 1, 2];
  const manipulateMethod = jest.fn().mockImplementation((x) => x + 2);
  manipulateArray(array, manipulateMethod);

  console.log(manipulateMethod.mock.results);
});
