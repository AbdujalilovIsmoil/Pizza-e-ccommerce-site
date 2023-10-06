import { Cart1 } from "assets/images/png";
import { Button } from "components/fields";
import { Counter1, Counter2 } from "assets/images/svg";
import { FilterModalIcon1 } from "assets/images/svg/filter";

const index = ({
  isCartModalOpen,
  setIsCartModalOpen,
}: {
  isCartModalOpen: boolean;
  setIsCartModalOpen: (e: boolean) => void;
}) => {
  const closeCartModal = (e: any) => {
    if (e.target?.getAttribute("class") === "cart-modal cart-modal--open") {
      setIsCartModalOpen(false);
    }
  };

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
                <li className="cart-item">
                  <div className="cart-item__box">
                    <img
                      src={Cart1}
                      alt="cart1"
                      title="cart1"
                      className="cart-item__box-img"
                    />
                  </div>
                  <div className="cart-item__box">
                    <h4 className="cart-item__box-title">Чикен Сладкий Чили</h4>
                    <h4 className="cart-item__box-size">
                      Традиционное тесто, 23 см
                    </h4>
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
                      <h4 className="cart-item__footer-soum">499 ₽</h4>
                    </div>
                  </div>
                </li>
                <li className="cart-item">
                  <div className="cart-item__box">
                    <img
                      src={Cart1}
                      alt="cart1"
                      title="cart1"
                      className="cart-item__box-img"
                    />
                  </div>
                  <div className="cart-item__box">
                    <h4 className="cart-item__box-title">Чикен Сладкий Чили</h4>
                    <h4 className="cart-item__box-size">
                      Традиционное тесто, 23 см
                    </h4>
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
                      <h4 className="cart-item__footer-soum">499 ₽</h4>
                    </div>
                  </div>
                </li>
                <li className="cart-item">
                  <div className="cart-item__box">
                    <img
                      src={Cart1}
                      alt="cart1"
                      title="cart1"
                      className="cart-item__box-img"
                    />
                  </div>
                  <div className="cart-item__box">
                    <h4 className="cart-item__box-title">Чикен Сладкий Чили</h4>
                    <h4 className="cart-item__box-size">
                      Традиционное тесто, 23 см
                    </h4>
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
                      <h4 className="cart-item__footer-soum">499 ₽</h4>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="cart-modal__footer">
            <h4 className="cart-modal__footer-heading">Итого: 2 379 ₽</h4>
            <Button type="button" className="cart-modal__footer-btn">
              Оформить заказ
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
