/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import MainLayout from "@components/layouts/MainLayout";

import Home from "@container/Home";

export const getServerSideProps = async (context) => {
  let newsData = [];

  return {
    props: {
      newsData,
    },
  };
};

const HomePage = ({ newsData }) => {
  return (
    <>
      <Head>
        <title>7Verse Football</title>
        <meta property="og:title" key="og_title" content={`7Verse Football`} />
        <meta
          property="og:description"
          key="og_description"
          content={`7Verse Football`}
        />
        <meta
          property="description"
          key="description"
          content={`7Verse Football`}
        />
      </Head>
      <MainLayout>
        <Home/>
      </MainLayout>
    </>
  );
};

export default HomePage;
