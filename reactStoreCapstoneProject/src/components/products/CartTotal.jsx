import { useSelector } from "react-redux";

const CartTotal = () => {
  // Grab products from store
  const productCart = useSelector((state) => state.productCart);

  // Show total price in cart
  const totalPrice = productCart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cartTotal">
      {productCart.length > 0 && (
        <h4>
          Number of Items in cart: {productCart.length} costing £{totalPrice}
        </h4>
      )}
    </div>
  );
};

export default CartTotal;
