import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { ABButton, ABCButton } from "./button";

function App() {
  const [count, setCount] = useState(0);
  const [arr, setArr] = useState([
    {
      id: 1,
      title: "ABC",
    },
    {
      id: 2,
      title: "XYZ",
    },
    {
      id: 3,
      title: "AB12",
    },
  ]);
  const [text, setText] = useState("");
  const [textArr, setTextArr] = useState([]);
  const [xyz, setXyz] = useState(true);

  let addTodo = () => {
    setTextArr([...textArr, text]);
    setText("");
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* <input
          value={text}
          type="text"
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter Text"
          name=""
          id=""
        />
        <button onClick={addTodo}>add</button>
        {textArr.map((e, i) => {
          return (
            <p className="abc" key={i}>
              {e} <button>Edit</button>
            </p>
          );
        })}
        <div
          style={{ width: "200px", height: "200px", backgroundColor: "blue" }}
        ></div> */}

        <ABButton btnValue="ABC" customClass="btn" />
        <ABButton btnValue="XYZ" />

        {xyz ? (
          <div>
            <h1>XYZ</h1>
          </div>
        ) : null}
      </header>
    </div>
  );
}

export default App;
