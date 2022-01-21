import React from "react";
import SideNav from "../../../components/SideNav";

// TODO: Isolate logic to another file
const index = () => {
    const list: string[] = ["Analytics", "Create New", "FAQ"];
    const routes: string[] = ["/coupons", "/coupons/create", "/coupons/faq"];

    return <SideNav items={list} routes={routes} heading={"Coupons"}/>;
}

export default index;