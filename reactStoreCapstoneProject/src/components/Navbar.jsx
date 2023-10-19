import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// Sitewide Navbar lives in Header and Footer
export default function Navbar() {
  const userName = useSelector((state) => state.userName.userName);

  return (
    <nav className="navbar navbar-expand-lg mb-3 rounded">
      <div className="container">
        <ul className="navbar-nav">
          <li className=" nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className=" nav-item">
            <Link className="nav-link" to="/products">
              Products
            </Link>
          </li>
          <li className=" nav-item">
            <Link className="nav-link" to="/cart">
              Cart
            </Link>
          </li>
          {/* Hide unless user is logged out */}
          {userName === "Logged out" && (
            <>
              <li className=" nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className=" nav-item">
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
