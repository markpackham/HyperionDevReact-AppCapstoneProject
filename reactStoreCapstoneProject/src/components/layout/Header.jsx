import { useSelector } from "react-redux";
import Navbar from "../Navbar";

const Header = () => {
  // Grab user from store
  const userName = useSelector((state) => state.userName.userName);

  return (
    <header>
      <h1>React Store Capstone</h1>
      <h4>User: {userName}</h4>
      <Navbar />
    </header>
  );
};

export default Header;
