import { useRouter } from "next/router";
import React from "react";
import SideNav from "../../../components/SideNav";

const FaqCampaign = () => {

  const router = useRouter();

  const list: string[] = ["Analytics", "Create New", "FAQ"];
  const routes: string[] = ["/campaigns", "/campaigns/create", "/campaigns/faq"];

  return (
    <SideNav items={list} routes={routes} heading={"FAQ Campaigns"}/>
  );
}

export default FaqCampaign;