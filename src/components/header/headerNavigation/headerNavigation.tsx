import { TMDBLink } from "@components/ui";
import { IHeaderNav } from "@type/headerTypes";
import { TFunction } from "i18next";
import { useRouter } from "next/router";

const HeaderNavigation = ({ t }: { t: TFunction }) => {
  const router = useRouter();

  const navItems: IHeaderNav[] = [
    {
      label: t("header.headerNavigation.navItem.home"),
      id: "navHome",
      href: "/",
    },
    {
      label: t("header.headerNavigation.navItem.tvShows"),
      id: "navTvShows",
      href: "/tv-shows",
    },
    {
      label: t("header.headerNavigation.navItem.movies"),
      id: "navMovies",
      href: "/movies",
    },
    {
      label: t("header.headerNavigation.navItem.popular"),
      id: "navPopular",
      href: "/browse/all/trending/now",
    },
  ];
  return (
    <ul className="flex justify-start content-center" role="menubar">
      {navItems.map((navItem, navItemIndex) => {
        return (
          <li
            className={`mr-4 uppercase ${
              router.route === navItem.href ? "active font-semibold" : ""
            }`}
            id={navItem.id}
            key={navItemIndex}
          >
            <TMDBLink href={navItem.href || "#"} className="text-white">
              {navItem.label}
            </TMDBLink>
          </li>
        );
      })}
    </ul>
  );
};

export default HeaderNavigation;
