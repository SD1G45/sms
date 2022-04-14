import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useUserState } from "../../context/UserContext";
import { useBusinessState } from "../../context/BusinessContext/BusinessContext";
import getRootUrl from "../../config/rootUrl";

// const RouteGuard: React.FC = ({ children }) => {
//   return <div />;
// };

const RouteGuard: any = ({ children }: any) => {
  const router = useRouter();
  const userState = useUserState();
  const businessState = useBusinessState();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    // on initial load - run auth check
    authCheck(router.asPath);

    // on route change start - hide page content by setting authorized to false
    const hideContent = () => setAuthorized(false);
    router.events.on("routeChangeStart", hideContent);

    // on route change complete - run auth check
    router.events.on("routeChangeComplete", authCheck);

    // unsubscribe from events in useEffect return function
    return () => {
      router.events.off("routeChangeStart", hideContent);
      router.events.off("routeChangeComplete", authCheck);
    };
  }, [userState]);

  async function authCheck(url: string) {
    // redirect to login page if accessing a private page and not logged in
    const path = url.split("?")[0];
    if (
      !userState?.jid &&
      (path.includes("campaigns") ||
        path.includes("coupons") ||
        path.includes("customers") ||
        path.includes("keywords") ||
        path.includes("business") ||
        path.includes("billing") ||
        path.includes("settings") ||
        path === "/")
    ) {
      setAuthorized(false);
      router.push({
        pathname: "/us",
      });
    } else if (
      !businessState?.businessId &&
      (path.includes("campaigns") ||
        path.includes("coupons") ||
        path.includes("customers") ||
        path.includes("keywords") ||
        path.includes("billing") ||
        path.includes("settings") ||
        path === "/")
    ) {
      const rootUrl = getRootUrl();
      router.push({
        pathname: rootUrl + "business/create"
      });
    } else {
      setAuthorized(true);
      if (
        userState?.jid &&
        (path.includes("login") || path.includes("register"))
      ) {
        router.push({ pathname: "/" });
      }
    }
  }

  return authorized && children;
};

export default RouteGuard;
