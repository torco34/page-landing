import React from "react";
import { ImgFondo } from "../components/ImgFondo";
import { Carousele } from "../components/Carousele";
import { ContaineCaruosel } from "../assets/styled/Home";

import { App } from "../assets/styled/App";
const Home = () => {
  return (
    <App>
      <ImgFondo />

      <ContaineCaruosel>
        <Carousele />
      </ContaineCaruosel>
    </App>
  );
};
export { Home };
