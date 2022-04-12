import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [obj, setObj] = useState({});
  const [arr, setArr] = useState(["a", "b", "c", "d", "e"]);

  let add = () => {
    setCount(count + 1);
    console.log(count);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello React</h1>
        <input
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text"
        />
        <p>{text}</p>

        {arr.map((e, i) => {
          return <p>{e}</p>;
          
        })}

        <button onClick={add}>Add</button>
        <p>{count}</p>
      </header>
    </div>
  );
}

export default App;
