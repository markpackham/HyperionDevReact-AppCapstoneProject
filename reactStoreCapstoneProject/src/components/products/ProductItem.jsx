import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { deleteProduct } from "../../store/productSlice";
import "../../styles/products.css";

const ProductItem = ({ description, id, img, name, price }) => {
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    // Pass in id as payload so correct product is deleted
    dispatch(deleteProduct({ id: id }));
  };

  return (
    <>
      <li className="list-group-item">
        <div className="d-flex justify-content-between">
          <span>£{price}</span>
          <span>{name}</span>
          <span>{description}</span>
          <img className="product-img" src={img} alt={name} />
          <button onClick={handleDeleteClick} className="btn btn-danger">
            Delete
          </button>
        </div>
      </li>
    </>
  );
};

ProductItem.propTypes = {
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductItem;
