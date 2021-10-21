import type { NextPage } from "next";
import React, { useState } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import Card from "../components/Card";
import TextField from "../components/TextField";
import Checkbox from "../components/Checkbox";
import Selector from "../components/Selector";

const Center = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 20px;
  flex-direction: column;
`;

const options = [
  { name: "BOGO Chicken Sandwhich", id: "1" },
  { name: "10% Off Entire Order", id: "2" },
  { name: "Free Fries", id: "3" },
  { name: "Free Drinks", id: "4" },
];

const Home: NextPage = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  return (
    <Center style={{ width: 400 }}>
      <Selector
        options={options}
        searchValue={searchValue}
        onSearchValueChange={(id) => setSearchValue(id)}
        onSelect={(id) => setSelectedId(id)}
        selectedId={selectedId}
      />
    </Center>
  );
};

export default Home;
