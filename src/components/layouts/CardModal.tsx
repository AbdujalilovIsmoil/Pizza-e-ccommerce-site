import { CardModal } from "components/UI";
import { Cart1 } from "assets/images/png";
import { Button } from "components/fields";
import { useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from "assets/react-icons";
import { FilterModalIcon1 } from "assets/images/svg/filter";

type CardModalType = {
  isCartModalOpen: boolean;
  setIsCartModalOpen: (e: boolean) => void;
};

type cartModalDataType = {
  id: number;
  img: string;
  soum: string;
  size: string;
  title: string;
}[];

const index = ({ isCartModalOpen, setIsCartModalOpen }: CardModalType) => {
  const navigate = useNavigate();

  const closeCartModal = (e: any) => {
    if (e.target?.getAttribute("class") === "cart-modal cart-modal--open") {
      setIsCartModalOpen(false);
    }
  };

  const openBasketPage = () => {
    navigate("/pages/basket");
    setIsCartModalOpen(false);
  };

  const cartModalData: cartModalDataType = [
    {
      id: 1,
      img: Cart1,
      size: "Традиционное тесто, 23 см asdhasjdsajdsabdasbd asdadad",
      soum: "499 ₽",
      title: "Чикен Сладкий Чили",
    },
  ];

  return (
    <>
      <section
        onClick={(e) => closeCartModal(e)}
        className={`cart-modal ${isCartModalOpen && "cart-modal--open"}`}
      >
        <div className="cart-modal__background">
          <div className="cart-modal__border">
            <div className="cart-modal__header">
              <div className="cart-modal__box">
                <h4 className="cart-modal__box-heading">Ваш заказ</h4>
              </div>
              <div
                className="cart-modal__box"
                onClick={() => setIsCartModalOpen(false)}
              >
                <img
                  src={FilterModalIcon1}
                  alt="cart-modal-icon"
                  className="cart-modal__box-icon"
                />
              </div>
            </div>
            <div className="cart-modal__body">
              <ul className="cart-list">
                {cartModalData.length > 0 &&
                  cartModalData.map((el) => {
                    return (
                      <CardModal
                        img={Cart1}
                        title="Чикен Сладкий Чили adsadad sd"
                        size="Традиционное тесто, 23 см adasdsada asdkasndk ajsdbas"
                        soum="499 ₽"
                      />
                    );
                  })}
              </ul>
            </div>
          </div>
          {cartModalData.length === 0 && (
            <div className="cart-modal-empty">
              <div className="cart-modal-empty__background">
                <AiOutlineShoppingCart className="cart-modal-empty__background-icon" />
              </div>
              <h4 className="cart-modal-empty__heading">Your cart is empty</h4>
            </div>
          )}
          <div className="cart-modal__footer">
            <h4 className="cart-modal__footer-heading">Итого: 2 379 ₽</h4>
            <Button
              type="button"
              className="cart-modal__footer-btn"
              onClick={() => openBasketPage()}
            >
              Оформить заказ
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
