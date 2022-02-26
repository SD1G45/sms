import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import { useApolloClient } from "@apollo/client";
import { useUserDispatch } from "../../context/UserContext";
import Button from "../Button";
import ErrorPopup from "../ErrorPopup";

const LogoutButton = () => {
  const [errorState, setError] = useState({ error: false, message: "" });
  const [loading, setLoading] = useState(false);
  const apolloClient = useApolloClient();
  const userDispatch = useUserDispatch();
  const router = useRouter();

  const onLogout = async () => {
    setLoading(true);
    try {
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
    } catch (error) {
      setLoading(false);
      setError({ ...errorState, error: true, message: "Error logging out" });
    }
  };

  return (
    <>
      <Button onClick={() => onLogout()} loading={loading}>
        Logout
      </Button>
      <ErrorPopup error={errorState.error} message={errorState.message} />
    </>
  );
}

export default LogoutButton;