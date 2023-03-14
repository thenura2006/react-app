import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Nav from "./assets/nav";

function App() {
  const [count, setCount] = useState(0);
  if (count < 0) {
    setCount(count + 1);
  }
  return <Nav name={nav.auther} />;
}

export default App;
