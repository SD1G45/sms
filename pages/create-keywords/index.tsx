import React from "react";
import SideNav from "../../components/SideNav";

// TODO: Isolate logic to another file
const index = () => {
    const list: string[] = ["Analytics", "Create new", "FAQ"];
    const routes: string[] = ["/coupons", "/create-keywords", "/faq-keywords"];

    return <SideNav items={list} routes={routes} heading={"Keywords"}/>;
}

export default index;