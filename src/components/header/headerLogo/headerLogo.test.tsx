import React from "react";
import { render } from "@testing-library/react";
import HeaderLogo from "./headerLogo";
import { useTranslation } from "react-i18next";

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

describe("HeaderLogo component", () => {
  const { t } = useTranslation("common");
  it("renders logo with correct attributes", () => {
    const { getByAltText } = render(<HeaderLogo t={t} />);

    const logo = getByAltText("header.headerLogo.logoAlt");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", "/logo.svg");
    expect(logo).toHaveAttribute("width", "150");
  });
});
