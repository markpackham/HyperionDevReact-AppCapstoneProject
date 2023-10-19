import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import ShippingHelpInfo from "./ShippingHelpInfo";
import { emptyCart } from "../../store/productCartSlice";
import CartTotal from "./CartTotal";

// Cart page
const Cart = () => {
  const dispatch = useDispatch();

  // Grab products from store
  const productCart = useSelector((state) => state.productCart);

  // Show total price in cart
  let totalPrice = productCart.reduce((acc, item) => acc + item.price, 0);

  // Wipe out entire cart
  const handleEmptyCartClick = () => {
    dispatch(emptyCart());
  };

  // Shipping Purchase Options
  const [shippingAddress, setShippingAddress] = useState("");

  const handleEconomyClick = () => {
    totalPrice++;
    if (shippingAddress.length > 5) {
      alert(
        `Total cost £${totalPrice} and items shipped to ${shippingAddress}`
      );
      dispatch(emptyCart());
    } else {
      alert("Please enter a shipping address");
    }
  };

  const handleBusinessClick = () => {
    totalPrice += 5;
    if (shippingAddress.length > 5) {
      alert(
        `Total cost £${totalPrice} and items shipped to ${shippingAddress}`
      );
      dispatch(emptyCart());
    } else {
      alert("Please enter a shipping address");
    }
  };

  const handlePremiumClick = () => {
    totalPrice += 10;
    if (shippingAddress.length > 5) {
      alert(
        `Total cost £${totalPrice} and items shipped to ${shippingAddress}`
      );
      dispatch(emptyCart());
    } else {
      alert("Please enter a shipping address");
    }
  };

  return (
    <>
      <h1>Products in Cart</h1>
      <hr />

      <ShippingHelpInfo />
      <CartTotal />
      <ul className="list-group">
        {productCart.map((product) => (
          <CartItem
            description={product.description}
            id={product.id}
            img={product.img}
            key={product.id}
            name={product.name}
            price={product.price}
          />
        )) || <h3>Loading ...</h3>}
      </ul>

      {/* Hide if no items in cart */}
      {productCart.length > 0 && (
        <>
          <button onClick={handleEmptyCartClick} className="btn btn-danger">
            Empty Cart
          </button>

          {/* Do not show buttons until an address has been entered */}
          {shippingAddress.length > 5 && (
            <>
              <h4 className="mt-1">
                Shipping Options - Click one to make your purchase
              </h4>
              <button
                onClick={handleEconomyClick}
                className="btn btn-secondary"
              >
                Economy £1
              </button>
              <button onClick={handleBusinessClick} className="btn btn-primary">
                Business £5
              </button>
              <button onClick={handlePremiumClick} className="btn btn-warning">
                Premium £10
              </button>
            </>
          )}

          <h5 className="mt-1">
            Please enter the shipping receiver name, building number, street,
            town and postcode.
          </h5>
          <input
            id="shippingAddress"
            name="shippingAddress"
            type="text"
            placeholder="Enter your shipping address"
            className="form-control m-2"
            onChange={(e) => setShippingAddress(e.target.value)}
          />
        </>
      )}
    </>
  );
};

export default Cart;
