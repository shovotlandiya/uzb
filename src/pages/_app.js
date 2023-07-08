import "@/styles/globals.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "@/utils/i18n";
import { appWithTranslation } from "next-i18next";

import MediaQueryProvider from "@/context/MediaQueryProvider";
import MainLayout from "@/layouts/MainLayout/MainLayout";

const App = ({ Component, pageProps }) => {
  return (
    <MediaQueryProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </MediaQueryProvider>
  );
};

export default appWithTranslation(App);
