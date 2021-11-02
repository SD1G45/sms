import type { NextPage } from "next";
import React, { useState } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import Card from "../components/Card";
import TextField from "../components/TextField";
import Checkbox from "../components/Checkbox";
import Selector from "../components/Selector";
import MultiSelector from "../components/MultiSelector";

const Center = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  flex-direction: column;
`;

const options = [
  { name: "VIP List", id: "1" },
  { name: "Main List", id: "2" },
  { name: "Super VIP List", id: "3" },
];

const selectorOptions = [
  { name: "BOGO", id: "1" },
  { name: "Free Fries", id: "2" },
  { name: "Free Drinks", id: "2" },
];

const Home: NextPage = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [selectedOptions, setSelectedOptions] = useState<
    { name: string; id: string }[]
  >([]);

  const handleRemove = (id: string) => {
    setSelectedOptions(selectedOptions.filter((value) => value.id !== id));
  };

  const handleSelect = (id: string, name: string) => {
    setSelectedOptions([{ id, name }, ...selectedOptions]);
  };

  const filteredOptions = options.filter(
    ({ id: id1 }) => !selectedOptions.some(({ id: id2 }) => id2 === id1)
  );

  const [selectorSearch, setSelectorSearch] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>("");

  const [checked, setChecked] = useState(false);

  const [username, setUsername] = useState("");

  return (
    <Center style={{ width: 200 }}>
      <MultiSelector
        options={filteredOptions}
        searchValue={searchValue}
        onSearchValueChange={(id) => setSearchValue(id)}
        onSelect={({ name, id }) => handleSelect(id, name)}
        selectedOptions={selectedOptions}
        onRemove={(id) => handleRemove(id)}
      />
      <Selector
        options={selectorOptions}
        searchValue={selectorSearch}
        onSearchValueChange={setSelectorSearch}
        onSelect={(id) => setSelectedId(id)}
        selectedId={selectedId}
      />
      <Button>Click me!</Button>
      <TextField value="" onChange={() => {}} label="Coupons" />
      <Card style={{ padding: 80 }}>This is a card</Card>
      <Card>
        <TextField value="" onChange={() => {}} label="Coupons" />
        <div style={{ marginBottom: 10 }} />

        <Checkbox
          label="Checkbox"
          checked={checked}
          onChange={(event: any) => setChecked(event.target.checked)}
        />
      </Card>
    </Center>
  );
};

export default Home;
