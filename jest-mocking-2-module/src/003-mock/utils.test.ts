import * as UtilsModule from "./utils";

jest.mock("./utils");

test("playground", () => {
  console.log("utils Module:", UtilsModule);
  expect(jest.isMockFunction(UtilsModule.get)).toBe(true);
});
