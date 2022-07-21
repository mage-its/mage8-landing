import "../styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import darkTheme from "../styles/themes/darkTheme";
import NextNProgress from "nextjs-progressbar";
import "react-toastify/dist/ReactToastify.css";
import { GoogleAnalytics, usePageViews } from "nextjs-google-analytics";

function MyApp({ Component, pageProps }) {
  usePageViews();

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
