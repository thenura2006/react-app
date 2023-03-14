import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Nav, { data } from "./Nav.jsx";

function App() {
  return <Nav name={data.name} />;
}

export default App;
