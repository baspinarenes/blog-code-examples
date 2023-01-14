import axios from "axios";

test("playground", () => {
  axios.get = jest.fn();
  console.log("mock Implementation:", axios.get.toString());
});
