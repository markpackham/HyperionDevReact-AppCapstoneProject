const Footer = () => {
  const currentYear = new Date(Date.now());

  return (
    <footer className="font-italic m-2">
      Copyright Mark Packham {currentYear.getFullYear()}
    </footer>
  );
};

export default Footer;
