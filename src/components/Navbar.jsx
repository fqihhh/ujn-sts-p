import { NavLink } from "react-router";

function Navbar() {
  return (
    <nav>
      <h1>STS React</h1>

      <NavLink to="/">Home</NavLink> |{" "}
      <NavLink to="/about">About</NavLink> |{" "}
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  );
}

export default Navbar;