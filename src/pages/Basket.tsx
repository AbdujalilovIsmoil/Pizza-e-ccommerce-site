import * as Yup from "yup";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Input } from "components/fields";
import { Swiper, SwiperSlide } from "swiper/react";
import { useGet, usePost, useTokenGet } from "hook";
import { Autoplay, Navigation } from "swiper/modules";
import { FastFieldProps, Field, Form, Formik } from "formik";
import { setProductId, toggleProductModal } from "store/productData";
import {
  Basket1 as BasketIcon1,
  Basket2 as BasketIcon2,
} from "assets/images/svg";

interface FieldProps extends FastFieldProps {}

const index = () => {
  const dispatch = useDispatch();
  const [radioValue, setRadioValue] = useState<string>("");

  const regex = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );

  const validationSchema = Yup.object({
    userName: Yup.string().trim().required("Username is not entered"),
    phone: Yup.string().trim().required("Phone is not entered"),
    email: Yup.string()
      .trim()
      .required("Email is not entered")
      .email("User email is invalid")
      .matches(regex, "User email is invalid"),
    home: Yup.string().required("Home is not entered"),
    floor: Yup.string().required("Floor is not entered"),
    enter: Yup.string().required("Enter is not entered "),
    street: Yup.string().required("Street is not entered"),
    intercom: Yup.string().required("Intercom is not entered"),
    apartment: Yup.string().required("Apartment is not entered"),
  });

  const { data } = useTokenGet({
    queryKey: "cart",
    path: "/user/cart",
  });

  const renderData = () => {
    return (
      data?.length > 0 &&
      data?.map((el: any) => {
        return (
          el?.items?.length > 0 &&
          el?.items?.map((el: any) => {
            return {
              price: el.price,
              quantity: el.quantity,
              productId: el.productId._id,
            };
          })
        );
      })
    );
  };

  const renderMapData = () => {
    return renderData()[0].map((el: any) => {
      return el;
    });
  };

  const initialState = {
    home: "3",
    phone: "1",
    floor: "1",
    enter: "1",
    street: "1",
    intercom: "1",
    apartment: "1",
    userName: "asd",
    soum: radioValue,
    email: "asd@gmail.com",
  };

  const postData = {
    orderItems: renderMapData(),
    userItems: [
      {
        name: initialState.userName,
        mobile: initialState.phone,
      },
    ],
    street: initialState.street,
    dom: initialState.home,
    podezd: initialState.enter,
    etaj: initialState.floor,
    kvartira: initialState.apartment,
    domofon: initialState.intercom,
    payment: initialState.soum,
  };

  const { mutate } = usePost({
    queryKey: "order",
    path: "/order/create",
  });

  const orderData = useTokenGet({
    path: "/order",
    queryKey: "order",
  });

  const onBasketUser = (e: any) => {
    mutate(e);
  };

  const price: number[] = [];

  const calcPrices = () => {
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

  const reducedPrice = () => {
    return calcPrices().reduce((prev, curr) => prev + curr, 0);
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
    <>
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
              >
                {product?.data?.allProduct.length > 0 &&
                  product?.data?.allProduct.map((el: any) => {
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
              <div className="basket-carousel__navigation">
                <Button
                  type="button"
                  className="basket-carousel__navigation-btn basket-carousel__navigation-btn--left"
                >
                  <img
                    alt="basket2"
                    src={BasketIcon2}
                    className="basket-carousel__navigation-icon"
                  />
                </Button>
                <Button
                  type="button"
                  className="basket-carousel__navigation-btn basket-carousel__navigation-btn--right"
                >
                  <img
                    alt="basket1"
                    src={BasketIcon1}
                    className="basket-carousel__navigation-icon"
                  />
                </Button>
              </div>
            </ul>
          </div>

          <div className="basket-form">
            <Formik
              initialValues={initialState}
              validationSchema={validationSchema}
              onSubmit={() => onBasketUser(postData)}
            >
              <Form className="basket-form-user">
                <h4 className="basket-form-user__title">О вас</h4>
                <div className="user">
                  <label className="user-label" htmlFor="userName">
                    <h4 className="user-label-heading">Имя*</h4>
                    <Field name="userName">
                      {({ field, meta }: FieldProps) => {
                        return (
                          <>
                            <Input
                              type="text"
                              {...field}
                              id="userName"
                              className={`user__input ${
                                meta.touched &&
                                meta.error &&
                                "user__input--error"
                              }`}
                            />
                            {meta.touched && meta.error && (
                              <h4 className="user__input-error">
                                {meta.error}
                              </h4>
                            )}
                          </>
                        );
                      }}
                    </Field>
                  </label>
                  <label className="user-label" htmlFor="phone">
                    <h4 className="user-label-heading">Номер телефона*</h4>
                    <Field name="phone">
                      {({ field, meta }: FieldProps) => {
                        return (
                          <>
                            <Input
                              {...field}
                              id="phone"
                              type="number"
                              className={`user__input ${
                                meta.touched &&
                                meta.error &&
                                "user__input--error"
                              }`}
                            />
                            {meta.touched && meta.error && (
                              <h4 className="user__input-error">
                                {meta.error}
                              </h4>
                            )}
                          </>
                        );
                      }}
                    </Field>
                  </label>
                  <label className="user-label" htmlFor="email">
                    <h4 className="user-label-heading">Почта</h4>
                    <Field name="email">
                      {({ field, meta }: FieldProps) => {
                        return (
                          <>
                            <Input
                              {...field}
                              id="email"
                              type="email"
                              className={`user__input ${
                                meta.touched &&
                                meta.error &&
                                "user__input--error"
                              }`}
                            />
                            {meta.touched && meta.error && (
                              <h4 className="user__input-error">
                                {meta.error}
                              </h4>
                            )}
                          </>
                        );
                      }}
                    </Field>
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
                  <Field name="street">
                    {({ field, meta }: FieldProps) => {
                      return (
                        <label
                          htmlFor="street"
                          className="basket-form-delivery__label"
                        >
                          <h4 className="user-label-heading">Улица</h4>
                          <Input
                            {...field}
                            id="street"
                            type="text"
                            className={`basket-form-delivery__label-input ${
                              meta.touched &&
                              meta.error &&
                              "basket-form-delivery__label-input--error"
                            }`}
                          />
                          {meta.touched && meta.error && (
                            <h4 className="basket-form-delivery__label-input-error">
                              {meta.error}
                            </h4>
                          )}
                        </label>
                      );
                    }}
                  </Field>

                  <div className="basket-form-delivery__container">
                    <Field name="home">
                      {({ field, meta }: FieldProps) => {
                        return (
                          <label
                            htmlFor="home"
                            className="basket-form-delivery__label"
                          >
                            <h4 className="basket-form-delivery__label-heading">
                              Дом
                            </h4>
                            <Input
                              id="home"
                              {...field}
                              type="number"
                              className={`basket-form-delivery__label-input ${
                                meta.touched &&
                                meta.error &&
                                "basket-form-delivery__label-input--error"
                              }`}
                            />
                            {meta.touched && meta.error && (
                              <h4 className="basket-form-delivery__label-input-error">
                                {meta.error}
                              </h4>
                            )}
                          </label>
                        );
                      }}
                    </Field>
                    <Field name="enter">
                      {({ field, meta }: FieldProps) => {
                        return (
                          <label
                            htmlFor="enter"
                            className="basket-form-delivery__label"
                          >
                            <h4 className="basket-form-delivery__label-heading">
                              Подъезд
                            </h4>
                            <Input
                              id="enter"
                              {...field}
                              type="number"
                              className={`basket-form-delivery__label-input ${
                                meta.touched &&
                                meta.error &&
                                "basket-form-delivery__label-input--error"
                              }`}
                            />
                            {meta.touched && meta.error && (
                              <h4 className="basket-form-delivery__label-input-error">
                                {meta.error}
                              </h4>
                            )}
                          </label>
                        );
                      }}
                    </Field>
                    <Field name="floor">
                      {({ field, meta }: FieldProps) => {
                        return (
                          <label
                            htmlFor="floor"
                            className="basket-form-delivery__label"
                          >
                            <h4 className="basket-form-delivery__label-heading">
                              Этаж
                            </h4>
                            <Input
                              id="floor"
                              {...field}
                              type="number"
                              className={`basket-form-delivery__label-input ${
                                meta.touched &&
                                meta.error &&
                                "basket-form-delivery__label-input--error"
                              }`}
                            />
                            {meta.touched && meta.error && (
                              <h4 className="basket-form-delivery__label-input-error">
                                {meta.error}
                              </h4>
                            )}
                          </label>
                        );
                      }}
                    </Field>
                    <Field name="apartment">
                      {({ field, meta }: FieldProps) => {
                        return (
                          <label
                            htmlFor="apartment"
                            className="basket-form-delivery__label"
                          >
                            <h4 className="basket-form-delivery__label-heading">
                              Квартира
                            </h4>
                            <Input
                              {...field}
                              type="number"
                              id="apartment"
                              className={`basket-form-delivery__label-input ${
                                meta.touched &&
                                meta.error &&
                                "basket-form-delivery__label-input--error"
                              }`}
                            />
                            {meta.touched && meta.error && (
                              <h4 className="basket-form-delivery__label-input-error">
                                {meta.error}
                              </h4>
                            )}
                          </label>
                        );
                      }}
                    </Field>
                    <Field name="intercom">
                      {({ field, meta }: FieldProps) => {
                        return (
                          <label
                            htmlFor="intercom"
                            className="basket-form-delivery__label"
                          >
                            <h4 className="basket-form-delivery__label-heading">
                              Домофон
                            </h4>
                            <Input
                              {...field}
                              type="number"
                              id="intercom"
                              className={`basket-form-delivery__label-input ${
                                meta.touched &&
                                meta.error &&
                                "basket-form-delivery__label-input--error"
                              }`}
                            />
                            {meta.touched && meta.error && (
                              <h4 className="basket-form-delivery__label-input-error">
                                {meta.error}
                              </h4>
                            )}
                          </label>
                        );
                      }}
                    </Field>
                  </div>
                </div>
                <div className="basket-form-order__item">
                  <h4 className="basket-form-order__item-title">Оплата</h4>
                  <div className="basket-form-order__wrapper">
                    <label className="basket-form-order__label">
                      <Input
                        name="soum"
                        type="radio"
                        value="Наличными"
                        className="basket-form-order__label-input"
                        onChange={(e) => setRadioValue(e.target.value)}
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
                        className="basket-form-order__label-input"
                        onChange={(e) => setRadioValue(e.target.value)}
                      />
                      <h4 className="basket-form-order__label-heading">
                        Картой
                      </h4>
                    </label>
                    <label className="basket-form-order__label">
                      <Input
                        name="soum"
                        type="radio"
                        value="Apple Pay"
                        className="basket-form-order__label-input"
                        onChange={(e) => setRadioValue(e.target.value)}
                      />
                      <h4 className="basket-form-order__label-heading">
                        Apple Pay
                      </h4>
                    </label>
                  </div>
                </div>
                <li className="basket-form-order__footer">
                  <h4 className="basket-form-order__footer-heading">
                    Итого: 2 379 ₽
                  </h4>
                  <Button
                    type="submit"
                    className="basket-form-order__footer-btn"
                  >
                    Оформить заказ
                  </Button>
                </li>
              </Form>
            </Formik>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
