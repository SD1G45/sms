import "../styles/globals.css";
import type { AppProps } from "next/app";
import GlobalStyles from "../components/styles/GlobalStyles";
import Theme from "../components/styles/Theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
export default MyApp;
