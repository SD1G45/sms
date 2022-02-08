import type { AppProps } from "next/app";
import GlobalStyles from "../components/styles/GlobalStyles";
import Theme from "../components/styles/Theme";
import Navbar from "../components/Navbar";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/apolloClient";
import { UserProvider } from "../context/UserContext/UserContext";
import { BusinessProvider } from "../context/BusinessContext/BusinessContext";
import RouteGuard from "../components/RouteGuard";

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <UserProvider>
        <BusinessProvider>
          <GlobalStyles />
          <Theme>
            <RouteGuard>
              <Navbar />
              <Component {...pageProps} />
            </RouteGuard>
          </Theme>
        </BusinessProvider>
      </UserProvider>
    </ApolloProvider>
  );
}
export default MyApp;
