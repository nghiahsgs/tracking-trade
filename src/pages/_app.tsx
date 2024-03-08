import Toast from "@/components/alert";
import { AppContainer } from "@/components/app-container";
import AppLayout from "@/layouts/Layout";
import "@/styles/globals.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactNode } from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import { RecoilRoot } from "recoil";

type Page<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactNode) => ReactNode;
};

export type Props = AppProps & {
  Component: Page;
};

export default function App(props: Props) {
  return (
    <RecoilRoot>
      <AppContainer {...props} />
    </RecoilRoot>
  );
}
