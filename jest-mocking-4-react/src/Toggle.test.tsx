import { render, screen } from "@testing-library/react";
import Toggle from "./Toggle";

describe("<Toggle /> tests", () => {
  it("should render OFF by default", () => {
    render(<Toggle />);

    expect(screen.getByText(/OFF/)).toBeInTheDocument();
  });
});
