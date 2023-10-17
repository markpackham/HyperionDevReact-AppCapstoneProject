import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import RegisterPage from "./components/users/RegisterPage";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
