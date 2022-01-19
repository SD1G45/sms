import React from "react";
import SideNav from "../../components/SideNav";

const CreateCampaign = () => {
    const list: string[] = ["Analytics", "Create new", "FAQ"];
    const routes: string[] = ["/campaigns", "/create-campaign", "/faq-campaign"];

    return (
      <SideNav items={list} routes={routes} heading={"Campaigns"}/>
    );
}

export default CreateCampaign;