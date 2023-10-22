import { useDelete } from "hook";
import { Cart2 } from "assets/images/png";
import { useQueryClient } from "@tanstack/react-query";
import { Counter1, Counter2 } from "assets/images/svg";

const CardModal = ({
  img,
  name,
  price,
  quantity,
  description,
  id,
  cartId,
}: any) => {
  const client = useQueryClient();
  console.log(cartId);
  const { mutate } = useDelete({
    queryKey: "cart",
    path: `/user/${cartId.join("")}`,
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  return (
    <li className="cart-item">
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
        <div className="cart-item__footer">
          <div className="cart-item__counter">
            <img
              alt="counter1"
              src={Counter1}
              className="cart-item__counter-icon"
            />
            <h4 className="cart-item__counter-count">{quantity}</h4>
            <img
              alt="counter2"
              src={Counter2}
              className="cart-item__counter-icon"
            />
          </div>
          <h4 className="cart-item__footer-soum">{price} ₽</h4>
          <img
            src={Cart2}
            alt="delete"
            onClick={() => mutate(id)}
            className="cart-item__footer-delete"
          />
        </div>
      </div>
    </li>
  );
};

export default CardModal;
