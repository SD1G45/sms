import React from "react";
import { StyledTable, StyledSelected, StyledNonSelected, Header, StyledDiv } from "./styles";
import { SideNavProps } from "./types";

const SideNav: React.FC<SideNavProps> = ({
    items,
    index,
    heading
}) => {
    return (
        <StyledDiv>
            <Header>{heading}</Header>
                <StyledTable>
                    {items.map((item, i) => i === index ? 
                        <tr key={i}><StyledSelected>{item}</StyledSelected></tr>
                        :
                        <tr key={i}><StyledNonSelected>{item}</StyledNonSelected></tr>
                    )}
                </StyledTable>
        </StyledDiv>);
};

export default SideNav;