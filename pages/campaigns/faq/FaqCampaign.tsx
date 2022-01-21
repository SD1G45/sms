import { useRouter } from "next/router";
import React from "react";
import SideNav from "../../../components/SideNav";

const FaqCampaign = () => {

  const router = useRouter();

  const list: string[] = ["Analytics", "Create new", "FAQ"];
  const routes: string[] = ["/campaigns", router.asPath + "/create", router.asPath + "/faq"];

  return (
    <SideNav items={list} routes={routes} heading={"FAQ Campaigns"}/>
  );
}

export default FaqCampaign;