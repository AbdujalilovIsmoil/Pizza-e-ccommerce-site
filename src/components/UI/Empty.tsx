import { AiOutlineShoppingCart } from "assets/react-icons";

const Empty = ({ content }: any) => {
  return (
    <>
      <div className="cards-error">
        <div className="cart-modal-empty">
          <div className="cart-modal-empty__background">
            <AiOutlineShoppingCart className="cart-modal-empty__background-icon" />
          </div>
          <h4 className="cart-modal-empty__heading">{content}</h4>
        </div>
      </div>
    </>
  );
};

export default Empty;
