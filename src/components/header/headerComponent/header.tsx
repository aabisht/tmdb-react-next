import HeaderLogo from "../headerLogo/headerLogo";
import { IIHeader } from "@type/headerTypes";
import HeaderNavigation from "../headerNavigation/headerNavigation";
import HeaderRightNavigation from "../headerRightNavigation/headerRightNavigation";

const Header = ({ t, useDarkTheme = false }: IIHeader) => {
  return (
    <header
      className={`header-container-wrapper ${
        useDarkTheme ? "dark-theme" : "light-theme"
      }`}
    >
      <div className="header-wrapper pt-4 pb-4 relative after:content-[''] after:absolute after:z-0 after:w-[100%] after:h-[100%] after:top-[-35%] after:left-0 after:bg-gradient-to-b after:from-black/70 after:via-black/40 after:via-70% after:to-transparent">
        <div className="container xl:px-8 relative z-10">
          <div className="flex flex-wrap justify-between content-center">
            <div className="flex flex-wrap justify-start content-center">
              <div className="content-center flex flex-wrap header-logo-wrapper lg:mr-8">
                <HeaderLogo t={t} />
              </div>
              <div className="header-nav-wrapper flex flex-wrap content-center">
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
