import "../styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import darkTheme from "../styles/themes/darkTheme";
import NextNProgress from "nextjs-progressbar";
import "react-toastify/dist/ReactToastify.css";
import { GoogleAnalytics, pageView } from "nextjs-google-analytics";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { GAMeasurementId, recaptchaSiteKey } from "@/common/config";
import { ToastContainer, Slide } from "react-toastify";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

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
        <GoogleReCaptchaProvider reCaptchaKey={recaptchaSiteKey} language="id">
          <NextNProgress color="#06381b" />
          <GoogleAnalytics />
          <Component {...pageProps} />
          <ToastContainer
            position="top-center"
            autoClose={1500}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            transition={Slide}
            theme="dark"
            bodyStyle={{ "font-family": "Poppins, sans-serif" }}
          />
        </GoogleReCaptchaProvider>
      </NextUIProvider>
    </NextThemesProvider>
  );
}

export default MyApp;
