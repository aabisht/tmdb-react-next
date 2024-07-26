import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { MEDIA } from "@constants";
import { replaceSpaceWithDash } from "@utils/helpers";
import thunk from "redux-thunk";
import { useTranslation } from "next-i18next";
import { TMDBGenre } from "./TMDBGenre";

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

// Mock the imported components and helpers
jest.mock("@utils/helpers", () => ({
  replaceSpaceWithDash: jest.fn((str) =>
    str
      .replace(/ /g, "-")
      .replace(/[ :[\]/]/g, "")
      .toLowerCase(),
  ),
}));

jest.mock("../TMDBLink/TMDBLink", () => ({
  TMDBLink: jest.fn(
    ({
      href,
      children,
      className,
      title,
      tabIndex,
      "aria-label": ariaLabel,
    }) => (
      <a
        href={href}
        className={className}
        title={title}
        tabIndex={tabIndex}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    ),
  ),
}));

describe("TMDBGenre Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderWithProvider = (
    genreId: number,
    mediaType: string,
    className?: string,
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
        <TMDBGenre
          genreId={genreId}
          mediaType={mediaType}
          className={className}
          tabIndex={0}
          t={t}
        />
      </Provider>,
    );
  };

  it("renders correctly for TV genre", () => {
    const genreId = 16;
    const genreName = "Animation";
    const mediaType = MEDIA.TV;

    renderWithProvider(genreId, mediaType, "genre-class");

    expect(screen.getByText(genreName)).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      `genre/${genreId}-${replaceSpaceWithDash(genreName)}/${mediaType}`,
    );
    expect(screen.getByRole("link")).toHaveAttribute(
      "aria-label",
      `ui.TMDBGenre.view_genre_related_tv`,
    );
  });

  it("renders correctly for movie genre", () => {
    const genreId = 28;
    const genreName = "Action";
    const mediaType = MEDIA.MOVIE;

    renderWithProvider(genreId, mediaType, "genre-class");

    expect(screen.getByText(genreName)).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      `genre/${genreId}-${replaceSpaceWithDash(genreName)}/${mediaType}`,
    );
    expect(screen.getByRole("link")).toHaveAttribute(
      "aria-label",
      `ui.TMDBGenre.view_genre_related_movie`,
    );
  });
});
