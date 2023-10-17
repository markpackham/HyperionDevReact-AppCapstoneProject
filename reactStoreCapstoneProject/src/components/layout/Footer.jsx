const Footer = () => {
  const currentYear = new Date(Date.now());

  return (
    <footer className="m-2">
      <p className="fst-italic">
        Copyright Mark Packham {currentYear.getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
