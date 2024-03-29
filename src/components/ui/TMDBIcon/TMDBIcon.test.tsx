import { render } from "@testing-library/react";
import { TMDBIcon } from "./TMDBIcon";

describe("TMDBIcon", () => {
  const defaultProps = {
    isOutline: false,
    iconsName: "example_icon",
    className: "custom-class",
  };

  it("renders icon correctly", () => {
    const { getByTestId } = render(<TMDBIcon {...defaultProps} />);
    const iconElement = getByTestId("TMDBIcon_example_icon");

    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveClass("material-icons");
    expect(iconElement).toHaveTextContent("example_icon");
    expect(iconElement).toHaveClass("custom-class");
  });

  it("renders outline icon correctly", () => {
    const { getByTestId } = render(<TMDBIcon {...defaultProps} isOutline />);
    const iconElement = getByTestId("TMDBIcon_example_icon");

    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveClass("material-icons-outlined");
  });
});
