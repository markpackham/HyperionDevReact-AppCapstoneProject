import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import ShippingHelpInfo from "./ShippingHelpInfo";
import { emptyCart } from "../../store/productCartSlice";
import { redirect } from "react-router-dom";

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

  // Shipping Purchase
  const handleEconomyClick = () => {
    {
      totalPrice++;
      dispatch(emptyCart());
    }
    return redirect("/");
  };

  const handleBusinessClick = () => {
    totalPrice += 5;
    dispatch(emptyCart());
  };

  const handlePremiumClick = () => {
    totalPrice += 10;
    dispatch(emptyCart());
  };

  return (
    <>
      <h1>Products In Cart</h1>
      <ShippingHelpInfo />
      {productCart.length > 0 ? (
        <h4>
          Number of Items in cart {productCart.length} costing £{totalPrice}
        </h4>
      ) : (
        <h3>There are no items in the cart</h3>
      )}
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

          <h4 className="mt-3">
            Please enter the shipping receiver name, building number, street,
            town and postcode
          </h4>
          <input
            id="shippingAddress"
            name="shippingAddress"
            type="text"
            placeholder="Enter your shipping address"
            className="form-control m-2"
          />
          <h4 className="mt-2">
            Shipping Options - Click one to make your purchase
          </h4>
          <button onClick={handleEconomyClick} className="btn btn-secondary">
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
    </>
  );
};

export default Cart;
