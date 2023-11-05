import { Loader } from ".";
import { get } from "lodash";
import { api } from "services";
import { usePost } from "hook";
import Error from "pages/Error";
import { useEffect, useState } from "react";
import { Button, Input } from "components/fields";
import { useDispatch, useSelector } from "react-redux";
import { toggleProductModal, smallProductModal } from "store/productData";
import {
  ProductModalIcon1,
  ProductModalIcon2,
  ProductModalIcon3,
} from "assets/images/svg";

const ProductModal = () => {
  const dispatch = useDispatch();
  const [isError, setIsError] = useState(false);
  const [score, setScore] = useState<string>("20");
  const [isLoading, setIsLoading] = useState(false);
  const [productModalData, setProductModalData] = useState<any[]>([]);
  const { isProductModal, modalId }: any = useSelector((state) =>
    get(state, "productData")
  );

  useEffect(() => {
    setIsError(false);
    setIsLoading(true);
    api
      .get(`/product/${modalId}`)
      .then((res) => {
        setIsError(false);
        setIsLoading(false);
        setProductModalData([get(res, "data.viewProduct", {})]);
      })
      .catch(() => setIsError(true))
      .finally(() => {
        setIsLoading(false);
      });
  }, [modalId]);

  const { mutate } = usePost({
    queryKey: "cart",
    path: "/user/cart",
    onSuccess: (data) => {
      console.log(data.message);
      dispatch(toggleProductModal());
      dispatch(smallProductModal(true));

      setTimeout(() => {
        dispatch(smallProductModal(false));
        location.reload();
      }, 3000);
    },
    onError: (error) => error,
  });

  return (
    <section
      className={`product-modal ${isProductModal && "product-modal--open"}`}
    >
      <div className="container">
        <div className="product-modal__container">
          <img
            src={ProductModalIcon1}
            alt="product-modal-close"
            onClick={() => dispatch(toggleProductModal())}
            className="product-modal__container-times"
          />
          <div className="product-modal__background">
            {isError ? (
              <Error />
            ) : isLoading ? (
              <Loader />
            ) : (
              productModalData?.length > 0 &&
              productModalData?.map((el: any) => {
                console.log(el);
                return (
                  <ul className="product-modal__list" key={el._id}>
                    <li className="product-modal__item">
                      <img
                        alt="card"
                        title="product-img"
                        src={get(el, "images.home", "")}
                        className="product-modal__item-img"
                      />
                    </li>
                    <li className="product-modal__item">
                      <div className="product-modal__wrapper">
                        <div className="item-header">
                          <div className="item-header__box">
                            <img
                              alt="product-icon"
                              src={ProductModalIcon2}
                              className="item-header__box-icon"
                            />
                            <h4 className="item-header__box-heading">
                              Пепперони по-деревенски
                            </h4>
                          </div>
                          <div className="item-header__box">
                            <img
                              alt="product-warning"
                              src={ProductModalIcon3}
                              className="item-header__box-warning"
                            />
                          </div>
                        </div>
                        <div className="product-modal__content">
                          <h4 className="product-modal__content-name">
                            {el.name}
                          </h4>
                          <h4 className="product-modal__content-description">
                            {el.description}
                          </h4>
                        </div>
                      </div>
                      <div className="product-modal__boxes">
                        {el.tags === "Пицца" && (
                          <ul className="item-buttons">
                            <li className="item-buttons__box">
                              <Input
                                value="20"
                                type="radio"
                                id="button1"
                                name="button-radio"
                                checked={score === "20"}
                                className="item-buttons__box-input"
                                onChange={(e) => setScore(e.target.value)}
                              />
                              <label
                                htmlFor="button1"
                                className="item-buttons__box-btn"
                              >
                                20 см
                              </label>
                            </li>
                            <li className="item-buttons__box">
                              <Input
                                value="28"
                                type="radio"
                                id="button2"
                                name="button-radio"
                                checked={score === "28"}
                                className="item-buttons__box-input"
                                onChange={(e) => setScore(e.target.value)}
                              />
                              <label
                                htmlFor="button2"
                                className="item-buttons__box-btn"
                              >
                                28 см
                              </label>
                            </li>
                            <li className="item-buttons__box">
                              <Input
                                value="33"
                                type="radio"
                                id="button3"
                                name="button-radio"
                                checked={score === "33"}
                                className="item-buttons__box-input"
                                onChange={(e) => setScore(e.target.value)}
                              />
                              <label
                                htmlFor="button3"
                                className="item-buttons__box-btn"
                              >
                                33 см
                              </label>
                            </li>
                          </ul>
                        )}
                        <ul className="product-modal-bottom">
                          <li className="product-modal-bottom__box">
                            <h4 className="product-modal-bottom__box-heading">
                              Итого: {el.price} ₽
                            </h4>
                          </li>
                          <li className="product-modal-bottom__box">
                            <Button
                              type="button"
                              onClick={() =>
                                mutate({
                                  productId: el._id,
                                  price: el.price,
                                  quantity: 1,
                                })
                              }
                              className="product-modal-bottom__box-btn"
                            >
                              Добавить
                            </Button>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                );
              })
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductModal;
