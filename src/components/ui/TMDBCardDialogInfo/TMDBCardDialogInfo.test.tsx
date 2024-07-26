import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { useTranslation } from "next-i18next";
import { IMediaResults } from "@type/commonTypes";
import { getMediaYear } from "@utils/helpers";
import { TMDBCardDialogInfo } from "./TMDBCardDialogInfo";

const middleware = [thunk];

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

describe("TMDBGenresList Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderWithProvider = (
    cardData: IMediaResults,
    href: string,
    useDarkThemeFlag: boolean,
  ) => {
    const { t } = useTranslation("common");
    const mockStore = configureStore(middleware);

    const initialState = {
      themeName: "light",
      configurationSlice: {
        genresMovieList: {
          genres: [
            {
              id: 28,
              name: "Action",
            },
            {
              id: 12,
              name: "Adventure",
            },
            {
              id: 16,
              name: "Animation",
            },
            {
              id: 35,
              name: "Comedy",
            },
            {
              id: 80,
              name: "Crime",
            },
            {
              id: 99,
              name: "Documentary",
            },
            {
              id: 18,
              name: "Drama",
            },
            {
              id: 10751,
              name: "Family",
            },
            {
              id: 14,
              name: "Fantasy",
            },
            {
              id: 36,
              name: "History",
            },
            {
              id: 27,
              name: "Horror",
            },
            {
              id: 10402,
              name: "Music",
            },
            {
              id: 9648,
              name: "Mystery",
            },
            {
              id: 10749,
              name: "Romance",
            },
            {
              id: 878,
              name: "Science Fiction",
            },
            {
              id: 10770,
              name: "TV Movie",
            },
            {
              id: 53,
              name: "Thriller",
            },
            {
              id: 10752,
              name: "War",
            },
            {
              id: 37,
              name: "Western",
            },
          ],
        },
        genresTVList: {
          genres: [
            {
              id: 10759,
              name: "Action & Adventure",
            },
            {
              id: 16,
              name: "Animation",
            },
            {
              id: 35,
              name: "Comedy",
            },
            {
              id: 80,
              name: "Crime",
            },
            {
              id: 99,
              name: "Documentary",
            },
            {
              id: 18,
              name: "Drama",
            },
            {
              id: 10751,
              name: "Family",
            },
            {
              id: 10762,
              name: "Kids",
            },
            {
              id: 9648,
              name: "Mystery",
            },
            {
              id: 10763,
              name: "News",
            },
            {
              id: 10764,
              name: "Reality",
            },
            {
              id: 10765,
              name: "Sci-Fi & Fantasy",
            },
            {
              id: 10766,
              name: "Soap",
            },
            {
              id: 10767,
              name: "Talk",
            },
            {
              id: 10768,
              name: "War & Politics",
            },
            {
              id: 37,
              name: "Western",
            },
          ],
        },
      },
    };
    const store = mockStore(initialState);

    return render(
      <Provider store={store}>
        <TMDBCardDialogInfo
          cardData={cardData}
          href={href}
          useDarkThemeFlag={useDarkThemeFlag}
          t={t}
        />
      </Provider>,
    );
  };

  it("renders correctly with dark theme and required classes", () => {
    const cardData = {
      backdrop_path: "/7aPrv2HFssWcOtpig5G3HEVk3uS.jpg",
      id: 718821,
      title: "Twisters",
      original_title: "Twisters",
      overview:
        "As storm season intensifies, the paths of former storm chaser Kate Carter and reckless social-media superstar Tyler Owens collide when terrifying phenomena never seen before are unleashed. The pair and their competing teams find themselves squarely in the paths of multiple storm systems converging over central Oklahoma in the fight of their lives.",
      poster_path: "/bYmszCd9kRbwmXWvxMai9Mm9B92.jpg",
      media_type: "movie",
      adult: false,
      original_language: "en",
      genre_ids: [28, 12, 53],
      popularity: 770.486,
      release_date: "2024-07-10",
      video: false,
      vote_average: 7.374,
      vote_count: 172,
    };

    renderWithProvider(cardData, "/movie/718821-twisters", true);

    expect(screen.getByTestId("TMDBCardDialogInfo")).toHaveClass(
      "bg-black-light text-white",
    );
    expect(screen.getByText(cardData.title)).toBeInTheDocument();
    expect(screen.getByText(cardData.overview)).toBeInTheDocument();
    expect(
      screen.getByText(cardData.vote_average.toFixed(1)),
    ).toBeInTheDocument();
    expect(
      screen.getByText(getMediaYear(cardData.release_date)),
    ).toBeInTheDocument();
  });

  it("renders correctly with light theme and required classes", () => {
    const cardData = {
      backdrop_path: "/etj8E2o0Bud0HkONVQPjyCkIvpv.jpg",
      id: 94997,
      name: "House of the Dragon",
      original_name: "House of the Dragon",
      overview:
        "The Targaryen dynasty is at the absolute apex of its power, with more than 15 dragons under their yoke. Most empires crumble from such heights. In the case of the Targaryens, their slow fall begins when King Viserys breaks with a century of tradition by naming his daughter Rhaenyra heir to the Iron Throne. But when Viserys later fathers a son, the court is shocked when Rhaenyra retains her status as his heir, and seeds of division sow friction across the realm.",
      poster_path: "/7QMsOTMUswlwxJP0rTTZfmz2tX2.jpg",
      media_type: "tv",
      adult: false,
      original_language: "en",
      genre_ids: [10765, 18, 10759],
      popularity: 3294.605,
      first_air_date: "2022-08-21",
      vote_average: 8.413,
      vote_count: 4502,
      origin_country: ["US"],
    };

    renderWithProvider(cardData, "/tv/718821-house-of-the-dragon", false);

    expect(screen.getByTestId("TMDBCardDialogInfo")).toHaveClass(
      "bg-white text-black-light",
    );
    expect(screen.getByText(cardData.name)).toBeInTheDocument();
    expect(screen.getByText(cardData.overview)).toBeInTheDocument();
    expect(
      screen.getByText(cardData.vote_average.toFixed(1)),
    ).toBeInTheDocument();
    expect(
      screen.getByText(getMediaYear(cardData.first_air_date)),
    ).toBeInTheDocument();
  });
});
