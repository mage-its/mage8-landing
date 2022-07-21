import "../styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import darkTheme from "../styles/themes/darkTheme";
import NextNProgress from "nextjs-progressbar";
import "react-toastify/dist/ReactToastify.css";
import { GoogleAnalytics, pageView } from "nextjs-google-analytics";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { GAMeasurementId } from "@/common/config";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    pageView({ path: router.asPath }, GAMeasurementId);
  }, [router.asPath]);

  return (
    <NextThemesProvider
      defaultTheme="dark"
      attribute="class"
      value={{
        dark: darkTheme.className,
      }}
    >
      <NextUIProvider>
        <NextNProgress color="#06381b" />
        <GoogleAnalytics />
        <Component {...pageProps} />
      </NextUIProvider>
    </NextThemesProvider>
  );
}

export default MyApp;
