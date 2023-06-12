import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import type { NextPage } from "next";
import type { ReactElement, ReactNode } from "react";
import { extendTheme } from "@chakra-ui/react";
import "nprogress/nprogress.css";
import NProgress from "nprogress";
import Router from "next/router";

type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  Router.events.on("routeChangeStart", NProgress.start);
  Router.events.on("routeChangeError", NProgress.done);
  Router.events.on("routeChangeComplete", NProgress.done);
  NProgress.configure({
    template:
      '<div class="bar !bg-rose-500 !border-b-[2px] !border-rose-500" role="bar"><div class="peg !bg-rose-500"></div></div>',
    easing: "ease",
    speed: 300,
    minimum: 0.1,
  });
  const theme = extendTheme({
    colors: {
      color: {
        bg: "#0e1116",
        // ...
        text: "#A8B3CF",
        // border: "#4d5561",
        border: "#a8b3cf33",
      },
    },
  });

  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);
  return (
    <SessionProvider session={session}>
      <ChakraProvider theme={theme}>
        {getLayout(<Component {...pageProps} />)}
      </ChakraProvider>
    </SessionProvider>
  );
}
