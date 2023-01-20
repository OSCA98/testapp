import { Outlet, Link } from "react-router-dom";


console.log('Rendering in Layout')
export default function Layout() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};
