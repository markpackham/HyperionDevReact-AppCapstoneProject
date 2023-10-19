import Navbar from "../Navbar";

const Footer = () => {
  const currentYear = new Date(Date.now());

  return (
    <>
      <div className="sticky-bottom mt-2">
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
