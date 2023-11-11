import HeaderLogo from "../headerLogo/headerLogo";
import { IIHeader } from "@type/headerTypes";
import HeaderNavigation from "../headerNavigation/headerNavigation";
import HeaderRightNavigation from "../headerRightNavigation/headerRightNavigation";
import { useEffect, useState } from "react";

const Header = ({ t, useDarkTheme = false }: IIHeader) => {
  const [scrollTop, setScrollTop] = useState<number>(0);
  useEffect(() => {
    const onScroll = (event: any) => {
      setScrollTop(event.target.documentElement.scrollTop);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  return (
    <header className={`header-container-wrapper`}>
      <div
        className={`header-wrapper pt-4 pb-4 fixed left-0 right-0 w-[100%] transition-colors ease-in-out delay-150 z-10 after:content-[''] after:absolute after:z-0 after:w-[100%] after:h-[100%] after:top-[-35%] after:left-0 after:bg-gradient-to-b after:from-black/70 after:via-black/40 after:via-70% after:to-transparent ${
          scrollTop > 63
            ? useDarkTheme
              ? "bg-black-light"
              : "bg-primary"
            : "bg-transparent"
        }`}
      >
        <div className="container xl:px-8 relative z-10">
          <div className="flex justify-between items-center">
            <div className="flex justify-start items-center">
              <div className="flex items-center header-logo-wrapper lg:mr-8">
                <HeaderLogo t={t} />
              </div>
              <div className="header-nav-wrapper flex items-center">
                <HeaderNavigation t={t} />
              </div>
            </div>
            <div>
              <HeaderRightNavigation t={t} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
