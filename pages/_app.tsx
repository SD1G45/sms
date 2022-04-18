import type { AppProps } from "next/app";
import GlobalStyles from "../components/styles/GlobalStyles";
import Theme from "../components/styles/Theme";
import Navbar from "../components/Navbar";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/apolloClient";
import { UserProvider } from "../context/UserContext/UserContext";
import { BusinessProvider } from "../context/BusinessContext/BusinessContext";
import RouteGuard from "../components/RouteGuard";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import LoadingDiv from "../components/LoadingDiv";
import { ParallaxProvider } from "react-scroll-parallax";
import Head from "next/head";

const Loading = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url: any) => url && setLoading(true);
    const handleComplete = (url: any) => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });

  return (
    <>
      {loading ? (
        <div>
          <LoadingDiv />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/StackedTriangle-1.svg" />
      </Head>
      <ApolloProvider client={apolloClient}>
        <ParallaxProvider>
          <Loading />
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
        </ParallaxProvider>
      </ApolloProvider>
    </>
  );
}
export default MyApp;
