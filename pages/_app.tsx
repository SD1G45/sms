import type { AppProps } from "next/app";
import GlobalStyles from "../components/styles/GlobalStyles";
import Theme from "../components/styles/Theme";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Theme>
        <Navbar />
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
export default MyApp;
