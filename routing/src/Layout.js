import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <h1>This is layout page</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home1</Link>
          </li>
          <li>
            <Link to="/home2">Home2</Link>
          </li>
          <li>
            <Link to="/home3">Home3</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
