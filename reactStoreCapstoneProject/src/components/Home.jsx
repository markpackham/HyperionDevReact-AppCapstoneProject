import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../styles/home.css";

const Home = () => {
  const userName = useSelector((state) => state.userName.userName);

  return (
    <div>
      <h1>Welcome to the React Store Capstone</h1>
      <hr />
      <h2>Home to some of the best kitchen utensils you will ever find!</h2>
      <div className="storeImageContainer">
        <img id="storeImage" src="/images/store.jpg" alt="store image" />
      </div>
      {/* Encourage user to login to buy stuff */}
      {userName === "Logged out" && (
        <h5 className="m-2">
          Please make sure you are either <Link to="/login">logged in</Link> or
          are <Link to="/register">registered</Link> to buy products.
        </h5>
      )}
    </div>
  );
};

export default Home;
