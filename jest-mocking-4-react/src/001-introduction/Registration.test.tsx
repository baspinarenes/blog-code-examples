import { render } from "@testing-library/react";
import Registration, { RegistrationProps } from "./Registration";

jest.mock("./RegisterForm", () => {
  return {
    default: jest.fn().mockReturnValue(<div data-testid="register-form" />),
  };
});

describe("<Registration /> tests", () => {
  let props: RegistrationProps;

  beforeEach(() => {
    props = {
      isRegistered: false,
    };
  });

  test("playground", () => {
    const { debug } = render(<Registration {...props} />);
    console.log("DOM:");
    // prints the HTML of the fake DOM tree at that stage of the test
    debug();
  });
});
