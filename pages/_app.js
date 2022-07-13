import "../styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import darkTheme from "../styles/themes";

function MyApp({ Component, pageProps }) {
  return (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        dark: darkTheme.className,
      }}
    >
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </NextThemesProvider>
  );
}

export default MyApp;
