import { forEach, get } from "lodash";
import { api, storage } from "services";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "components/fields";
import { Swiper, SwiperSlide } from "swiper/react";
import { useGet, usePost, useTokenGet } from "hook";
import { Autoplay, Navigation } from "swiper/modules";
import { useQueryClient } from "@tanstack/react-query";
import { setProductId, toggleProductModal } from "store/productData";

const Basket = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [dom, setDom] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [etaj, setEtaj] = useState<string>("");
  const [podezd, setPodezd] = useState<string>("");
  const [mobile, setMobile] = useState<string>("");
  const [street, setStreet] = useState<string>("");
  const [domofon, setDomofon] = useState<string>("");
  const [kvartira, setKvartira] = useState<string>("");
  const [basketData, setBasketData] = useState<any[]>([]);
  const [payment, setPayment] = useState<string>("Картой");

  const { data } = useTokenGet({
    queryKey: "cart",
    path: "/user/cart",
  });

  useEffect(() => {
    if (!storage.get("token")) {
      navigate("/");
    }

    api
      .get(`/user/cart`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${storage.get("token")}`,
        },
      })
      .then((response) => {
        setBasketData([...get(response, "data[0].items", [])]);
      });
  }, []);

  const renderData = () => {
    if (basketData.length > 0) {
      return basketData.map((el: any) => {
        return {
          price: el.price,
          quantity: el.quantity,
          productId: el.productId._id,
        };
      });
    }
  };

  const { mutate } = usePost({
    queryKey: "order",
    path: "/order/create",
    onSuccess: () => {
      navigate("/");
      queryClient.invalidateQueries({ queryKey: ["order"] });
    },
  });

  const onBasketUser = (e: any) => {
    e.preventDefault();
    const postData = {
      dom,
      etaj,
      podezd,
      street,
      domofon,
      payment,
      kvartira,
      orderItems: renderData(),
      userItems: [{ name, mobile }],
    };

    mutate(postData);
    storage.set("basket", "false");
  };

  const price: number[] = [];

  const calcPrices = () => {
    if (basketData.length > 0) {
      forEach(basketData, (el) => {
        price.push(el.price);
      });
    }
    return price;
  };

  calcPrices();

  const reducedPrice = () => {
    return price.reduce((prev, curr) => prev + curr, 0);
  };

  const product = useGet({
    path: "/product",
    queryKey: "product",
  });

  const clickButton = (id: string) => {
    dispatch(setProductId(id));
    dispatch(toggleProductModal());
  };

  return (
    <section className="basket">
      <div className="container">
        <h4 className="basket__heading">Ваш заказ</h4>
        <ul className="basket-cart">
          {data?.length > 0 &&
            data.map((el: any) => {
              return (
                el?.items.length > 0 &&
                el.items.map((el: any) => {
                  return (
                    <li className="basket-cart__item">
                      <div className="basket-cart__box">
                        <div className="basket-cart__small">
                          <img
                            src={el?.productId.images?.home}
                            alt={el?.productId.name}
                            title={el?.productId.name}
                            className="basket-cart__small-img"
                          />
                        </div>
                        <div className="basket-cart__small">
                          <h4 className="basket-cart__small-heading">
                            {el?.productId.name}
                          </h4>
                          <h4 className="basket-cart__small-description">
                            {el?.productId.description}
                          </h4>
                        </div>
                      </div>
                      <div className="basket-cart__box">
                        <div className="basket-cart__counter">
                          <h4 className="basket-cart__counter-price">
                            {el.price} ₽
                          </h4>
                        </div>
                      </div>
                    </li>
                  );
                })
              );
            })}

          <li className="basket-cart__item">
            <div className="basket-price">
              <h4 className="basket-price__heading">
                Итого: {reducedPrice()} ₽
              </h4>
            </div>
          </li>
        </ul>

        <div className="basket-carousel">
          <h4 className="basket-carousel__heading">Все продукты</h4>
          <ul className="basket-carousel__list">
            <Swiper
              loop={true}
              spaceBetween={30}
              navigation={{
                nextEl: ".basket-carousel__navigation-btn--right",
                prevEl: ".basket-carousel__navigation-btn--left",
              }}
              slidesPerView={5}
              grabCursor={true}
              modules={[Autoplay, Navigation]}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                700: {
                  slidesPerView: 2,
                },
                992: {
                  slidesPerView: 4,
                },
                1350: {
                  slidesPerView: 5,
                },
              }}
            >
              {product?.data?.allProduct?.length > 0 &&
                get(product, "data.allProduct", []).map((el: any) => {
                  return (
                    <SwiperSlide key={el._id}>
                      <li className="basket-carousel__item">
                        <img
                          alt={el.name}
                          title={el.name}
                          src={el.images.home}
                          className="basket-carousel__item-img"
                        />
                        <div className="basket-carousel__content">
                          <h4 className="basket-carousel__content-heading">
                            {el.name}
                          </h4>
                          <h5 className="basket-carousel__content-regular">
                            {el.description}
                          </h5>
                          <Button
                            type="button"
                            onClick={() => clickButton(el._id)}
                            className="basket-carousel__content-btn"
                          >
                            {el.price} ₽
                          </Button>
                        </div>
                      </li>
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          </ul>
        </div>

        <div className="basket-form">
          <form className="basket-form-user" onSubmit={(e) => onBasketUser(e)}>
            <h4 className="basket-form-user__title">О вас</h4>
            <div className="user">
              <label className="user-label" htmlFor="name">
                <h4 className="user-label-heading">Имя*</h4>

                <Input
                  id="name"
                  type="text"
                  value={name}
                  required={true}
                  className="user__input"
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
              <label className="user-label" htmlFor="mobile">
                <h4 className="user-label-heading">Номер телефона*</h4>
                <Input
                  id="mobile"
                  type="number"
                  value={mobile}
                  required={true}
                  className="user__input"
                  onChange={(e) => setMobile(e.target.value)}
                />
              </label>
              <label className="user-label" htmlFor="email">
                <h4 className="user-label-heading">Почта</h4>
                <Input
                  id="email"
                  type="email"
                  required={true}
                  className="user__input"
                />
              </label>
            </div>

            <div className="basket-form-header">
              <div className="basket-form-header__box">
                <h4 className="basket-form-header__box-heading">
                  Добавить к заказу?
                </h4>
              </div>
            </div>
            <div className="basket-form-delivery">
              <label htmlFor="street" className="basket-form-delivery__label">
                <h4 className="user-label-heading">Улица</h4>

                <Input
                  id="street"
                  type="text"
                  value={street}
                  required={true}
                  onChange={(e) => setStreet(e.target.value)}
                  className="basket-form-delivery__label-input"
                />
              </label>

              <div className="basket-form-delivery__container">
                <label htmlFor="dom" className="basket-form-delivery__label">
                  <h4 className="basket-form-delivery__label-heading">Дом</h4>
                  <Input
                    id="dom"
                    value={dom}
                    type="number"
                    required={true}
                    onChange={(e) => setDom(e.target.value)}
                    className="basket-form-delivery__label-input"
                  />
                </label>
                <label htmlFor="enter" className="basket-form-delivery__label">
                  <h4 className="basket-form-delivery__label-heading">
                    Подъезд
                  </h4>
                  <Input
                    id="enter"
                    type="number"
                    value={podezd}
                    required={true}
                    onChange={(e) => setPodezd(e.target.value)}
                    className="basket-form-delivery__label-input"
                  />
                </label>
                <label htmlFor="floor" className="basket-form-delivery__label">
                  <h4 className="basket-form-delivery__label-heading">Этаж</h4>
                  <Input
                    id="floor"
                    value={etaj}
                    type="number"
                    required={true}
                    onChange={(e) => setEtaj(e.target.value)}
                    className="basket-form-delivery__label-input"
                  />
                </label>
                <label
                  htmlFor="apartment"
                  className="basket-form-delivery__label"
                >
                  <h4 className="basket-form-delivery__label-heading">
                    Квартира
                  </h4>
                  <Input
                    type="number"
                    id="apartment"
                    required={true}
                    value={kvartira}
                    onChange={(e) => setKvartira(e.target.value)}
                    className="basket-form-delivery__label-input"
                  />
                </label>
                <label
                  htmlFor="intercom"
                  className="basket-form-delivery__label"
                >
                  <h4 className="basket-form-delivery__label-heading">
                    Домофон
                  </h4>
                  <Input
                    type="number"
                    id="intercom"
                    value={domofon}
                    required={true}
                    onChange={(e) => setDomofon(e.target.value)}
                    className="basket-form-delivery__label-input"
                  />
                </label>
              </div>
            </div>
            <div className="basket-form-order__item">
              <h4 className="basket-form-order__item-title">Оплата</h4>
              <div className="basket-form-order__wrapper">
                <label className="basket-form-order__label">
                  <Input
                    name="soum"
                    type="radio"
                    required={true}
                    value="Наличными"
                    checked={payment === "Наличными"}
                    className="basket-form-order__label-input"
                    onChange={(e) => setPayment(e.target.value)}
                  />
                  <h4 className="basket-form-order__label-heading">
                    Наличными
                  </h4>
                </label>
                <label className="basket-form-order__label">
                  <Input
                    name="soum"
                    type="radio"
                    value="Картой"
                    required={true}
                    checked={payment === "Картой"}
                    className="basket-form-order__label-input"
                    onChange={(e) => setPayment(e.target.value)}
                  />
                  <h4 className="basket-form-order__label-heading">Картой</h4>
                </label>
              </div>
            </div>
            <li className="basket-form-order__footer">
              <h4 className="basket-form-order__footer-heading">
                Итого: {reducedPrice()} ₽
              </h4>
              <Button type="submit" className="basket-form-order__footer-btn">
                Оформить заказ
              </Button>
            </li>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Basket;
