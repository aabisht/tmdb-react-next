import { THEME_NAME, THEME_NAME_ICON } from "@constants";
import { IThemeOption } from "@type/headerTypes";
import { TFunction } from "i18next";
import { useEffect, useMemo, useState } from "react";
import { useAppDispatch } from "src/redux/hooks";
import { useSelector } from "react-redux";
import { State } from "@type/store";
import { setTheme } from "./redux/slice";
import { TMDBButton, TMDBIcon } from "@components/ui";
import { Dropdown } from "primereact/dropdown";
import { classNames } from "primereact/utils";

const HeaderThemeSelector = ({ t }: { t: TFunction }) => {
  const dispatch = useAppDispatch();

  const theme = useSelector(
    (state: State) => state?.themeSlice?.themeName as string,
  );

  const useDarkThemeFlag: boolean = theme === THEME_NAME.DARK;

  const ptDropdown = {
    root: () => ({
      className: classNames(
        `cursor-pointer inline-flex relative select-none ${
          useDarkThemeFlag ? "dark-theme" : "light-theme"
        }`,
      ),
    }),
    input: () => ({
      className: classNames("flex items-center justify-center mr-1"),
    }),
    trigger: {
      className: classNames("flex items-center justify-center text-white"),
    },
    panel: () => ({
      className: classNames("!left-auto right-0 min-w-[150px]"),
    }),
    wrapper: {
      className: classNames(
        "max-h-[200px] overflow-auto bg-white shadow-md border-0 ",
      ),
    },
    list: {
      className: classNames("list-none mt-0 mb-0 pl-0 leading-none"),
    },
    item: {
      className: classNames(
        "cursor-pointer font-normal relative whitespace-nowrap m-0 p-0 border-0",
      ),
    },
  };

  const themes: IThemeOption[] = useMemo(() => {
    return [
      {
        name: t("header.headerThemeSelector.lightThemeLabel"),
        ariaLabel: t("header.headerThemeSelector.lightThemeAriaLabel"),
        code: THEME_NAME.LIGHT,
        icon: THEME_NAME_ICON.LIGHT,
      },
      {
        name: t("header.headerThemeSelector.darkThemeLabel"),
        ariaLabel: t("header.headerThemeSelector.darkThemeAriaLabel"),
        code: THEME_NAME.DARK,
        icon: THEME_NAME_ICON.DARK,
      },
      {
        name: t("header.headerThemeSelector.autoThemeLabel"),
        ariaLabel: t("header.headerThemeSelector.autoThemeAriaLabel"),
        code: THEME_NAME.AUTO,
        icon: THEME_NAME_ICON.AUTO,
      },
    ];
  }, [t]);
  const [selectedTheme, setSelectedTheme] = useState<IThemeOption>();

  useEffect(() => {
    dispatch(setTheme(localStorage.getItem("theme") || themes[0].code));
    if (localStorage.getItem("theme")) {
      const _themeCode = themes.find(
        (theme) => theme.code === localStorage.getItem("theme"),
      );
      setSelectedTheme(_themeCode);
    } else {
      localStorage.setItem("theme", themes[0].code);
      setSelectedTheme(themes[0]);
    }
  }, [dispatch, themes]);

  useEffect(() => {
    if (selectedTheme?.code === THEME_NAME.AUTO) {
      const autoThemeInterval = setInterval(() => {
        const hours = new Date().getHours();
        dispatch(
          setTheme(hours >= 6 && hours < 18 ? themes[0].code : themes[1].code),
        );
      }, 1000);

      return () => clearInterval(autoThemeInterval);
    }
  }, [dispatch, themes, selectedTheme]);

  const themeOptionTemplate = (option: IThemeOption) => {
    return (
      <TMDBButton
        aria-label={option.ariaLabel}
        title={option.ariaLabel}
        className="w-[100%] inline-flex items-center px-3 py-2 hover:bg-white-darkest hover:text-secondary"
      >
        <TMDBIcon iconsName={option.icon} />
        <span className="ml-2">{option.name}</span>
      </TMDBButton>
    );
  };

  const selectedThemeOptionTemplate = (option: IThemeOption) => {
    return option ? (
      <TMDBIcon iconsName={option.icon} className="nav-link text-white" />
    ) : selectedTheme ? (
      <TMDBIcon
        iconsName={selectedTheme?.icon}
        className="nav-link text-white"
      />
    ) : (
      ""
    );
  };

  const handleThemeChange = (theme: IThemeOption) => {
    setSelectedTheme(theme);
    localStorage.setItem("theme", theme.code);
    dispatch(setTheme(theme.code));
  };

  return (
    <Dropdown
      value={selectedTheme}
      options={themes}
      optionLabel="name"
      itemTemplate={themeOptionTemplate}
      valueTemplate={selectedThemeOptionTemplate}
      onChange={(e) => handleThemeChange(e.value)}
      aria-label={t("header.headerThemeSelector.selectThemeLabel")}
      title={t("header.headerThemeSelector.selectThemeLabel")}
      appendTo="self"
      className={``}
      pt={ptDropdown}
    />
  );
};

export default HeaderThemeSelector;
