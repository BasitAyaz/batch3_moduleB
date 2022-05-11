import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Button, Input } from "./button";
import Card from "./card";

function App() {
  const [arr, setArray] = useState([
    {
      id: 1,
      titile: "ABC12",
      price: 250,
    },
    {
      id: 2,
      titile: "ABC12",
      price: 250,
    },
    {
      id: 3,
      titile: "ABC12",
      price: 250,
    },
    {
      id: 4,
      titile: "ABC12",
      price: 250,
    },
    {
      id: 5,
      titile: "ABC12",
      price: 250,
    },
    {
      id: 6,
      titile: "ABC12",
      price: 250,
    },
  ]);
  let addToCart = () => {
    console.log("Add To Cart");
  };
  return (
    <div className="App">
      <header className="App-header">
        {arr.map((e) => (
          <Card title={e.titile} price={e.price} action={addToCart} />
        ))}
      </header>
    </div>
  );
}

export default App;
