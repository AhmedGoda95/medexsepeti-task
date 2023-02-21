import "@/styles/globals.scss";
import theme from "@/theme";
import { ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import Head from "next/head";

import Footer from "@/components/Footer";
import MainNavigation from "@/components/Header/MainNavigation";
import UpperHeader from "@/components/Header/UpperHeader";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>MedexSepeti</title>
      </Head>

      <UpperHeader />
      <MainNavigation />
      <Component {...pageProps} />

      <Footer />
    </ThemeProvider>
  );
}
