import type { NextPage } from "next";
import React, { useState } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import Card from "../components/Card";
import TextField from "../components/TextField";
import Checkbox from "../components/Checkbox";

const Center = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const Home: NextPage = () => {
  const [text, setText] = useState("");
  const [checked, setChecked] = useState(false);
  return (
    <Center style={{ width: 400 }}>
      <Card>
        {/* <Button style={{ width: 200 }} /> */}
        {/* <TextField
          error={true}
          errorMessage="This field is required"
          value={text}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setText(event.target.value)
          }
        /> */}
        <Checkbox
          label="cool"
          checked={checked}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setChecked(event.target.checked)
          }
        />
      </Card>
    </Center>
  );
};

export default Home;
