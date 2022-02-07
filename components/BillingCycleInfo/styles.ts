import React from "react";
import styled from "styled-components";

export const SmallText = styled.text`
  text-align: left;
  width: 100%;
  color: #888B8E;
  font-size: 16px;
`;

export const LargeText = styled.text`
  text-align: left;
  width: 100%;
  font-size: 30px;
`;

export const LinkText = styled.text`
  text-align: right;
  width: 100%;
  color: #4881F0;
  font-size: 14px;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 10%;
  margin-left: 10%;
  margin-right: 10%;
  padding: 0px;
`;

export const TitleDiv = styled.div`
  display: flex;
  width: 100%;
  padding: 0px;
  gap: 0%;
  margin: 0%;
`;

export const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding: 30px 19px 30px 19px;
  gap: 11px;
`;