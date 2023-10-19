import { useSelector } from "react-redux";
import "../styles/home.css";

const Home = () => {
  // Grab user from store
  const userName = useSelector((state) => state.userName.userName);

  return (
    <div>
      <h1>Welcome to the React Store Capstone</h1>
      <hr />
      <h2>Home to some of the best kitchen utensils you will ever find!</h2>
      <div className="storeImageContainer">
        <img id="storeImage" src="/images/store.jpg" alt="store image" />
      </div>
      {userName === "Logged out" && (
        <h5 className="m-2">
          Please make sure you are logged in or registered to buy products.
        </h5>
      )}
    </div>
  );
};

export default Home;
