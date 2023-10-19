import { useDispatch, useSelector } from "react-redux";
import { setUserName } from "../../store/userSlice";
import Navbar from "../Navbar";

const Header = () => {
  // Grab user from store
  const userName = useSelector((state) => state.userName.userName);

  const dispatch = useDispatch();

  // Log user out
  const handleLogout = () => {
    dispatch(setUserName("Logged out"));
  };

  return (
    <header className="mt-2">
      <h1>
        React Store Capstone{" "}
        <span>
          <img src="/images/storeLogo.png" alt="logo" id="storeLogo" />
        </span>
      </h1>
      <h5>
        User: {userName} {/* Hide logout button unless logged in */}
        {userName !== "Logged out" && (
          <button onClick={handleLogout} className="btn btn-secondary">
            Logout
          </button>
        )}
      </h5>
      <Navbar />
    </header>
  );
};

export default Header;
