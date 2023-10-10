import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import { Button, Input } from "components/fields";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import {
  Counter1,
  Counter2,
  Basket1 as BasketIcon1,
  Basket2 as BasketIcon2,
} from "assets/images/svg";
import {
  Basket1,
  Card1,
  Basket2,
  Basket3,
  Basket4,
  Basket5,
  Basket6,
  Basket7,
  Basket8,
} from "assets/images/png";

const index = () => {
  return (
    <>
      <section className="basket">
        <div className="container">
          <h4 className="basket__heading">Ваш заказ</h4>
          <ul className="basket-cart">
            <li className="basket-cart__item">
              <div className="basket-cart__box">
                <div className="basket-cart__small">
                  <img
                    src={Card1}
                    alt="card1"
                    title="card"
                    className="basket-cart__small-img"
                  />
                </div>
                <div className="basket-cart__small">
                  <h4 className="basket-cart__small-heading">
                    Пепперони по-деревенски
                  </h4>
                  <h5 className="basket-cart__small-regular">
                    Традиционное тесто, 23 см
                  </h5>
                </div>
              </div>
              <div className="basket-cart__box">
                <div className="basket-cart__counter">
                  <div className="counter">
                    <img className="counter__icon" src={Counter1} alt="plus" />
                    <h5 className="counter__heading">1</h5>
                    <img className="counter__icon" src={Counter2} alt="minus" />
                  </div>
                </div>
                <div className="basket-cart__counter">
                  <h4 className="basket-cart__counter-price">399 ₽</h4>
                </div>
              </div>
            </li>
            <li className="basket-cart__item">
              <div className="basket-cart__box">
                <div className="basket-cart__small">
                  <img
                    src={Card1}
                    alt="card1"
                    title="card"
                    className="basket-cart__small-img"
                  />
                </div>
                <div className="basket-cart__small">
                  <h4 className="basket-cart__small-heading">
                    Пепперони по-деревенски
                  </h4>
                  <h5 className="basket-cart__small-regular">
                    Традиционное тесто, 23 см
                  </h5>
                </div>
              </div>
              <div className="basket-cart__box">
                <div className="basket-cart__counter">
                  <div className="counter">
                    <img className="counter__icon" src={Counter1} alt="plus" />
                    <h5 className="counter__heading">1</h5>
                    <img className="counter__icon" src={Counter2} alt="minus" />
                  </div>
                </div>
                <div className="basket-cart__counter">
                  <h4 className="basket-cart__counter-price">399 ₽</h4>
                </div>
              </div>
            </li>
            <li className="basket-cart__item">
              <div className="basket-price">
                <h4 className="basket-price__heading">Итого: 2 379 ₽</h4>
              </div>
            </li>
          </ul>
          <div className="basket-carousel">
            <h4 className="basket-carousel__heading">Добавить к заказу?</h4>
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
                <SwiperSlide>
                  <li className="basket-carousel__item">
                    <img
                      src={Basket1}
                      alt="basket1"
                      title="basket"
                      className="basket-carousel__item-img"
                    />
                    <div className="basket-carousel__content">
                      <h4 className="basket-carousel__content-heading">
                        Картофель из печи
                      </h4>
                      <h5 className="basket-carousel__content-regular">
                        Порция 95 г
                      </h5>
                      <Button
                        className="basket-carousel__content-btn"
                        type="button"
                      >
                        179 ₽
                      </Button>
                    </div>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  <li className="basket-carousel__item">
                    <img
                      src={Basket2}
                      alt="Basket2"
                      title="Basket2"
                      className="basket-carousel__item-img"
                    />
                    <div className="basket-carousel__content">
                      <h4 className="basket-carousel__content-heading">
                        Филадельфия крем-брюле
                      </h4>
                      <h5 className="basket-carousel__content-regular">
                        Порция 95 г
                      </h5>
                      <Button
                        className="basket-carousel__content-btn"
                        type="button"
                      >
                        179 ₽
                      </Button>
                    </div>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  <li className="basket-carousel__item">
                    <img
                      src={Basket3}
                      alt="basket3"
                      title="basket3"
                      className="basket-carousel__item-img"
                    />
                    <div className="basket-carousel__content">
                      <h4 className="basket-carousel__content-heading">
                        Супер Филадельфия
                      </h4>
                      <h5 className="basket-carousel__content-regular">
                        Порция 95 г
                      </h5>
                      <Button
                        className="basket-carousel__content-btn"
                        type="button"
                      >
                        179 ₽
                      </Button>
                    </div>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  <li className="basket-carousel__item">
                    <img
                      src={Basket4}
                      alt="basket4"
                      title="basket4"
                      className="basket-carousel__item-img"
                    />
                    <div className="basket-carousel__content">
                      <h4 className="basket-carousel__content-heading">
                        Тигр мама
                      </h4>
                      <h5 className="basket-carousel__content-regular">
                        Порция 95 г
                      </h5>
                      <Button
                        className="basket-carousel__content-btn"
                        type="button"
                      >
                        179 ₽
                      </Button>
                    </div>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  <li className="basket-carousel__item">
                    <img
                      src={Basket1}
                      alt="basket1"
                      title="basket"
                      className="basket-carousel__item-img"
                    />
                    <div className="basket-carousel__content">
                      <h4 className="basket-carousel__content-heading">
                        Картофель из печи
                      </h4>
                      <h5 className="basket-carousel__content-regular">
                        Порция 95 г
                      </h5>
                      <Button
                        className="basket-carousel__content-btn"
                        type="button"
                      >
                        179 ₽
                      </Button>
                    </div>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  <li className="basket-carousel__item">
                    <img
                      src={Basket1}
                      alt="basket1"
                      title="basket"
                      className="basket-carousel__item-img"
                    />
                    <div className="basket-carousel__content">
                      <h4 className="basket-carousel__content-heading">
                        Картофель из печи
                      </h4>
                      <h5 className="basket-carousel__content-regular">
                        Порция 95 г
                      </h5>
                      <Button
                        className="basket-carousel__content-btn"
                        type="button"
                      >
                        179 ₽
                      </Button>
                    </div>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  <li className="basket-carousel__item">
                    <img
                      src={Basket2}
                      alt="Basket2"
                      title="Basket2"
                      className="basket-carousel__item-img"
                    />
                    <div className="basket-carousel__content">
                      <h4 className="basket-carousel__content-heading">
                        Филадельфия крем-брюле
                      </h4>
                      <h5 className="basket-carousel__content-regular">
                        Порция 95 г
                      </h5>
                      <Button
                        className="basket-carousel__content-btn"
                        type="button"
                      >
                        179 ₽
                      </Button>
                    </div>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  <li className="basket-carousel__item">
                    <img
                      src={Basket3}
                      alt="basket3"
                      title="basket3"
                      className="basket-carousel__item-img"
                    />
                    <div className="basket-carousel__content">
                      <h4 className="basket-carousel__content-heading">
                        Супер Филадельфия
                      </h4>
                      <h5 className="basket-carousel__content-regular">
                        Порция 95 г
                      </h5>
                      <Button
                        className="basket-carousel__content-btn"
                        type="button"
                      >
                        179 ₽
                      </Button>
                    </div>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  <li className="basket-carousel__item">
                    <img
                      src={Basket4}
                      alt="basket4"
                      title="basket4"
                      className="basket-carousel__item-img"
                    />
                    <div className="basket-carousel__content">
                      <h4 className="basket-carousel__content-heading">
                        Тигр мама
                      </h4>
                      <h5 className="basket-carousel__content-regular">
                        Порция 95 г
                      </h5>
                      <Button
                        className="basket-carousel__content-btn"
                        type="button"
                      >
                        179 ₽
                      </Button>
                    </div>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  <li className="basket-carousel__item">
                    <img
                      src={Basket1}
                      alt="basket1"
                      title="basket"
                      className="basket-carousel__item-img"
                    />
                    <div className="basket-carousel__content">
                      <h4 className="basket-carousel__content-heading">
                        Картофель из печи
                      </h4>
                      <h5 className="basket-carousel__content-regular">
                        Порция 95 г
                      </h5>
                      <Button
                        className="basket-carousel__content-btn"
                        type="button"
                      >
                        179 ₽
                      </Button>
                    </div>
                  </li>
                </SwiperSlide>
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
          <div className="basket-carousel">
            <h4 className="basket-carousel__heading">Соусы</h4>
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
                <SwiperSlide>
                  <li className="basket-carousel__item">
                    <img
                      src={Basket5}
                      alt="basket5"
                      title="basket"
                      className="basket-carousel__item-img"
                    />
                    <div className="basket-carousel__content">
                      <h4 className="basket-carousel__content-heading">
                        Сырный соус
                      </h4>
                      <Button
                        className="basket-carousel__content-btn"
                        type="button"
                      >
                        39 ₽
                      </Button>
                    </div>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  <li className="basket-carousel__item">
                    <img
                      src={Basket6}
                      alt="Basket6"
                      title="Basket6"
                      className="basket-carousel__item-img"
                    />
                    <div className="basket-carousel__content">
                      <h4 className="basket-carousel__content-heading">
                        Барбфекю
                      </h4>
                      <Button
                        className="basket-carousel__content-btn"
                        type="button"
                      >
                        39 ₽
                      </Button>
                    </div>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  <li className="basket-carousel__item">
                    <img
                      src={Basket7}
                      alt="basket7"
                      title="basket7"
                      className="basket-carousel__item-img"
                    />
                    <div className="basket-carousel__content">
                      <h4 className="basket-carousel__content-heading">Ранч</h4>
                      <Button
                        className="basket-carousel__content-btn"
                        type="button"
                      >
                        39 ₽
                      </Button>
                    </div>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  <li className="basket-carousel__item">
                    <img
                      src={Basket4}
                      alt="basket4"
                      title="basket4"
                      className="basket-carousel__item-img"
                    />
                    <div className="basket-carousel__content">
                      <h4 className="basket-carousel__content-heading">
                        Тигр мама
                      </h4>
                      <Button
                        className="basket-carousel__content-btn"
                        type="button"
                      >
                        179 ₽
                      </Button>
                    </div>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  <li className="basket-carousel__item">
                    <img
                      src={Basket8}
                      alt="basket8"
                      title="basket8"
                      className="basket-carousel__item-img"
                    />
                    <div className="basket-carousel__content">
                      <h4 className="basket-carousel__content-heading">
                        Сгущёнка
                      </h4>
                      <Button
                        className="basket-carousel__content-btn"
                        type="button"
                      >
                        39 ₽
                      </Button>
                    </div>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  <li className="basket-carousel__item">
                    <img
                      src={Basket5}
                      alt="basket5"
                      title="basket"
                      className="basket-carousel__item-img"
                    />
                    <div className="basket-carousel__content">
                      <h4 className="basket-carousel__content-heading">
                        Сырный соус
                      </h4>
                      <Button
                        className="basket-carousel__content-btn"
                        type="button"
                      >
                        39 ₽
                      </Button>
                    </div>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  <li className="basket-carousel__item">
                    <img
                      src={Basket6}
                      alt="Basket6"
                      title="Basket6"
                      className="basket-carousel__item-img"
                    />
                    <div className="basket-carousel__content">
                      <h4 className="basket-carousel__content-heading">
                        Барбфекю
                      </h4>
                      <Button
                        className="basket-carousel__content-btn"
                        type="button"
                      >
                        39 ₽
                      </Button>
                    </div>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  <li className="basket-carousel__item">
                    <img
                      src={Basket7}
                      alt="basket7"
                      title="basket7"
                      className="basket-carousel__item-img"
                    />
                    <div className="basket-carousel__content">
                      <h4 className="basket-carousel__content-heading">Ранч</h4>
                      <Button
                        className="basket-carousel__content-btn"
                        type="button"
                      >
                        39 ₽
                      </Button>
                    </div>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  <li className="basket-carousel__item">
                    <img
                      src={Basket4}
                      alt="basket4"
                      title="basket4"
                      className="basket-carousel__item-img"
                    />
                    <div className="basket-carousel__content">
                      <h4 className="basket-carousel__content-heading">
                        Тигр мама
                      </h4>
                      <Button
                        className="basket-carousel__content-btn"
                        type="button"
                      >
                        179 ₽
                      </Button>
                    </div>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  <li className="basket-carousel__item">
                    <img
                      src={Basket8}
                      alt="basket8"
                      title="basket8"
                      className="basket-carousel__item-img"
                    />
                    <div className="basket-carousel__content">
                      <h4 className="basket-carousel__content-heading">
                        Сгущёнка
                      </h4>
                      <Button
                        className="basket-carousel__content-btn"
                        type="button"
                      >
                        39 ₽
                      </Button>
                    </div>
                  </li>
                </SwiperSlide>
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
            <form className="basket-form-user">
              <h4 className="basket-form-user__title">О вас</h4>
              <div className="user">
                <label className="user-label" htmlFor="username">
                  <h4 className="user-label-heading">Имя*</h4>
                  <Input
                    type="text"
                    id="username"
                    placeholder="Алексей"
                    className="user__input"
                  />
                </label>
                <label className="user-label" htmlFor="phone">
                  <h4 className="user-label-heading">Номер телефона*</h4>
                  <PhoneInput
                    country={"uz"}
                    inputClass="user__input"
                    placeholder="Номер телефона*"
                  />
                </label>
                <label className="user-label" htmlFor="email">
                  <h4 className="user-label-heading">Почта</h4>
                  <Input
                    id="email"
                    type="email"
                    placeholder="mail@gmail.com"
                    className="user__input"
                  />
                </label>
              </div>
            </form>
            <div className="basket-form-header">
              <div className="basket-form-header__box">
                <h4 className="basket-form-header__box-heading">Доставка</h4>
              </div>
              <div className="basket-form-header__container">
                <div className="basket-form-header__send">
                  <Input
                    id="send1"
                    name="send"
                    type="radio"
                    value="send1"
                    className="basket-form-header__send-input"
                  />
                  <label className="basket-form-header__label" htmlFor="send1">
                    Доставка
                  </label>
                </div>
                <div className="basket-form-header__send">
                  <Input
                    id="send2"
                    name="send"
                    type="radio"
                    value="send2"
                    className="basket-form-header__send-input"
                  />
                  <label className="basket-form-header__label" htmlFor="send2">
                    Самовывоз
                  </label>
                </div>
              </div>
            </div>
            <form className="basket-form-delivery">
              <label htmlFor="street" className="basket-form-delivery__label">
                <h4 className="basket-form-delivery__label-heading">Улица*</h4>
                <Input
                  type="text"
                  id="street"
                  className="basket-form-delivery__label-input"
                />
              </label>
              <div className="basket-form-delivery__container">
                <label htmlFor="home" className="basket-form-delivery__label">
                  <h4 className="basket-form-delivery__label-heading">Дом</h4>
                  <Input
                    id="home"
                    type="text"
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
                    className="basket-form-delivery__label-input"
                  />
                </label>
                <label htmlFor="floor" className="basket-form-delivery__label">
                  <h4 className="basket-form-delivery__label-heading">Этаж</h4>
                  <Input
                    id="floor"
                    type="number"
                    className="basket-form-delivery__label-input"
                  />
                </label>
                <label
                  htmlFor="Apartment"
                  className="basket-form-delivery__label"
                >
                  <h4 className="basket-form-delivery__label-heading">
                    Квартира
                  </h4>
                  <Input
                    id="Apartment"
                    type="number"
                    className="basket-form-delivery__label-input"
                  />
                </label>
                <label
                  htmlFor="Intercom"
                  className="basket-form-delivery__label"
                >
                  <h4 className="basket-form-delivery__label-heading">
                    Домофон
                  </h4>
                  <Input
                    id="Intercom"
                    type="number"
                    className="basket-form-delivery__label-input"
                  />
                </label>
              </div>
            </form>
            <ul className="basket-form-order">
              <li className="basket-form-order__item">
                <h4 className="basket-form-order__item-regular">
                  Когда выполнить заказ?
                </h4>
                <div className="basket-form-order__wrapper">
                  <label htmlFor="often1" className="basket-form-order__label">
                    <Input
                      id="often1"
                      type="radio"
                      name="order1"
                      className="basket-form-order__label-input"
                    />
                    <h4 className="basket-form-order__label-heading">
                      Как можно скорее
                    </h4>
                  </label>

                  <label htmlFor="often2" className="basket-form-order__label">
                    <Input
                      id="often2"
                      type="radio"
                      name="order1"
                      className="basket-form-order__label-input"
                    />
                    <h4 className="basket-form-order__label-heading">
                      По времени
                    </h4>
                  </label>
                </div>
              </li>
              <li className="basket-form-order__item">
                <h4 className="basket-form-order__item-title">Оплата</h4>
                <div className="basket-form-order__wrapper">
                  <label htmlFor="often3" className="basket-form-order__label">
                    <Input
                      id="often3"
                      type="radio"
                      name="order2"
                      className="basket-form-order__label-input"
                    />
                    <h4 className="basket-form-order__label-heading">
                      Наличными
                    </h4>
                  </label>

                  <label htmlFor="often4" className="basket-form-order__label">
                    <Input
                      id="often4"
                      type="radio"
                      name="order2"
                      className="basket-form-order__label-input"
                    />
                    <h4 className="basket-form-order__label-heading">Картой</h4>
                  </label>
                  <label htmlFor="often5" className="basket-form-order__label">
                    <Input
                      id="often5"
                      type="radio"
                      name="order2"
                      className="basket-form-order__label-input"
                    />
                    <h4 className="basket-form-order__label-heading">
                      Apple Pay
                    </h4>
                  </label>
                </div>
              </li>
              <li className="basket-form-order__item">
                <h4 className="basket-form-order__item-title">Комментарий</h4>
                <textarea
                  placeholder="Есть уточнения?"
                  className="basket-form-order__item-text"
                ></textarea>
              </li>
              <li className="basket-form-order__footer">
                <h4 className="basket-form-order__footer-heading">
                  Итого: 2 379 ₽
                </h4>
                <Button type="button" className="basket-form-order__footer-btn">
                  Оформить заказ
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
