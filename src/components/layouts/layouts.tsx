import HTMLHead from "@components/head/head";
import Header from "@components/header/headerComponent/header";
import { ILayoutProps } from "@type/layoutTypes";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { State } from "@type/store";
import { THEME_NAME } from "@constants";
import Footer from "@components/footer/footerComponent/footer";
import { useRouter } from "next/router";

const Layouts = ({ children, metatags, t }: ILayoutProps) => {
  const router = useRouter();

  const theme = useSelector(
    (state: State) => state?.themeSlice?.themeName as string,
  );

  useEffect(() => {
    const handleRouteChangeStart = () => {
      sessionStorage.setItem(
        decodeURIComponent(router.asPath),
        window.scrollY.toString(),
      );
    };
    const handleRouteChangeComplete = (url: any) => {
      if (sessionStorage.getItem(url)) {
        window.scrollTo(0, parseInt(sessionStorage.getItem(url) as string, 10));
      } else {
        window.scrollTo(0, 0);
      }
    };

    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, [router]);

  const useDarkThemeFlag: boolean = theme === THEME_NAME.DARK;
  return (
    <>
      <HTMLHead pageTitle={metatags?.page_title} />
      <div data-mode={useDarkThemeFlag ? "dark" : "light"}>
        <div className={`tmdb ${useDarkThemeFlag ? "dark:tmdb-invert" : ""}`}>
          <Header t={t} useDarkTheme={useDarkThemeFlag} />
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layouts;
