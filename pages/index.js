import Head from "next/head";

import SearchBox from "../components/searchbox/SearchBox";
import LanguageSelector from "../components/UI/LanguageSelector";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Temp</title>
        <meta name="description" content="A pretty weather app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LanguageSelector />
      <h1>Temp</h1>
      <SearchBox />
    </div>
  );
};

export default Home;
