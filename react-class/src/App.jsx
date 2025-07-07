import { useState } from "react";
import "./App.css";
import Component from "./Component";

function App() {
  const [count, setCount] = useState(0);

  function contador() {
    setCount(count + 1);
  }

  return (
    <>
      <Component />
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}> */}
        <button onClick={contador}>count is {count}</button>
      </div>
    </>
  );
}

export default App;
