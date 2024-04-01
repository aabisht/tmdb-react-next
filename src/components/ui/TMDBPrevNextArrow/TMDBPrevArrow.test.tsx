import { render, fireEvent } from "@testing-library/react";
import { TMDBPrevArrow } from "./TMDBPrevArrow";
import { ARROW_TYPE } from "@constants";

// Fix for console.error Error: Could not parse CSS stylesheet
// It is because of PRIMEREACT library
// https://github.com/orgs/primefaces/discussions/410
const originalConsoleError = console.error;
const jsDomCssError = "Error: Could not parse CSS stylesheet";
console.error = (...params) => {
  if (!params.find((p) => p.toString().includes(jsDomCssError))) {
    originalConsoleError(...params);
  }
};

describe("TMDBPrevArrow", () => {
  const defaultProps = {
    className: "custom-class",
    style: {},
    onClick: jest.fn(),
    arrowType: ARROW_TYPE.PREVIOUS,
  };

  it("renders previous arrow correctly", () => {
    const { getByRole } = render(<TMDBPrevArrow {...defaultProps} />);
    const buttonElement = getByRole("button");

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass("custom-class");
  });

  it("renders next arrow correctly", () => {
    const { getByRole } = render(
      <TMDBPrevArrow {...defaultProps} arrowType={ARROW_TYPE.NEXT} />,
    );
    const buttonElement = getByRole("button");

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass("custom-class");
  });

  it("fires onClick event when clicked", () => {
    const { getByRole } = render(<TMDBPrevArrow {...defaultProps} />);
    const buttonElement = getByRole("button");

    fireEvent.click(buttonElement);
    expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
  });
});
