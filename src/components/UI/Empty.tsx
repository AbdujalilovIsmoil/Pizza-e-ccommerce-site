import { AiOutlineShoppingCart } from "assets/react-icons";

const Empty = () => {
  return (
    <>
      <div className="cart-modal-empty">
        <div className="cart-modal-empty__background">
          <AiOutlineShoppingCart className="cart-modal-empty__background-icon" />
        </div>
        <h4 className="cart-modal-empty__heading">Your cart is empty</h4>
      </div>
    </>
  );
};

export default Empty;
