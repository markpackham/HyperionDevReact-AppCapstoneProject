import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import CartTotal from "./CartTotal";

const Products = () => {
  // Grab products from store
  const products = useSelector((state) => state.products);

  // Grab products from store
  const productCart = useSelector((state) => state.productCart);

  // Show total price in cart
  const totalPrice = productCart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <h1>Products</h1>
      <CartTotal />
      <ul className="list-group">
        {products.map((product) => (
          <ProductItem
            description={product.description}
            id={product.id}
            img={product.img}
            key={product.id}
            name={product.name}
            price={product.price}
          />
        )) || <h3>Loading ...</h3>}
      </ul>
    </div>
  );
};

export default Products;
