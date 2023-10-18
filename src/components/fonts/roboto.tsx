import { Roboto } from "next/font/google";

export const roboto = Roboto({
  display: "swap",
  subsets: ["latin"],
  weight: ["100", "400", "700"],
  style: ["normal", "italic"],
  variable: "--font-roboto",
});
