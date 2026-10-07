import { Link } from "react-router";

function NotFound() {
  return (
    <div>
      <h1>404</h1>
      <p>Halaman tidak ditemukan.</p>

      <Link to="/">Get out of here and go ke Home</Link>
    </div>
  );
}

export default NotFound;