import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import type { NextPage } from "next";
import type { ReactElement, ReactNode } from "react";
import { extendTheme } from "@chakra-ui/react";

type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const theme = extendTheme({
    colors: {
      color: {
        bg: "#0e1116",
        // ...
        text: "#A8B3CF",
        border: "#4d5561",
        // border: "#a8b3cf33",
      },
    },
  });

  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);
  return (
    <ChakraProvider theme={theme}>
      {getLayout(<Component {...pageProps} />)}
    </ChakraProvider>
  );
}
