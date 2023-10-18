import { useSelector } from "react-redux";
import ShippingHelpInfo from "./ShippingHelpInfo";

const Products = () => {
  // Grab products from store
  const products = useSelector((state) => state.products);

  return (
    <div>
      <h1>Products</h1>
      <ShippingHelpInfo />
      <ul className="list-group">
        {products.map((product) => (
          <li key={product.id}>
            {product.id} {product.name}
          </li>
        )) || <h3>Loading ...</h3>}
      </ul>
    </div>
  );
};

export default Products;
