import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import RegisterPage from "./components/users/RegisterPage";
import Home from "./components/Home";
import LoginPage from "./components/users/LoginPage";
import Products from "./components/Products";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
