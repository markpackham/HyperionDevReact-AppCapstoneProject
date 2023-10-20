import PropTypes from "prop-types";

// Buttons that purchase the cart items & add shipping cost
const ShippingOptions = ({ handleShippingClick }) => {
  return (
    <>
      <h4 className="mt-1">
        Shipping Options - Click one to make your purchase
      </h4>
      <button
        onClick={() => handleShippingClick(1)}
        className="btn btn-secondary"
      >
        Economy £1
      </button>
      <button
        onClick={() => handleShippingClick(5)}
        className="btn btn-primary"
      >
        Business £5
      </button>
      <button
        onClick={() => handleShippingClick(10)}
        className="btn btn-warning"
      >
        Premium £10
      </button>
    </>
  );
};

ShippingOptions.propTypes = {
  handleShippingClick: PropTypes.func.isRequired,
};

export default ShippingOptions;