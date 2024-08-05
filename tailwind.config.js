/** @type {import('tailwindcss').Config} */

const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, "$1")
    .replace(/\.0$/, "");
const rem = (px) => `${round(px / 16)}rem`;
const em = (px, base) => `${round(px / base)}em`;

const config = {
  darkMode: ["selector", '[data-mode="dark"]'],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/primereact/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": theme("colors.black.light"),
            "--tw-prose-body-bg": theme("colors.white.DEFAULT"),
            "--tw-prose-headings": theme("colors.black.light"),
            "--tw-prose-lead": theme("colors.black.light"),
            "--tw-prose-links": theme("colors.black.light"),
            "--tw-prose-bold": theme("colors.black.light"),
            "--tw-prose-counters": theme("colors.black.light"),
            "--tw-prose-bullets": theme("colors.black.light"),
            "--tw-prose-hr": theme("colors.white[200]"),
            "--tw-prose-quotes": theme("colors.black.light"),
            "--tw-prose-quote-borders": theme("colors.white[200]"),
            "--tw-prose-captions": theme("colors.black.light"),
            "--tw-prose-kbd": theme("colors.black.light"),
            "--tw-prose-kbd-shadows": "17 24 39",
            "--tw-prose-code": theme("colors.black.light"),
            "--tw-prose-pre-code": theme("colors.white.DEFAULT"),
            "--tw-prose-pre-bg": theme("colors.black.lightest"),
            "--tw-prose-th-borders": theme("colors.white[200]"),
            "--tw-prose-td-borders": theme("colors.white[200]"),
            "--tw-prose-invert-body": theme("colors.white.DEFAULT"),
            "--tw-prose-invert-body-bg": theme("colors.black.light"),
            "--tw-prose-invert-headings": theme("colors.white.DEFAULT"),
            "--tw-prose-invert-lead": theme("colors.white.DEFAULT"),
            "--tw-prose-invert-links": theme("colors.white.DEFAULT"),
            "--tw-prose-invert-bold": theme("colors.white.DEFAULT"),
            "--tw-prose-invert-counters": theme("colors.white.DEFAULT"),
            "--tw-prose-invert-bullets": theme("colors.white.DEFAULT"),
            "--tw-prose-invert-hr": theme("colors.black.lightest"),
            "--tw-prose-invert-quotes": theme("colors.white.DEFAULT"),
            "--tw-prose-invert-quote-borders": theme("colors.black.lightest"),
            "--tw-prose-invert-captions": theme("colors.white.DEFAULT"),
            "--tw-prose-invert-kbd": theme("colors.white.DEFAULT"),
            "--tw-prose-invert-kbd-shadows": "255 255 255",
            "--tw-prose-invert-code": theme("colors.white.DEFAULT"),
            "--tw-prose-invert-pre-code": theme("colors.white.DEFAULT"),
            "--tw-prose-invert-pre-bg": theme("colors.black[200]"),
            "--tw-prose-invert-th-borders": theme("colors.black.lightest"),
            "--tw-prose-invert-td-borders": theme("colors.black.lightest"),
            maxWidth: "100%",
            fontSize: rem(16),
            lineHeight: 1.5,
            backgroundColor: "var(--tw-prose-body-bg)",
            "h1, h2, h3, h4, h5, h6": {
              marginTop: 0,
              marginBottom: em(4, 8),
            },
            "h1, h2": {
              fontWeight: theme("fontWeight.light"),
            },
            "h3, h4": {
              fontWeight: theme("fontWeight.normal"),
            },
            "h5, h6": {
              fontWeight: theme("fontWeight.bold"),
            },
            h1: {
              fontSize: em(46, 16),
            },
            h2: {
              fontSize: em(38, 16),
            },
            h3: {
              fontSize: em(30, 16),
            },
            h4: {
              fontSize: em(24, 16),
            },
            h5: {
              fontSize: em(20, 16),
            },
            h6: {
              fontSize: em(16, 16),
            },
            "p, ul": {
              marginBottom: em(16, 16),
            },
            img: {
              marginTop: "0",
              marginBottom: "0",
            },
            a: {
              fontWeight: theme("fontWeight.semibold"),
              transition: "color 0.25s cubic-bezier(.4,0,.2,1)",
            },
          },
        },
        invert: {
          css: {
            backgroundColor: "var(--tw-prose-invert-body-bg)",
          },
        },
      }),
      screens: {
        sm: "480px",
        md: "768px",
        lg: "992px",
        xl: "1280px",
        "2xl": "1440px",
      },
      fontFamily: {
        sans: ["Roboto", "var(--font-roboto)"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: {
          light: "#043359",
          DEFAULT: "#032541",
          dark: "#021729",
        },
        secondary: {
          light: "#2be1b5",
          DEFAULT: "#1ed5a9",
          dark: "#1bbf97",
        },
        success: {
          light: "#27da69",
          DEFAULT: "#22C55E",
          dark: "#1eaf54",
        },
        danger: {
          light: "#e04b59",
          DEFAULT: "#dc3545",
          dark: "#d32535",
        },
        warning: {
          light: "#ffc721",
          DEFAULT: "#ffc107",
          dark: "#edb100",
        },
        white: {
          DEFAULT: "#ffffff",
          dark: "#f8f8f8",
          darkest: "#f2f2f2",
          200: "#cccccc",
        },
        black: {
          DEFAULT: "#000000",
          light: "#101010",
          lightest: "#141414",
          200: "#333333",
        },
      },
      fontWeight: {
        hairline: "100",
        extralight: "100",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "500",
        bold: "700",
        "extra-bold": "900",
        black: "900",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          xl: "3.75rem",
          "2xl": "3.75rem",
        },
        screens: {
          DEFAULT: "100%",
        },
      },
      backgroundImage: {
        "banner-gradient": "linear-gradient(72deg,var(--tw-gradient-stops))",
      },
      boxShadow: {
        md: "0 2px 2px 0 rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.12),0 1px 5px 0 rgba(0,0,0,0.2)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography")({
      className: "tmdb",
    }),
  ],
};
export default config;
