import { TFunction } from "i18next";
import HeaderThemeSelector from "../headerThemeSelector/headerThemeSelector";
import { TMDBIcon } from "@components/ui";

const HeaderRightNavigation = ({ t }: { t: TFunction }) => {
  return (
    <ul className="flex justify-start content-center">
      <li className="mr-4">
        <TMDBIcon isOutline={true} iconsName="search" />
      </li>
      <li className="mr-4">
        <TMDBIcon isOutline={true} iconsName="translate" />
      </li>
      <li className="mr-4">
        <TMDBIcon isOutline={true} iconsName="account_circle" />
      </li>
      <li>
        <HeaderThemeSelector t={t} />
      </li>
    </ul>
  );
};

export default HeaderRightNavigation;
