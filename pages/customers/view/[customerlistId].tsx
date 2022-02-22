import { useEffect } from "react";
import { useLazyQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { useBusinessState } from "../../../context/BusinessContext/BusinessContext";
import { CUSTOMER_QUERY } from "../../../page-queries/customers";
import {
    RowDiv,
    SearchDiv,
    ColumnDiv,
    ContainerDiv,
    StyledHeader,
} from "../../../page-styles/coupons/styles";
import { HeaderDiv } from "../../../page-styles/campaigns/styles";
import SideNav from "../../../components/SideNav";
import SearchBar from "../../../components/SearchBar";
import Button from "../../../components/Button";
import CustomersTable from "../../../components/CustomersTable";

const View = () => {
    const router = useRouter();
    const {customerlistId} = router.query;

    const createPath = router.asPath + "/create";
    const faqPath = router.asPath + "/faq";

    const sideNavItems: string[] = ["Analytics", "Create New", "FAQ"];
    const routes: string[] = ["/customers", createPath, faqPath];
    const headers: string[] = ["First Name", "Last Name", "Phone Number"];
    const data: string[][] = [];

    const businessState = useBusinessState();
    const [getCustomers, customersQueryResult] = useLazyQuery(CUSTOMER_QUERY);
    useEffect(() => {
        getCustomers({
            variables: {
                customerListId: customerlistId || "",
            },
        });
    }, [getCustomers, businessState]);

    const customers = 
        customersQueryResult.data !== undefined
        ? customersQueryResult.data.customerListCustomers 
        : [];
    
    for (let i = 0; i < customers.length; i++) {
        const currCustomer = customers[i].customer;
        data.push([
            currCustomer.firstName,
            currCustomer.lastName,
            currCustomer.phoneNumber
        ])
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
                <CustomersTable data={data} ids={headers} view={true}/>
            </ColumnDiv>
        </ContainerDiv>
    );
}

export default View;