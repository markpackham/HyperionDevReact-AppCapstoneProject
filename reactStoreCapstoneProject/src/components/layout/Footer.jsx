const Footer = () => {
  const currentYear = new Date(Date.now());

  return <footer>Copyright Mark Packham {currentYear.getFullYear()}</footer>;
};

export default Footer;
