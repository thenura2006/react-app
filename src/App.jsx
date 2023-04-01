import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Nav from "./Nav";

function App() {
  const [count, setCount] = useState("hello");
  function handle() {
    setCount("thankyou");
  }

  return (
    <div>
      <button onClick={handle}>{count}</button>
      <Nav />
    </div>
  );
}

export default App;
