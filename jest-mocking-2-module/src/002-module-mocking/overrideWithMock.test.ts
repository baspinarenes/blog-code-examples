import { get } from "./utils";

test("should be mock", () => {
  get = jest.fn();

  expect(jest.isMockFunction(get)).toBe(true);
});
