import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useUserState } from "../../context/UserContext";
import {
  useBusinessDispatch,
  useBusinessState,
} from "../../context/BusinessContext/BusinessContext";
import getRootUrl from "../../config/rootUrl";
import { useLazyQuery } from "@apollo/client";
import { BUSINESS_LIST_QUERY } from "../Navbar/queries";
import Cookies from "js-cookie";

// const RouteGuard: React.FC = ({ children }) => {
//   return <div />;
// };

const RouteGuard: any = ({ children }: any) => {
  const router = useRouter();
  const userState = useUserState();
  const businessState = useBusinessState();
  const [authorized, setAuthorized] = useState(false);
  const [getBusinesses, businessQueryResult] =
    useLazyQuery(BUSINESS_LIST_QUERY);

  useEffect(() => {
    getBusinesses();
  }, [userState]);

  const businessList: {
    id: string;
    name: string;
    logoUrl: string;
    phoneNumber: string;
  }[] =
    businessQueryResult.data != undefined &&
    businessQueryResult.data.viewer != undefined
      ? businessQueryResult.data.viewer.businesses
      : [];

  const businessDispatch = useBusinessDispatch();

  if (businessList.length > 0 && businessState?.businessId == null) {
    businessDispatch({
      type: "setActiveBusiness",
      payload: {
        businessId: businessList[0].id,
        name: businessList[0].name,
        logoUrl: businessList[0].logoUrl,
        phoneNumber: businessList[0].phoneNumber,
      },
    });
  }

  const filteredBusinessList = businessList.filter(
    ({ id }) => id !== businessState?.businessId
  );
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
      !Cookies.get("businessId") &&
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
        pathname: rootUrl + "welcome",
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
