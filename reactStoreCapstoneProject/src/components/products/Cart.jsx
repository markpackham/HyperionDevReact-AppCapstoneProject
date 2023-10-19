import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import ShippingHelpInfo from "./ShippingHelpInfo";
import { emptyCart } from "../../store/productCartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  // Grab products from store
  const productCart = useSelector((state) => state.productCart);

  // Show total price in cart
  const totalPrice = productCart.reduce((acc, item) => acc + item.price, 0);

  const handleEmptyCartClick = () => {
    // Pass in id as payload so correct product is deleted
    dispatch(emptyCart());
  };

  return (
    <>
      <h1>Products In Cart</h1>
      <ShippingHelpInfo />
      {productCart.length > 0 && (
        <h4>
          Number of Items in cart {productCart.length} costing £{totalPrice}
        </h4>
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
      <button onClick={handleEmptyCartClick} className="btn btn-danger">
        Empty Cart
      </button>
      <h3 className="mt-2">Shipping Options</h3>
      <button className="btn btn-secondary">Economy £1</button>
      <button className="btn btn-primary">Business £5</button>
      <button className="btn btn-warning">Premium £10</button>
    </>
  );
};

export default Cart;
