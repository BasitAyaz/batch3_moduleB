import { Link } from "react-router-dom";
import {useState} from 'react'

function Home() {
  const [Name, setName] = useState('')
  return (
    <>
      <div>
        <h1>Home</h1>
        <ul>
          <li>
            <Link to="/services">Services</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Home;
