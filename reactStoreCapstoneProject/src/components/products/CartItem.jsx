import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { deleteProduct } from "../../store/productCartSlice";
import "../../styles/products.css";

// CartItem gets fed into Cart page
const CartItem = ({ description, id, img, name, price }) => {
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    // Pass in id as payload so correct product is deleted
    dispatch(deleteProduct({ id: id }));
  };

  return (
    <>
      <li className="list-group-item">
        <div className="d-flex justify-content-between">
          <span className="m-1">£{price}</span>
          <span className="m-1 fw-bold">{name}</span>
          <span className="m-1">{description}</span>
          <img className="product-img" src={img} alt={name} />
          <button onClick={handleDeleteClick} className="btn btn-danger">
            Delete
          </button>
        </div>
      </li>
    </>
  );
};

CartItem.propTypes = {
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default CartItem;
