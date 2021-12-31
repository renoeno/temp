import Head from "next/head";
import { useEffect } from "react";
import Layout from "../components/layout/Layout";

import SearchBox from "../components/searchbox/SearchBox";
import LanguageSelector from "../components/UI/LanguageSelector";

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Temp</title>
        <meta name="description" content="A pretty weather app" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <LanguageSelector />
      <h1>Temp</h1>
      <SearchBox />
    </Layout>
  );
};

export default Home;
