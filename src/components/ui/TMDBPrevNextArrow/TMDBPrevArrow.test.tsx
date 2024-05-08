import { render, fireEvent } from "@testing-library/react";
import { TMDBPrevArrow } from "./TMDBPrevArrow";
import { ARROW_TYPE } from "@constants";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

const middleware = [thunk];

const initialState = {
  themeName: "light",
};

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

const defaultProps = {
  className: "custom-class",
  style: {},
  onClick: jest.fn(),
  arrowType: ARROW_TYPE.PREVIOUS,
};

const setup = (arrowType?: string) => {
  const mockStore = configureStore(middleware);
  const store = mockStore(initialState);

  return render(
    <Provider store={store}>
      <TMDBPrevArrow {...defaultProps} arrowType={arrowType} />
    </Provider>,
  );
};

describe("TMDBPrevArrow", () => {
  it("renders previous arrow correctly", () => {
    const { getByRole } = setup();
    const buttonElement = getByRole("button");

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass("custom-class");
  });

  it("renders next arrow correctly", () => {
    const { getByRole } = setup(ARROW_TYPE.NEXT);
    const buttonElement = getByRole("button");

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass("custom-class");
  });

  it("fires onClick event when clicked", () => {
    const { getByRole } = setup();
    const buttonElement = getByRole("button");

    fireEvent.click(buttonElement);
    expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
  });
});
