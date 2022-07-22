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
        <meta property="og:title" key="og_title" content="7Verse Football" />
        <meta property="og:type" key="og_type" content="website" />
        <meta
          property="og:description"
          key="og_description"
          content="A first world web3 NFT-based games for football fan"
        />

        <meta name="author" key="author" content="7Verse Football" />
        <meta
          name="description"
          key="description"
          content="A first world web3 NFT-based games for football fan"
        />
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
