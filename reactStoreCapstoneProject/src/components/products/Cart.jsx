import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
  // Grab products from store
  const productCart = useSelector((state) => state.productCart);
  console.log(productCart);

  return (
    <>
      <h1>Products In Cart</h1>
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
    </>
  );
};

export default Cart;
