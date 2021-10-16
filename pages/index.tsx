import type { NextPage } from "next";
import React, { useState } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import TextField from "../components/TextField";

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
  return (
    <Center style={{ width: 200 }}>
      {/* <Button style={{ width: 200 }} /> */}
      <TextField
        error={true}
        errorMessage="This field is required"
        value={text}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setText(event.target.value)
        }
      />
    </Center>
  );
};

export default Home;
