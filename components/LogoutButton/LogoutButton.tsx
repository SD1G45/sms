import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import { useApolloClient } from "@apollo/client";
import { useUserDispatch } from "../../context/UserContext";
import Button from "../Button";
import { LogoutButtonProps } from "./types";
import { VariantButton } from "./styles";

const LogoutButton: React.FC<LogoutButtonProps> = ({
  variant,
  invert,
  text,
}) => {
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
      location.replace("/login");
    }
  };

  return (
    <VariantButton
      id="logout"
      onClick={() => onLogout()}
      loading={loading}
      variant={variant}
      invert={invert}
    >
      {text || "Logout"}
    </VariantButton>
  );
};

export default LogoutButton;
