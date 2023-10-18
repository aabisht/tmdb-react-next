import type { AppProps } from "next/app";
import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { appWithTranslation } from "next-i18next";
import { FC } from "react";
import { PrimeReactProvider } from "primereact/api";
import "../src/styles/globals.css";

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) => {
  return (
    <SessionProvider session={session}>
      <PrimeReactProvider value={{ unstyled: true }}>
        <Component {...pageProps} />
      </PrimeReactProvider>
    </SessionProvider>
  );
};

export default appWithTranslation(MyApp as FC);
