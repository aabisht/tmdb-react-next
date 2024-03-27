import React from "react";
import { render } from "@testing-library/react";
import HeaderNavigation from "./headerNavigation";
import { useTranslation } from "next-i18next";
import { TFunction } from "i18next";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

const middleware = [thunk];

jest.mock("next/router", () => ({
  ...jest.requireActual("next/router"),
  useRouter: () => ({
    route: "/",
  }),
}));

jest.mock("react-i18next", () => ({
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

const setup = (t: TFunction) => {
  const mockStore = configureStore(middleware);
  const store = mockStore(initialState);

  return render(
    <Provider store={store}>
      <HeaderNavigation t={t} />
    </Provider>,
  );
};

describe("HeaderNavigation component", () => {
  const { t } = useTranslation("common");

  it("renders navigation items correctly", () => {
    const { getByText } = setup(t);

    // Ensure all navigation items are rendered
    expect(
      getByText("header.headerNavigation.navItem.home"),
    ).toBeInTheDocument();
    expect(
      getByText("header.headerNavigation.navItem.tvShows"),
    ).toBeInTheDocument();
    expect(
      getByText("header.headerNavigation.navItem.movies"),
    ).toBeInTheDocument();
    expect(
      getByText("header.headerNavigation.navItem.popular"),
    ).toBeInTheDocument();

    // Ensure the active navigation item has the "active" class
    const activeNavItem = getByText(
      "header.headerNavigation.navItem.home",
    ).parentElement;
    expect(activeNavItem).toHaveClass("active");
  });
});
