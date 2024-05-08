import HTMLHead from "@components/head/head";
import Header from "@components/header/headerComponent/header";
import { ILayoutProps } from "@type/layoutTypes";
import React from "react";
import { useSelector } from "react-redux";
import { State } from "@type/store";
import { THEME_NAME } from "@constants";

const Layouts = ({ children, metatags, t }: ILayoutProps) => {
  const theme = useSelector(
    (state: State) => state?.themeSlice?.themeName as string,
  );

  const useDarkThemeFlag: boolean = theme === THEME_NAME.DARK;
  return (
    <>
      <HTMLHead pageTitle={metatags?.page_title} />
      <div data-mode={useDarkThemeFlag ? "dark" : "light"}>
        <div className={`tmdb ${useDarkThemeFlag ? "dark:tmdb-invert" : ""}`}>
          <Header t={t} useDarkTheme={useDarkThemeFlag} />
          {children}
        </div>
      </div>
    </>
  );
};

export default Layouts;
