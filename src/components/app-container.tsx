import { Props } from "@/pages/_app";
import Toast from "./alert";
import { ReactNode } from "react";
import AppLayout from "@/layouts/Layout";
import { QueryClient, QueryClientProvider } from "react-query";
import { useSetRecoilState } from "recoil";
import toastState, { IToast } from "@/stores/toast";
import { useRouter } from "next/router";
import { ROUTES } from "@/constants/route";
import { LocalStorageService } from "@/utils/storage";

export function AppContainer({ Component, pageProps }: Props) {
  const setToast = useSetRecoilState<IToast>(toastState);
  const route = useRouter();

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        onError: (error: any) => {
          setToast({ type: "error", message: error?.data?.detail });
          if (
            error?.data?.detail === "Could not validate credentials" &&
            error.status === 401
          ) {
            handleLogout();
          }
        },
      },
      mutations: {
        retry: false,
        onError: (error: any) => {
          setToast({ type: "error", message: error?.data?.detail });
          if (
            error?.data?.detail === "Could not validate credentials" &&
            error.status === 401
          ) {
            handleLogout();
          }
        },
      },
    },
  });

  const handleLogout = () => {
    route.push(ROUTES.LOGIN);
    LocalStorageService.deleteAccessToken();
  };
  const getLayout =
    Component.getLayout || ((page: ReactNode) => <AppLayout>{page}</AppLayout>);

  return (
    <QueryClientProvider client={queryClient}>
      {getLayout(<Component {...pageProps} />)}
      <Toast />
    </QueryClientProvider>
  );
}
