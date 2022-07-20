import React, { useEffect } from "react";
import { CacheProvider } from "@emotion/core";
import { ThemeProvider } from "emotion-theming";
import { cache } from "emotion";
import Head from "next/head";

import { theme } from "../styles/theme";

import "../styles/global.css";

import { UserProvider } from "../components/context/user-context";
import { useUserContext } from "../components/context/user-context";
// import ChatBox from "../components/common/ChatBox";

function CustomApp({ Component, pageProps }) {
  const [_, setUser] = useUserContext();
  useEffect(() => {
  }, []);

  return (
    <>
      <Head>
        <meta property="og:title" key="og_title" content="Quầy thẻ online" />
        <meta property="og:type" key="og_type" content="website" />
        {/* <meta
          property="og:image"
          key="og_image"
          content="http://funtap.vn/uncommon/funtap/images/funtap.jpg"
        /> */}
        <meta
          property="og:description"
          key="og_description"
          content="Nạp thẻ, gạch thẻ và đổi thẻ dễ dàng, đa dạng hình thức thanh toán lựa chọn, nhiều ưu đãi người dùng"
        />

        <meta name="author" key="author" content="QuayTheOnline" />
        <meta
          name="description"
          key="description"
          content="Nạp thẻ, gạch thẻ và đổi thẻ dễ dàng, đa dạng hình thức thanh toán lựa chọn, nhiều ưu đãi người dùng"
        />
        {/* <meta
          name="image"
          key="image"
          content="http://funtap.vn/uncommon/funtap/images/funtap.jpg"
        /> */}
      </Head>
      <div className="app">
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

function MyApp({ Component, pageProps }) {
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <UserProvider>
          <CustomApp Component={Component} pageProps={pageProps} />
          {/* <ChatBox /> */}
        </UserProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
