import { Counter1, Counter2 } from "assets/images/svg";

type CardModalType = {
  img: string;
  title: string;
  size: string;
  soum: string;
};

const CardModal = ({ img, title, size, soum }: CardModalType) => {
  return (
    <>
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
            <h4 className="cart-item__box-title">{title}</h4>
            <h4 className="cart-item__box-size">{size}</h4>
          </div>
          <div className="cart-item__footer">
            <div className="cart-item__counter">
              <img
                alt="counter1"
                src={Counter1}
                className="cart-item__counter-icon"
              />
              <h4 className="cart-item__counter-count">1</h4>
              <img
                alt="counter2"
                src={Counter2}
                className="cart-item__counter-icon"
              />
            </div>
            <h4 className="cart-item__footer-soum">{soum}</h4>
          </div>
        </div>
      </li>
    </>
  );
};

export default CardModal;
