import type { AppProps } from "next/app";
import GlobalStyles from "../components/styles/GlobalStyles";
import Theme from "../components/styles/Theme";
import Navbar from "../components/Navbar";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/apolloClient";
import { UserProvider } from "../context/UserContext";

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <UserProvider>
        <GlobalStyles />
        <Theme>
          <Navbar />
          <Component {...pageProps} />
        </Theme>
      </UserProvider>
    </ApolloProvider>
  );
}
export default MyApp;
