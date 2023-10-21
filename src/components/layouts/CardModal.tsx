import { useTokenGet } from "hook";
import { Cart1 } from "assets/images/png";
import { Button } from "components/fields";
import { useNavigate } from "react-router-dom";
import { CardModal, Empty } from "components/UI";
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
};

const CardModalComponent = ({
  isCartModalOpen,
  setIsCartModalOpen,
}: CardModalType) => {
  const navigate = useNavigate();

  const closeCartModal = (e: any) => {
    if (e.target?.getAttribute("class") === "cart-modal cart-modal--open") {
      setIsCartModalOpen(false);
    } else return false;
  };

  const openBasketPage = () => {
    navigate("/pages/basket");
    setIsCartModalOpen(false);
  };

  const cartModalData: cartModalDataType[] = [
    {
      id: 1,
      img: Cart1,
      size: "Традиционное тесто, 23 см asdhasjdsajdsabdasbd asdadad",
      soum: "499 ₽",
      title: "Чикен Сладкий Чили",
    },
  ];

  const { data } = useTokenGet({
    queryKey: "cart",
    path: "/user/cart",
  });

  console.log(data);

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
                {data?.length > 0 &&
                  data.map((el: any) => {
                    return (
                      el?.items?.length > 0 &&
                      el.items.map((el: any) => {
                        return (
                          <CardModal
                            key={el._id}
                            price={el.price}
                            name={el?.productId.name}
                            img={el?.productId.images.home}
                            description={el?.productId.description}
                          />
                        );
                      })
                    );
                  })}
              </ul>
            </div>
          </div>
          {cartModalData.length === 0 && <Empty />}
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

export default CardModalComponent;
