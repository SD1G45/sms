import React from "react";
import Spinner from "../Spinner";

import { Loading } from "./styles";
const LoadingDiv = () => {
  return (
    <>
      <Loading>
        <Spinner size={50} sizeUnit="px" color="#9999" />
      </Loading>
    </>
  );
};

export default LoadingDiv;
