import TempContextProvider from "../store/temp-context";

import "../styles/globals.scss";
import "../styles/fonts.scss";

function MyApp({ Component, pageProps }) {
  return (
    <TempContextProvider>
      <Component {...pageProps} />
    </TempContextProvider>
  );
}

export default MyApp;
