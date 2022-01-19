import React from "react";
import SideNav from "../../components/SideNav";

// TODO: Isolate logic to another file
const index = () => {
    const list: string[] = ["Analytics", "Create new", "FAQ"];
    const routes: string[] = ["/coupons", "/create-coupon", "/faq-coupon"];

    return <SideNav items={list} routes={routes} heading={"Coupons"}/>;
}

export default index;