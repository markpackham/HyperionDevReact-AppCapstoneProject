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

      <h3>Company History</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        ut earum consequatur similique totam, molestiae nemo pariatur, qui ea
        aperiam alias, unde vel magni ipsa quibusdam minima. Saepe, vero
        incidunt?
      </p>
      <div className="storeImageContainer">
        <img
          id="kitchenUtensils2"
          src="/images/kitchen_utensils/kitchenUtensils6.jpg"
          alt="kitchen utensils"
          title="React Store Capstone Kitchen Utensils"
        />
      </div>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
        fugiat delectus ipsam pariatur, incidunt, explicabo alias et laboriosam,
        itaque expedita numquam obcaecati qui veritatis ipsa illo consequatur!
        Explicabo, necessitatibus a.
      </p>

      <h6 className="text-center">Terms of Service</h6>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla odit
        ducimus, quidem culpa itaque accusantium at assumenda ut id veritatis in
        ratione labore illum laborum exercitationem corporis! Ut, nihil dicta.
      </p>
      <h6 className="text-center">Privacy Policy</h6>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla odit
        ducimus, quidem culpa itaque accusantium at assumenda ut id veritatis in
        ratione labore illum laborum exercitationem corporis! Ut, nihil dicta.
      </p>
    </div>
  );
};

export default Home;
