/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import MainLayout from "@components/layouts/MainLayout";
import MarketplaceContainer from "@container/Marketplace";

export const getServerSideProps = async (context) => {
  return {
    props: {},
  };
};

const Marketplace = ({}) => {
  return (
    <>
      <Head>
        <title>7Verse Football Market place</title>
        <meta property="og:title" key="og_title" content={`7Verse Football - Market place`} />
        <meta
          property="og:description"
          key="og_description"
          content={`7Verse Football - Market place`}
        />
        <meta
          property="description"
          key="description"
          content={`7Verse Football - Market place`}
        />
      </Head>
      <MainLayout>
        <MarketplaceContainer />
      </MainLayout>
    </>
  );
};

export default Marketplace;
