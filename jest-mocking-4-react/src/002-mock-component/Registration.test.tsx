import { render, screen } from "@testing-library/react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import Registration, { RegistrationProps } from "./Registration";

jest.mock("./LoginForm", () => {
  return {
    default: jest.fn().mockReturnValue(<div data-testid="login-form" />),
  };
});

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

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render the register form when isRegistered is false", () => {
    props.isRegistered = false;

    render(<Registration {...props} />);

    expect(RegisterForm).toHaveBeenCalled();
    expect(LoginForm).not.toHaveBeenCalled();
    expect(screen.getByTestId("register-form")).toBeInTheDocument();
  });

  it("should render the login form when isRegistered is true", () => {
    props.isRegistered = true;

    render(<Registration {...props} />);

    expect(LoginForm).toHaveBeenCalled();
    expect(RegisterForm).not.toHaveBeenCalled();
    expect(screen.getByTestId("login-form")).toBeInTheDocument();
  });
});
