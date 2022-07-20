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
        <title>Quay the Online</title>
        <meta property="og:title" key="og_title" content={`Quầy thẻ online`} />
        <meta
          property="og:description"
          key="og_description"
          content={`Quầy thẻ online`}
        />
        <meta
          property="description"
          key="description"
          content={`Quầy thẻ online`}
        />
      </Head>
      <MainLayout>
        <Home/>
      </MainLayout>
    </>
  );
};

export default HomePage;
