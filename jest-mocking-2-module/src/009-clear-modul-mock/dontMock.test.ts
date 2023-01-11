jest.mock("axios");

test("playground", () => {
  const axiosInstance1 = require("axios"); // mocked
  console.log("Is axiosInstance1.get mocked:", jest.isMockFunction(axiosInstance1.get));

  jest.dontMock("axios");

  const axiosInstance2 = require("axios"); // unmocked
  console.log("Is axiosInstance2.get mocked:", jest.isMockFunction(axiosInstance2.get));
});
