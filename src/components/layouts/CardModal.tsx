import { useTokenGet } from "hook";
import { Button } from "components/fields";
import { useNavigate } from "react-router-dom";
import { CardModal, Empty } from "components/UI";
import { FilterModalIcon1 } from "assets/images/svg/filter";
import Error from "pages/Error";
import { Loader } from ".";

type CardModalType = {
  isCartModalOpen: boolean;
  setIsCartModalOpen: (e: boolean) => void;
};

const CardModalComponent = ({
  isCartModalOpen,
  setIsCartModalOpen,
}: CardModalType) => {
  const id: string[] = [];
  const price: number[] = [];
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

  const { data, isLoading, isError } = useTokenGet({
    queryKey: "cart",
    path: "/user/cart",
  });

  console.log(isError);

  const reduced = () => {
    data?.length > 0 &&
      data?.map((el: any) => {
        return (
          el?.items.length > 0 &&
          el?.items.map((el: any) => {
            price.push(el.price);
          })
        );
      });
    return price;
  };

  const calcPrice = () => {
    return reduced().reduce((prev, curr) => prev + curr, 0);
  };

  if (isCartModalOpen) {
    document.body.classList.add("hidden");
  } else {
    document.body.classList.remove("hidden");
  }

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
              {isLoading ? (
                <Loader />
              ) : (
                <ul className="cart-list">
                  {data?.length > 0 &&
                    data?.map((el: any) => {
                      id.push(el._id);
                      return (
                        el?.items?.length > 0 &&
                        el?.items?.map((el: any) => {
                          return (
                            <CardModal
                              cartId={id}
                              id={el._id}
                              key={el._id}
                              price={el.price}
                              quantity={el?.quantity}
                              name={el?.productId?.name}
                              img={el?.productId?.images?.home}
                              description={el?.productId?.description}
                            />
                          );
                        })
                      );
                    })}
                </ul>
              )}
              {data?.length > 0 &&
                data?.map((el: any) => {
                  return (
                    el?.items.length === 0 && (
                      <Empty content="Your cart is empty" />
                    )
                  );
                })}
            </div>
          </div>

          <div className="cart-modal__footer">
            <h4 className="cart-modal__footer-heading">
              Итого: {calcPrice()} ₽
            </h4>
            <Button
              type="button"
              className="cart-modal__footer-btn"
              onClick={() => openBasketPage()}
            >
              Перейти к товару
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CardModalComponent;
