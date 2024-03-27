import React from "react";
import { render } from "@testing-library/react";
import HeaderRightNavigation from "./headerRightNavigation";
import { useTranslation } from "react-i18next";
import thunk from "redux-thunk";
import { TFunction } from "i18next";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

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

const setup = (t: TFunction) => {
  const mockStore = configureStore(middleware);
  const store = mockStore(initialState);

  return render(
    <Provider store={store}>
      <HeaderRightNavigation t={t} />
    </Provider>,
  );
};

describe("HeaderRightNavigation component", () => {
  const { t } = useTranslation("common");

  it("renders correctly", () => {
    const { getAllByRole } = setup(t);

    // Ensure TMDBIcons are rendered
    const tmdbIcons = getAllByRole("listitem");
    expect(tmdbIcons.length).toBe(4);
  });
});
