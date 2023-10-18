import { useSelector } from "react-redux";

const Cart = () => {
  // Grab products from store
  const productCart = useSelector((state) => state.productCart);
  console.log(productCart);

  return (
    <>
      <h1>Products In Cart</h1>
      <ul className="list-group">
        {productCart.map((product) => (
          <li key={product.id}>{product.name}</li>
        )) || <h3>Loading ...</h3>}
      </ul>
    </>
  );
};

export default Cart;
