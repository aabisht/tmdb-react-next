import { TrendingBanner } from "@modules/homePage/trendingBanner/trendingBanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | TMDB",
  description: "Generated by create next app",
};

export default function Home() {
  return <TrendingBanner />;
}