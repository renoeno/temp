import Head from "next/head";
import { useEffect } from "react";
import Layout from "../components/layout/Layout.js";

import SearchBox from "../components/searchbox/SearchBox.js";
import LanguageSelector from "../components/UI/LanguageSelector.js";

const Home = () => {
  useEffect(() => {
    console.log("mounted");
  }, []);
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
