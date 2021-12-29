import TempContextProvider from "../store/temp-context";

import "../styles/globals.css";
import "../styles/fonts.css";

function MyApp({ Component, pageProps }) {
  return (
    <TempContextProvider>
      <Component {...pageProps} />
    </TempContextProvider>
  );
}

export default MyApp;
