jest.mock("axios");

test("playground", () => {
  const axiosInstance1 = require("axios"); // unmocked
  console.log("Is axiosInstance1.get mocked:", jest.isMockFunction(axiosInstance1.get));

  jest.unmock("axios");

  const axiosInstance2 = require("axios"); // unmocked
  console.log("Is axiosInstance2.get mocked:", jest.isMockFunction(axiosInstance2.get));
});
