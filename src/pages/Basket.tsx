import * as Yup from "yup";
import { Button, Input } from "components/fields";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { FastFieldProps, Field, Form, Formik } from "formik";
import {
  Counter1,
  Counter2,
  Basket1 as BasketIcon1,
  Basket2 as BasketIcon2,
} from "assets/images/svg";
import {
  Card1,
  Basket1,
  Basket2,
  Basket5,
  Basket6,
  Basket7,
  Basket8,
} from "assets/images/png";

type TCart = {
  id: number;
  img: string;
  size: string;
  price: string;
  title: string;
  quantity: number;
};

type sliderDataInside = {
  id: number;
  img: string;
  text: string;
  price: string;
  title: string;
};

type sliderData = {
  id: number;
  title: string;
  data: sliderDataInside[];
};

const index = () => {
  const basketData: TCart[] = [
    {
      id: 1,
      img: Card1,
      quantity: 1,
      price: "399 ₽",
      title: "Пепперони по-деревенски",
      size: "Традиционное тесто, 23 см",
    },
    {
      id: 2,
      img: Card1,
      quantity: 1,
      price: "399 ₽",
      title: "Пепперони по-деревенски",
      size: "Традиционное тесто, 23 см",
    },
  ];

  interface FieldProps extends FastFieldProps { }

  const sliderData: sliderData[] = [
    {
      id: 1,
      title: "Добавить к заказу?",
      data: [
        {
          id: 1,
          img: Basket1,
          price: "179 ₽",
          text: "Порция 95 г",
          title: "Картофель из печи",
        },
        {
          id: 2,
          img: Basket2,
          price: "179 ₽",
          text: "Порция 95 г",
          title: "Филадельфия крем-брюле",
        },
        {
          id: 3,
          img: Basket2,
          price: "179 ₽",
          text: "Порция 95 г",
          title: "Супер Филадельфия",
        },
        {
          id: 4,
          img: Basket2,
          price: "179 ₽",
          title: "Тигр мама",
          text: "Порция 95 г",
        },
        {
          id: 5,
          img: Basket1,
          price: "179 ₽",
          text: "Порция 95 г",
          title: "Картофель из печи",
        },
        {
          id: 6,
          img: Basket2,
          price: "179 ₽",
          text: "Порция 95 г",
          title: "Филадельфия крем-брюле",
        },
        {
          id: 7,
          img: Basket2,
          price: "179 ₽",
          text: "Порция 95 г",
          title: "Супер Филадельфия",
        },
        {
          id: 8,
          img: Basket2,
          price: "179 ₽",
          title: "Тигр мама",
          text: "Порция 95 г",
        },
      ],
    },
    {
      id: 2,
      title: "Соусы",
      data: [
        {
          id: 1,
          img: Basket5,
          price: "179 ₽",
          text: "Порция 95 г",
          title: "Картофель из печи",
        },
        {
          id: 2,
          img: Basket6,
          price: "179 ₽",
          text: "Порция 95 г",
          title: "Филадельфия крем-брюле",
        },
        {
          id: 3,
          img: Basket7,
          price: "179 ₽",
          text: "Порция 95 г",
          title: "Супер Филадельфия",
        },
        {
          id: 4,
          img: Basket8,
          price: "179 ₽",
          title: "Тигр мама",
          text: "Порция 95 г",
        },
        {
          id: 5,
          img: Basket5,
          price: "179 ₽",
          text: "Порция 95 г",
          title: "Картофель из печи",
        },
        {
          id: 6,
          img: Basket6,
          price: "179 ₽",
          text: "Порция 95 г",
          title: "Филадельфия крем-брюле",
        },
        {
          id: 7,
          img: Basket7,
          price: "179 ₽",
          text: "Порция 95 г",
          title: "Супер Филадельфия",
        },
        {
          id: 8,
          img: Basket8,
          price: "179 ₽",
          title: "Тигр мама",
          text: "Порция 95 г",
        },
      ],
    },
  ];

  const onBasketUser = (e: any) => {
    console.log(e);
  };

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
    send: Yup.string().required("Send is not entered"),
    home: Yup.string().required("Home is not entered"),
    text: Yup.string().required("Text is not entered"),
    floor: Yup.string().required("Floor is not entered"),
    enter: Yup.string().required("Enter is not entered "),
    street: Yup.string().required("Street is not entered"),
    intercom: Yup.string().required("Intercom is not entered"),
    apartment: Yup.string().required("Apartment is not entered"),
  });

  const initialState = {
    text: "",
    home: "",
    phone: "",
    email: "",
    floor: "",
    enter: "",
    street: "",
    send: false,
    userName: "",
    intercom: "",
    apartment: "",
  };

  return (
    <>
      <section className="basket">
        <div className="container">
          <h4 className="basket__heading">Ваш заказ</h4>
          <ul className="basket-cart">
            {basketData.length > 0 &&
              basketData.map((el: TCart) => {
                return (
                  <li className="basket-cart__item">
                    <div className="basket-cart__box">
                      <div className="basket-cart__small">
                        <img
                          src={el.img}
                          alt={el.title}
                          title={el.title}
                          className="basket-cart__small-img"
                        />
                      </div>
                      <div className="basket-cart__small">
                        <h4 className="basket-cart__small-heading">
                          {el.title}
                        </h4>
                        <h5 className="basket-cart__small-regular">
                          {el.size}
                        </h5>
                      </div>
                    </div>
                    <div className="basket-cart__box">
                      <div className="basket-cart__counter">
                        <div className="counter">
                          <img
                            className="counter__icon"
                            src={Counter1}
                            alt="plus"
                          />
                          <h5 className="counter__heading">{el.quantity}</h5>
                          <img
                            className="counter__icon"
                            src={Counter2}
                            alt="minus"
                          />
                        </div>
                      </div>
                      <div className="basket-cart__counter">
                        <h4 className="basket-cart__counter-price">
                          {el.price}
                        </h4>
                      </div>
                    </div>
                  </li>
                );
              })}

            <li className="basket-cart__item">
              <div className="basket-price">
                <h4 className="basket-price__heading">Итого: 2 379 ₽</h4>
              </div>
            </li>
          </ul>
          {sliderData.length > 0 &&
            sliderData.map((el: sliderData) => {
              return (
                <div className="basket-carousel" key={el.id}>
                  <h4 className="basket-carousel__heading">{el.title}</h4>
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
                      {el.data.length > 0 &&
                        el.data.map((el: sliderDataInside) => {
                          return (
                            <SwiperSlide key={el.id}>
                              <li className="basket-carousel__item">
                                <img
                                  src={el.img}
                                  alt={el.title}
                                  title={el.title}
                                  className="basket-carousel__item-img"
                                />
                                <div className="basket-carousel__content">
                                  <h4 className="basket-carousel__content-heading">
                                    {el.title}
                                  </h4>
                                  <h5 className="basket-carousel__content-regular">
                                    {el.text}
                                  </h5>
                                  <Button
                                    type="button"
                                    className="basket-carousel__content-btn"
                                  >
                                    {el.price}
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
              );
            })}

          <div className="basket-form">
            <Formik
              initialValues={initialState}
              validationSchema={validationSchema}
              onSubmit={(values) => onBasketUser(values)}
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
                              className={`user__input ${meta.touched &&
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
                              className={`user__input ${meta.touched &&
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
                              className={`user__input ${meta.touched &&
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
                          <Input
                            {...field}
                            id="street"
                            type="text"
                            className={`basket-form-delivery__label-input ${meta.touched &&
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
                              className={`basket-form-delivery__label-input ${meta.touched &&
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
                              className={`basket-form-delivery__label-input ${meta.touched &&
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
                              className={`basket-form-delivery__label-input ${meta.touched &&
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
                              className={`basket-form-delivery__label-input ${meta.touched &&
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
                              className={`basket-form-delivery__label-input ${meta.touched &&
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
                <ul className="basket-form-order">
                  <li className="basket-form-order__item">
                    <h4 className="basket-form-order__item-regular">
                      Когда выполнить заказ?
                    </h4>
                    <div className="basket-form-order__wrapper">
                      <Field name="often">
                        {({ field, meta }: FieldProps) => {
                          return (
                            <label
                              htmlFor="often1"
                              className="basket-form-order__label"
                            >
                              <Input
                                {...field}
                                id="often1"
                                type="radio"
                                checked={true}
                                className={`basket-form-order__label-input ${meta.touched &&
                                  meta.error &&
                                  "user__input--error"
                                  }`}
                              />
                              <h4 className="basket-form-order__label-heading">
                                Как можно скорее
                              </h4>
                              {meta.touched && meta.error && (
                                <h4 className="user__input-error">
                                  {meta.error}
                                </h4>
                              )}
                            </label>
                          );
                        }}
                      </Field>
                      <Field name="often">
                        {({ field, meta }: FieldProps) => {
                          return (
                            <label
                              htmlFor="often2"
                              className="basket-form-order__label"
                            >
                              <Input
                                {...field}
                                id="often2"
                                type="radio"
                                className={`basket-form-order__label-input ${meta.touched &&
                                  meta.error &&
                                  "user__input--error"
                                  }`}
                              />
                              <h4 className="basket-form-order__label-heading">
                                По времени
                              </h4>
                              {meta.touched && meta.error && (
                                <h4 className="user__input-error">
                                  {meta.error}
                                </h4>
                              )}
                            </label>
                          );
                        }}
                      </Field>
                    </div>
                  </li>
                  <li className="basket-form-order__item">
                    <h4 className="basket-form-order__item-title">Оплата</h4>
                    <div className="basket-form-order__wrapper">
                      <Field name="often4">
                        {({ field, meta }: FieldProps) => {
                          return (
                            <label
                              htmlFor="often3"
                              className="basket-form-order__label"
                            >
                              <Input
                                {...field}
                                id="often3"
                                type="radio"
                                checked={true}
                                className={`basket-form-order__label-input ${meta.touched &&
                                  meta.error &&
                                  "user__input--error"
                                  }`}
                              />
                              <h4 className="basket-form-order__label-heading">
                                Наличными
                              </h4>
                              {meta.touched && meta.error && (
                                <h4 className="user__input-error">
                                  {meta.error}
                                </h4>
                              )}
                            </label>
                          );
                        }}
                      </Field>

                      <Field name="often4">
                        {({ field, meta }: FieldProps) => {
                          return (
                            <label
                              htmlFor="often4"
                              className="basket-form-order__label"
                            >
                              <Input
                                {...field}
                                id="often4"
                                type="radio"
                                className={`basket-form-order__label-input ${meta.touched &&
                                  meta.error &&
                                  "user__input--error"
                                  }`}
                              />
                              <h4 className="basket-form-order__label-heading">
                                Картой
                              </h4>
                              {meta.touched && meta.error && (
                                <h4 className="user__input-error">
                                  {meta.error}
                                </h4>
                              )}
                            </label>
                          );
                        }}
                      </Field>
                      <Field name="often4">
                        {({ field, meta }: FieldProps) => {
                          return (
                            <label
                              htmlFor="often5"
                              className="basket-form-order__label"
                            >
                              <Input
                                id="often5"
                                {...field}
                                type="radio"
                                className={`basket-form-order__label-input ${meta.touched &&
                                  meta.error &&
                                  "user__input--error"
                                  }`}
                              />
                              <h4 className="basket-form-order__label-heading">
                                Apple Pay
                              </h4>
                              {meta.touched && meta.error && (
                                <h4 className="user__input-error">
                                  {meta.error}
                                </h4>
                              )}
                            </label>
                          );
                        }}
                      </Field>
                    </div>
                  </li>
                  <li className="basket-form-order__item">
                    <h4 className="basket-form-order__item-title">
                      Комментарий
                    </h4>
                    <Field name="text">
                      {({ field, meta }: FieldProps) => {
                        return (
                          <label
                            htmlFor="text"
                            className="basket-form-delivery__label"
                          >
                            <h4 className="basket-form-delivery__label-heading">
                              Улица*
                            </h4>
                            <textarea
                              {...field}
                              placeholder="Есть уточнения?"
                              className={`basket-form-order__item-text ${meta.touched &&
                                meta.error &&
                                "basket-form-order__item-text--error"
                                }`}
                            ></textarea>

                            {meta.touched && meta.error && (
                              <h4 className="basket-form-delivery__label-input-error">
                                {meta.error}
                              </h4>
                            )}
                          </label>
                        );
                      }}
                    </Field>
                  </li>
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
                </ul>
              </Form>
            </Formik>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
