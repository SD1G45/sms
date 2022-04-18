import styled from "styled-components";
import { ChevronProps } from "./types";

export const Accordion = styled.ul`
  list-style: none;
  margin: 0;
  // padding: 0;
  margin-left: 10px;
  padding-left: 10px;
`;

export const ListItem = styled.li`
  border-bottom: 5px solid #ffffff;

  &: not(: first-of-type) {
    border-top: 0;
  }
  padding: 10px;
  background-color: #4881f0;
  margin-left: 5px;
`;

export const Title = styled.h2`
  color: white;
  width: 100%;
  // height: 50%;
  margin: 100;
`;

export const Chevron = styled.button<ChevronProps>`
  & {
    content: "";
    flex-shrink: 0;
    width: 20px;
    height: 18px;
    margin-left: 95%;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23ffffff'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-size: 100%;
    transition: transform 0.2s ease-in-out;
  }

  &:after {
    content: "";
    flex-shrink: 0;
    width: 18px;
    height: 18px;
    margin-left: auto;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23ffffff'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-size: 100%;
    transition: transform 0.2s ease-in-out;
  }
  transform: ${(props) => (props.active ? "rotate(180deg)" : "")};
`;

export const ItemContainer = styled.div`
  transition: height 0.2s ease-in-out;
  overflow: hidden;

  // background-color: rgba(72, 240, 229, 0.5);
`;

export const Content = styled.div`
  border-top: 1px solid #ffffff;
  padding: 15px 20px;
`;
