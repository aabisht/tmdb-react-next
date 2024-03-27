import React from "react";
import { TFunction } from "i18next";
import HeaderThemeSelector from "../headerThemeSelector/headerThemeSelector";
import { TMDBIcon } from "@components/ui";

const HeaderRightNavigation = ({ t }: { t: TFunction }) => {
  const icons = [
    { name: "search", isOutline: true },
    { name: "translate", isOutline: true },
    { name: "account_circle", isOutline: true },
  ];

  return (
    <ul className="flex justify-start content-center mt-0 mb-0 pl-0 list-none">
      {icons.map((icon, index) => (
        <li key={index} className="mr-4 mt-0 mb-0 pl-0">
          <TMDBIcon
            isOutline={true}
            iconsName={icon.name}
            className="text-white"
          />
        </li>
      ))}
      <li className="mt-0 mb-0 pl-0">
        <HeaderThemeSelector t={t} />
      </li>
    </ul>
  );
};

export default HeaderRightNavigation;
