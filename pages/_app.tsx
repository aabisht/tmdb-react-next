import type { AppProps } from "next/app";
import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { appWithTranslation } from "next-i18next";
import { FC } from "react";
import { PrimeReactProvider } from "primereact/api";
import "../src/styles/globals.css";
import { wrapper } from "src/redux/store";
import { Provider } from "react-redux";

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) => {
  const { store } = wrapper.useWrappedStore(pageProps);

  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        <PrimeReactProvider value={{ unstyled: true }}>
          <Component {...pageProps} />
        </PrimeReactProvider>
      </SessionProvider>
    </Provider>
  );
};

export default appWithTranslation(MyApp as FC);
