import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <div>
        <h1>404 Page Not Found</h1>
        <ul>
          <li>
            <Link to="/">Go to the website</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
export default NotFound;
