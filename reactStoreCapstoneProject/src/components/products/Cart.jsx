import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
import CartItem from "./CartItem";
import ShippingHelpInfo from "./ShippingHelpInfo";
import { emptyCart } from "../../store/productCartSlice";
import CartTotal from "./CartTotal";

// Cart page
const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Grab products from store
  const productCart = useSelector((state) => state.productCart);

  // Show total price in cart
  let totalPrice = productCart.reduce((acc, item) => acc + item.price, 0);

  // Wipe out entire cart
  const handleEmptyCartClick = () => {
    dispatch(emptyCart());
    Swal.fire({
      title: `Cart emptied out!`,
      icon: "info",
    });
    navigate("/products");
  };

  // Shipping Purchase Options
  const [shippingAddress, setShippingAddress] = useState("");

  // Shipping choice is based on price
  const handleShippingClick = (price) => {
    totalPrice += price;
    // Check an address has actually been entered in the input field
    if (shippingAddress.length > 5) {
      // Sweetalert2 learned from
      // How to use sweetalert2 in a react application | react and Sweet Alert (2023) YouTube.
      // Available at: https://www.youtube.com/watch?v=6sFSj6QQqL8 (Accessed: 19 October 2023).
      Swal.fire({
        title: `Total cost £${totalPrice}`,
        text: `Items shipped to ${shippingAddress}`,
        icon: "success",
      });
      dispatch(emptyCart());
      navigate("/products");
    } else {
      Swal.fire({
        text: `Please enter a shipping address`,
        icon: "warning",
      });
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
          )}

          <h5 className="mt-1">
            Please enter the shipping receiver name, building number, street,
            town and postcode.
          </h5>
          {/* Avoid using Formik & Yup for validation, gets too messy when dealing with state & using a form*/}
          <input
            id="shippingAddress"
            name="shippingAddress"
            type="text"
            placeholder="Enter your shipping address"
            onChange={(e) => setShippingAddress(e.target.value)}
            className="form-control m-2"
          />
        </>
      )}
    </>
  );
};

export default Cart;
