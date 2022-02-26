import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import { useApolloClient } from "@apollo/client";
import { useUserDispatch } from "../../context/UserContext";
import Button from "../Button";

const LogoutButton = () => {
  const [loading, setLoading] = useState(false);
  const apolloClient = useApolloClient();
  const userDispatch = useUserDispatch();
  const router = useRouter();

  const onLogout = async () => {
    setLoading(true);
    userDispatch({
      type: "logout",
    });
    apolloClient.clearStore();
    
    setLoading(false);
    if (router.query.redirect != null) {
      router.push({
        pathname: router.query.redirect as string,
        query: { code: router.query.code },
      });
    } else {
      router.push("/login");
    }
  };

  return (
    <Button onClick={() => onLogout()} loading={loading}>
      Logout
    </Button>
  );
}

export default LogoutButton;