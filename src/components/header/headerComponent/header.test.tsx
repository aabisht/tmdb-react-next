import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Header from "./header";
import { useTranslation } from "next-i18next";
import { TFunction } from "i18next";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

const middleware = [thunk];

jest.mock("react-i18next", () => ({
  // this mock makes sure any components using the translate hook can use it without a warning being shown
  useTranslation: () => {
    return {
      t: (str: string) => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));

jest.mock("next/router", () => ({
  // this mock makes sure any components using the translate hook can use it without a warning being shown
  useRouter: () => {
    return {
      locale: "en",
    };
  },
}));

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

const setup = (t: TFunction, useDarkTheme: boolean = false) => {
  const mockStore = configureStore(middleware);
  const store = mockStore(initialState);

  return render(
    <Provider store={store}>
      <Header t={t} useDarkTheme={useDarkTheme} />
    </Provider>,
  );
};

describe("Header component", () => {
  const { t } = useTranslation("common");

  it("should render header correctly", () => {
    const { getByTestId } = setup(t);

    expect(getByTestId("headerContainerWrapper")).toBeInTheDocument();
  });

  it("should change header color on scrolling", () => {
    const { container } = setup(t);
    const headerWrapper = container.querySelector(".header-wrapper");
    expect(headerWrapper).toHaveClass("bg-transparent");

    // Mock document.documentElement.scrollTop
    Object.defineProperty(document.documentElement, "scrollTop", {
      value: 100,
    });
    // Trigger scroll event
    fireEvent.scroll(window);

    expect(headerWrapper).toHaveClass("bg-primary");
  });

  it("should change header color on scrolling having dark theme", () => {
    const { container } = setup(t, true);
    const headerWrapper = container.querySelector(".header-wrapper");
    expect(headerWrapper).toHaveClass("bg-transparent");

    // Mock document.documentElement.scrollTop
    Object.defineProperty(document.documentElement, "scrollTop", {
      value: 100,
    });
    // Trigger scroll event
    fireEvent.scroll(window);

    expect(headerWrapper).toHaveClass("bg-black-light");
  });
});
