import React from "react";
import { StyledTable, Item, Header, StyledDiv } from "./styles";
import { SideNavProps } from "./types";
import Link from "next/link";
import { useRouter } from "next/router";

const SideNav: React.FC<SideNavProps> = ({
    items,
    routes,
    heading
}) => {
    const router = useRouter();
    const currentPath = router.asPath;

    if (currentPath.startsWith("/login")) return <></>;
    if (currentPath.startsWith("/register")) return <></>;
    if (currentPath.startsWith("/welcome")) return <></>;
    if (currentPath.startsWith("/create-business")) return <></>;
    return (
        <StyledDiv>
            <Header>{heading}</Header>
                <StyledTable>
                    {items.map((item, i) => (
                        <Link key={i} href={routes[i]} passHref>
                            <tr>
                                <Item active={currentPath.startsWith(routes[i])}>
                                    {item}
                                </Item>
                            </tr>
                        </Link>
                    )
                    )}
                </StyledTable>
        </StyledDiv>);
};

export default SideNav;