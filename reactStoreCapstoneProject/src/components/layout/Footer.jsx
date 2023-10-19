import Navbar from "../Navbar";
import CartTotal from "../products/CartTotal";

const Footer = () => {
  const currentYear = new Date(Date.now());

  return (
    <>
      <div className="sticky-bottom mt-2">
        <CartTotal />
        <Navbar />
      </div>
      <footer className="m-2">
        <p className="fst-italic">
          Copyright Mark Packham {currentYear.getFullYear()}
        </p>
      </footer>
    </>
  );
};

export default Footer;
