import Layout from "../components/layout/Layout";

import TempContextProvider from "../store/temp-context";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <TempContextProvider>
        <Component {...pageProps} />
      </TempContextProvider>
    </Layout>
  );
}

export default MyApp;
