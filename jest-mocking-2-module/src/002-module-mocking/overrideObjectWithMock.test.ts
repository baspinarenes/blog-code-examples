import * as UtilsModule from "./utils";

test("should be mock", () => {
  UtilsModule.get = jest.fn();

  expect(jest.isMockFunction(UtilsModule.get)).toBe(true);
});
