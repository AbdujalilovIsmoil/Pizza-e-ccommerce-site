import { useDelete } from "hook";
import { Cart2 } from "assets/images/png";
import { useQueryClient } from "@tanstack/react-query";

const CardModal = ({ img, name, price, description, id, cartId }: any) => {
  const client = useQueryClient();
  const { mutate } = useDelete({
    queryKey: "cart",
    path: `/user/${cartId.join("")}`,
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  return (
    <li className="cart-item">
      <div className="cart-item__container">
        <div className="cart-item__box">
          <img
            src={img}
            alt="cart1"
            title="cart1"
            className="cart-item__box-img"
          />
        </div>
        <div className="cart-item__box">
          <div className="cart-item__content">
            <h4 className="cart-item__box-title">{name}</h4>
            <h5 className="cart-item__box-desc">{description}</h5>
          </div>
        </div>
      </div>
      <div className="cart-item__footer">
        <h4 className="cart-item__footer-soum">Price: {price} ₽</h4>
        <img
          src={Cart2}
          alt="delete"
          onClick={() => mutate(id)}
          className="cart-item__footer-delete"
        />
      </div>
    </li>
  );
};

export default CardModal;
