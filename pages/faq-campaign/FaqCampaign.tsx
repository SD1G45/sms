import React from "react";
import SideNav from "../../components/SideNav";

const FaqCampaign = () => {
    const list: string[] = ["Analytics", "Create new", "FAQ"];
    const routes: string[] = ["/campaigns", "/create-campaign", "/faq-campaign"];

    return (
      <SideNav items={list} routes={routes} heading={"FAQ Campaign"}/>
    );
}

export default FaqCampaign;