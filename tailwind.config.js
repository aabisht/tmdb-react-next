/** @type {import('tailwindcss').Config} */

const config = {
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
            "--tw-prose-body": theme("colors.pink[800]"),
            // "--tw-prose-body": "#9d174d",
            // "--tw-prose-headings": "#111827",
            // "--tw-prose-lead": "#4b5563",
            // "--tw-prose-links": "#111827",
            // "--tw-prose-bold": "#111827",
            // "--tw-prose-counters": "#6b7280",
            // "--tw-prose-bullets": "#d1d5db",
            // "--tw-prose-hr": "#e5e7eb",
            // "--tw-prose-quotes": "#111827",
            // "--tw-prose-quote-borders": "#e5e7eb",
            // "--tw-prose-captions": "#6b7280",
            // "--tw-prose-kbd": "#111827",
            // "--tw-prose-kbd-shadows": "17 24 39",
            // "--tw-prose-code": "#111827",
            // "--tw-prose-pre-code": "#e5e7eb",
            // "--tw-prose-pre-bg": "#1f2937",
            // "--tw-prose-th-borders": "#d1d5db",
            // "--tw-prose-td-borders": "#e5e7eb",
            // "--tw-prose-invert-body": "#d1d5db",
            // "--tw-prose-invert-headings": "#fff",
            // "--tw-prose-invert-lead": "#9ca3af",
            // "--tw-prose-invert-links": "#fff",
            // "--tw-prose-invert-bold": "#fff",
            // "--tw-prose-invert-counters": "#9ca3af",
            // "--tw-prose-invert-bullets": "#4b5563",
            // "--tw-prose-invert-hr": "#374151",
            // "--tw-prose-invert-quotes": "#f3f4f6",
            // "--tw-prose-invert-quote-borders": "#374151",
            // "--tw-prose-invert-captions": "#9ca3af",
            // "--tw-prose-invert-kbd": "#fff",
            // "--tw-prose-invert-kbd-shadows": "255 255 255",
            // "--tw-prose-invert-code": "#fff",
            // "--tw-prose-invert-pre-code": "#d1d5db",
            // "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
            // "--tw-prose-invert-th-borders": "#4b5563",
            // "--tw-prose-invert-td-borders": "#374151",
            maxWidth: "100%",
            img: {
              marginTop: "0",
              marginBottom: "0",
            },
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
        sans: ["var(--font-roboto)"],
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
        },
        black: {
          DEFAULT: "#000000",
          light: "#101010",
          lightest: "#141414",
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
    },
  },
  plugins: [
    require("@tailwindcss/typography")({
      className: "tmdb",
    }),
  ],
};
export default config;
