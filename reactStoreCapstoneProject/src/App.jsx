import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import RegisterPage from "./components/users/RegisterPage";

function App() {
  return (
    <div className="container">
      <Header />
      <RegisterPage />
      <Footer />
    </div>
  );
}

export default App;
