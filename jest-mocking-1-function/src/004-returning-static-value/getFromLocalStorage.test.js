function getFromLocalStorage(key) {
  return window.localStorage.getItem(key);
}

test("should get data from local storage correctly", () => {
  const key = "testKey";
  const value = "testValue";

  const mockLocalStorageGet = jest.fn();

  Object.defineProperty(window, "localStorage", {
    value: {
      getItem: mockLocalStorageGet,
    },
  });

  // we want mock value to be returned when mock localstorage is called.
  mockLocalStorageGet.mockReturnValue(value);
  // another usage: window.localStorage.getItem.mockReturnValue(value)

  getFromLocalStorage(key);

  expect(jest.isMockFunction(window.localStorage.getItem)).toBe(true);
  expect(mockLocalStorageGet.mock.lastCall[0]).toBe(key);
  expect(mockLocalStorageGet.mock.results[0].value).toBe(value);
});
