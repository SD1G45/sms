import React from "react";
import SideNav from "../../../components/SideNav";

// TODO: Isolate logic to another file
const index = () => {
    const list: string[] = ["Analytics", "Create New", "FAQ"];
    const routes: string[] = ["/keywords", "/keywords/create", "/keywords/faq"];

    return <SideNav items={list} routes={routes} heading={"Keywords"}/>;
}

export default index;