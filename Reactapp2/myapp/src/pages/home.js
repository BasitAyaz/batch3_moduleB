import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";

function Home() {
  const hitAPI = () => {
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => response.json())
    //   .then((json) => console.log(json));

    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      console.log(res);
    });
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        name: "ABC",
        title: "123",
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div>
        <h1>Home</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
        </ul>
        <Button onClick={hitAPI}>API</Button>
      </div>
    </>
  );
}
export default Home;
