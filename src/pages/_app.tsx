import AppLayout from "@/layouts/Layout";
import "@/styles/globals.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactNode } from "react";

type Page<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactNode) => ReactNode;
};

type Props = AppProps & {
  Component: Page;
};

export default function App({ Component, pageProps }: Props) {
  const getLayout =
    Component.getLayout || ((page: ReactNode) => <AppLayout>{page}</AppLayout>);

  return getLayout(<Component {...pageProps} />);
}
