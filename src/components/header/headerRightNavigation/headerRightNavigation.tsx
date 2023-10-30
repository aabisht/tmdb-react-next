import { TFunction } from "i18next";
import HeaderThemeSelector from "../headerThemeSelector/headerThemeSelector";
import { TMDBIcon } from "@components/ui";

const HeaderRightNavigation = ({ t }: { t: TFunction }) => {
  return (
    <ul className="flex justify-start content-center mt-0 mb-0 pl-0 list-none">
      <li className="mr-4 mt-0 mb-0 pl-0">
        <TMDBIcon isOutline={true} iconsName="search" className="text-white" />
      </li>
      <li className="mr-4 mt-0 mb-0 pl-0">
        <TMDBIcon
          isOutline={true}
          iconsName="translate"
          className="text-white"
        />
      </li>
      <li className="mr-4 mt-0 mb-0 pl-0">
        <TMDBIcon
          isOutline={true}
          iconsName="account_circle"
          className="text-white"
        />
      </li>
      <li className="mt-0 mb-0 pl-0">
        <HeaderThemeSelector t={t} />
      </li>
    </ul>
  );
};

export default HeaderRightNavigation;
