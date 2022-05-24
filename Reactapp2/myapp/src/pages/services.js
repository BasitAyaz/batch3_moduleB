import { Link } from "react-router-dom";

function Services() {
  return (
    <>
      <div>
        <h1>Services</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Services;
