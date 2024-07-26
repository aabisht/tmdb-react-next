import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { MEDIA } from "@constants";
import thunk from "redux-thunk";
import { useTranslation } from "next-i18next";
import { TMDBGenresList } from "./TMDBGenresList";

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
    genreId: number[],
    mediaType: string,
    useDarkThemeFlag: boolean,
    genreToShow: number,
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
        <TMDBGenresList
          t={t}
          genreIds={genreId}
          mediaType={mediaType}
          useDarkThemeFlag={useDarkThemeFlag}
          genreToShow={genreToShow}
        />
      </Provider>,
    );
  };

  it("renders correctly with dark theme", () => {
    renderWithProvider([28, 12, 16], MEDIA.MOVIE, true, 2);

    const genres = screen.getAllByTestId("tmdb-genre");
    expect(genres).toHaveLength(2);

    genres.forEach((genre) => {
      expect(genre.firstChild).toHaveClass(
        "text-xs no-underline block !text-white",
      );
    });
  });

  it("renders correctly with light theme", () => {
    renderWithProvider([16, 35, 80], MEDIA.TV, false, 3);

    const genres = screen.getAllByTestId("tmdb-genre");
    expect(genres).toHaveLength(3);

    genres.forEach((genre) => {
      expect(genre.firstChild).toHaveClass(
        "text-xs no-underline block !text-black-light",
      );
    });
  });

  it("handles empty genreIds correctly", () => {
    renderWithProvider([], MEDIA.TV, true, 3);

    expect(screen.queryAllByTestId("tmdb-genre")).toHaveLength(0);
  });
});
