import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// Styles
import "../styles/home.css";

const Home = () => {
  const userName = useSelector((state) => state.userName.userName);

  return (
    <div>
      <h1>Welcome to the React Store Capstone</h1>
      <hr />
      <h2>Home to some of the best kitchen utensils you will ever find!</h2>
      {/* Encourage user to login to buy stuff */}
      {userName === "Logged out" && (
        <h5 className="m-2 text-center">
          Please make sure you are either <Link to="/login">logged in</Link> or
          are <Link to="/register">registered</Link> to buy products.
        </h5>
      )}
      <div className="storeImageContainer">
        <img
          id="storeImage"
          src="/images/store.jpg"
          alt="store image"
          title="React Store Capstone"
        />
      </div>
      <div className="storeImageContainer">
        <img
          id="kitchenUtensils"
          src="/images/kitchen_utensils/kitchenUtensils1.jpg"
          alt="kitchen utensils"
          title="React Store Capstone Kitchen Utensils"
        />
      </div>
    </div>
  );
};

export default Home;
