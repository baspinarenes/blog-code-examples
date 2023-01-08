function manipulateArray(array, manipulateMethod) {
  return array.map((item) => manipulateMethod(item));
}

test("playground", () => {
  const array = [0, 1, 2];
  const mockManipulateMethod = jest.fn((x) => x + 2);
  manipulateArray(array, mockManipulateMethod);

  console.log("mockManipulateMethod's mock property:", mockManipulateMethod.mock);
});
