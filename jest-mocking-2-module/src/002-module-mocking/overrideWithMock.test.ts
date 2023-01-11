import { get } from "./utils";

test("should be mock", () => {
  // @ts-ignore
  get = jest.fn();

  expect(jest.isMockFunction(get)).toBe(true);
});
