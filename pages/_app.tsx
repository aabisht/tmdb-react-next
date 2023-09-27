import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { FC } from "react";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default appWithTranslation(MyApp as FC);
