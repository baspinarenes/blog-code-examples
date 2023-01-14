import { render } from "@testing-library/react";
import Registration from "./Registration";

jest.mock("./RegisterForm", () => {
  return {
    default: jest.fn().mockReturnValue(<div data-testid="register-form" />),
  };
});

describe("<Registration /> tests", () => {
  test("playground", () => {
    const { debug } = render(<Registration isRegistered={false} />);
    console.log("DOM:");
    // prints the HTML of the fake DOM tree at that stage of the test
    debug();
  });
});
