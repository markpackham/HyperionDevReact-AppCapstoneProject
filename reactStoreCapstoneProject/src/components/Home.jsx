import "../styles/home.css";

const Home = () => {
  return (
    <div>
      <h1>Welcome to the React Store Capstone</h1>
      <h2>Home to some of the best kitchen utensils you will ever find!</h2>
      <div className="storeImageContainer">
        <img id="storeImage" src="/images/store.jpg" alt="store image" />
      </div>
    </div>
  );
};

export default Home;
