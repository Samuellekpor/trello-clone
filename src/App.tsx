import React from "react";
import { Appcontainer } from "./styles";
import { Column } from "./Column";

export function App() {
  return (
    <Appcontainer>
      <Column text="Todo:" />
    </Appcontainer>
  );
}
