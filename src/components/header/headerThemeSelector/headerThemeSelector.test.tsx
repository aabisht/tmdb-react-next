import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import HeaderThemeSelector from "./headerThemeSelector";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { useTranslation } from "next-i18next";
import { TFunction } from "i18next";

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
      <HeaderThemeSelector t={t} />
    </Provider>,
  );
};

describe("HeaderThemeSelector component", () => {
  const { t } = useTranslation("common");

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders correctly", () => {
    const { getByText } = setup(t);
    expect(
      getByText("header.headerThemeSelector.lightThemeLabel"),
    ).toBeInTheDocument();
  });

  it("changes theme on selection", async () => {
    const { getByText, getByLabelText } = setup(t);

    const themeDropdown = getByText(
      "header.headerThemeSelector.lightThemeLabel",
    );

    fireEvent.click(themeDropdown); // Click to open dropdown
    fireEvent.click(getByText("header.headerThemeSelector.autoThemeLabel")); // Select Dark theme

    await waitFor(() => {
      expect(
        getByLabelText("header.headerThemeSelector.selectThemeLabel"),
      ).toHaveValue("header.headerThemeSelector.autoThemeLabel");
    });
  });

  it("handles auto theme selection", async () => {
    const { getByLabelText } = setup(t);

    // Mock the current time to be in the dark theme interval (6am - 6pm)
    jest
      .spyOn(global.Date, "now")
      .mockImplementation(() => new Date("2024-01-01T12:00:00").getTime());

    await waitFor(() => {
      expect(
        getByLabelText("header.headerThemeSelector.selectThemeLabel"),
      ).toHaveValue("header.headerThemeSelector.autoThemeLabel");
    });
  });
});
