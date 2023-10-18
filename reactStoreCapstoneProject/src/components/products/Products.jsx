import { useSelector } from "react-redux";
import ShippingHelpInfo from "./ShippingHelpInfo";
import ProductItem from "./ProductItem";

const Products = () => {
  // Grab products from store
  const products = useSelector((state) => state.products);

  return (
    <div>
      <h1>Products</h1>
      <ShippingHelpInfo />
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
