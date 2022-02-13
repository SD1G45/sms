import React, { useEffect } from "react";
import SearchBar from "../../components/SearchBar";
import Button from "../../components/Button";
import Table from "../../components/Table";
import {
    RowDiv,
    SearchDiv,
    ColumnDiv,
    ContainerDiv,
    StyledHeader,
} from "../../page-styles/coupons/styles";
import { HeaderDiv } from "../../page-styles/campaigns/styles";
import { useRouter } from "next/router";
import SideNav from "../../components/SideNav";
import { useBusinessState } from "../../context/BusinessContext/BusinessContext";
import { useLazyQuery } from "@apollo/client";
import { CUSTOMER_LIST_QUERY } from "../../page-queries/keywords/create";


const Customers = () => {
    const router = useRouter();
    const createPath = router.asPath + "/create";
    const faqPath = router.asPath + "/faq";
    
    const sideNavItems: string[] = ["Analytics", "Create New", "FAQ"];
    const routes: string[] = ["/customers", createPath, faqPath];
    const data: string[][] = [];

    const businessState = useBusinessState();
    const [getCustomersList, customerListQueryResult] = useLazyQuery(CUSTOMER_LIST_QUERY);
    useEffect(() => {
        getCustomersList({
            variables: {
                businessId:
                    businessState?.businessId || "7a6a0a03-5196-4952-aa9b-248c9daf1827",
            },
        });
    }, [getCustomersList, businessState]);

    const customerLists =
        customerListQueryResult.data != undefined
            ? customerListQueryResult.data.customerLists
            : [];

    for (let i = 0; i < customerLists.length; i++) {
        const curr = customerLists[i];
        data.push([
            curr.name,
            curr.description + "-",
            curr.count + " total customers"
        ]);
    }

    return (
        <ContainerDiv>
            <SideNav items={sideNavItems} routes={routes} heading={"Customers"} />
            <ColumnDiv>
                <RowDiv>
                    <HeaderDiv>
                        <StyledHeader>Customer Analytics</StyledHeader>
                    </HeaderDiv>
                    <SearchDiv>
                        <SearchBar value={""} onValueChange={() => { }} />
                    </SearchDiv>
                    <Button>Create New Customer List</Button>
                </RowDiv>
                <Table headers={null} data={data} />
            </ColumnDiv>
        </ContainerDiv>
    );
}

export default Customers;