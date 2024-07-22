import React from "react";
import { render } from "@testing-library/react";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { TMDBCardSlider } from "./TMDBCardSlider";

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

jest.mock("next/router", () => ({
  // this mock makes sure any components using the translate hook can use it without a warning being shown
  useRouter: () => {
    return {
      locale: "en",
    };
  },
}));

jest.mock(
  "next/image",
  () =>
    ({
      src,
      alt,
      width,
      height,
      className,
    }: {
      src: string;
      alt: string;
      width: number;
      height: number;
      className?: string;
    }) => (
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
      />
    ),
);

const initialState = {
  themeName: "light",
};

// Fix for console.error Error: Could not parse CSS stylesheet
// It is because of PRIMEREACT library
// https://github.com/orgs/primefaces/discussions/410
const originalConsoleError = console.error;
const jsDomCssError = "Error: Could not parse CSS stylesheet";
console.error = (...params) => {
  if (!params.find((p) => p.toString().includes(jsDomCssError))) {
    originalConsoleError(...params);
  }
};

describe("TMDBCardSlider", () => {
  const mockStore = configureStore(middleware);
  const store = mockStore(initialState);

  const mockData = {
    siderData: [
      {
        adult: false,
        backdrop_path: "/5zmiBoMzeeVdQ62no55JOJMY498.jpg",
        id: 126308,
        name: "Shōgun",
        original_language: "en",
        original_name: "Shōgun",
        overview:
          "In Japan in the year 1600, at the dawn of a century-defining civil war, Lord Yoshii Toranaga is fighting for his life as his enemies on the Council of Regents unite against him, when a mysterious European ship is found marooned in a nearby fishing village.",
        poster_path: "/7O4iVfOMQmdCSxhOg1WnzG1AgYT.jpg",
        media_type: "tv",
        genre_ids: [18, 10768],
        popularity: 1486.672,
        first_air_date: "2024-02-27",
        vote_average: 8.812,
        vote_count: 322,
        origin_country: ["US"],
      },
      {
        adult: false,
        backdrop_path: "/qrGtVFxaD8c7et0jUtaYhyTzzPg.jpg",
        id: 823464,
        title: "Godzilla x Kong: The New Empire",
        original_language: "en",
        original_title: "Godzilla x Kong: The New Empire",
        overview:
          "Following their explosive showdown, Godzilla and Kong must reunite against a colossal undiscovered threat hidden within our world, challenging their very existence – and our own.",
        poster_path: "/phmjv93zEwitWLJEOvlXPhtK58o.jpg",
        media_type: "movie",
        genre_ids: [28, 878, 12],
        popularity: 2461.857,
        release_date: "2024-03-27",
        video: false,
        vote_average: 7.5,
        vote_count: 94,
      },
      {
        adult: false,
        backdrop_path: "/4F0Q2RzJESpEHaMhm3bZFtISFXt.jpg",
        id: 108545,
        name: "3 Body Problem",
        original_language: "en",
        original_name: "3 Body Problem",
        overview:
          "Across continents and decades, five brilliant friends make earth-shattering discoveries as the laws of science unravel and an existential threat emerges.",
        poster_path: "/ykZ7hlShkdRQaL2aiieXdEMmrLb.jpg",
        media_type: "tv",
        genre_ids: [10765, 9648, 18],
        popularity: 1787.667,
        first_air_date: "2024-03-21",
        vote_average: 7.3,
        vote_count: 263,
        origin_country: ["US"],
      },
      {
        adult: false,
        backdrop_path: "/eKzH2rkPEzPFd8gFH1ds8YzAIx6.jpg",
        id: 200908,
        name: "We Were the Lucky Ones",
        original_language: "en",
        original_name: "We Were the Lucky Ones",
        overview:
          "The true story of one Jewish family separated at the start of World War II, determined to survive—and to reunite.",
        poster_path: "/6Qk54WY8EWYJs6uNWgm3QJNOH9U.jpg",
        media_type: "tv",
        genre_ids: [18],
        popularity: 69.076,
        first_air_date: "2024-03-28",
        vote_average: 8,
        vote_count: 2,
        origin_country: ["US"],
      },
      {
        adult: false,
        backdrop_path: "/4W9kyBFT69ORP5Jzk9mVMGBBO4R.jpg",
        id: 206586,
        name: "The Walking Dead: The Ones Who Live",
        original_language: "en",
        original_name: "The Walking Dead: The Ones Who Live",
        overview:
          "The love story of Rick Grimes and Michonne is changed by a changed world. Kept apart by distance. By an unstoppable power. Can they find each other and who they were in a situation unlike any they've ever known?",
        poster_path: "/ywbacot78IuNhGW4uVZPxxxVTkm.jpg",
        media_type: "tv",
        genre_ids: [10765, 18],
        popularity: 1152.548,
        first_air_date: "2024-02-25",
        vote_average: 8.3,
        vote_count: 202,
        origin_country: ["US"],
      },
      {
        adult: false,
        backdrop_path: "/y2CCwm5JrwjVxfUQOPNfVItbRXn.jpg",
        id: 984324,
        title: "The Wages of Fear",
        original_language: "fr",
        original_title: "Le salaire de la peur",
        overview:
          "Four down-on-their-luck men are hired to drive trucks laden with nitroglycerine through the mountains as part of an operation to extinguish an oil well fire.",
        poster_path: "/jFK2ZLQUzo9pea0jfMCHDfvWsx7.jpg",
        media_type: "movie",
        genre_ids: [28, 53],
        popularity: 35.965,
        release_date: "2024-03-28",
        video: false,
        vote_average: 6.7,
        vote_count: 3,
      },
      {
        adult: false,
        backdrop_path: "/87IVlclAfWL6mdicU1DDuxdwXwe.jpg",
        id: 693134,
        title: "Dune: Part Two",
        original_language: "en",
        original_title: "Dune: Part Two",
        overview:
          "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, Paul endeavors to prevent a terrible future only he can foresee.",
        poster_path: "/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg",
        media_type: "movie",
        genre_ids: [878, 12],
        popularity: 778.73,
        release_date: "2024-02-27",
        video: false,
        vote_average: 8.381,
        vote_count: 2225,
      },
    ],
    sliderTitle: "Trending Now",
    sliderId: "trendingMediaSLider",
    sliderLink: "/browse/all/trending/now",
  };

  it("renders slider title and link correctly", () => {
    const { getByText } = render(
      <Provider store={store}>
        <TMDBCardSlider {...mockData} />
      </Provider>,
    );
    const titleElement = getByText("Trending Now");
    const linkElement = titleElement.parentElement;

    expect(titleElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/browse/all/trending/now");
  });
});
