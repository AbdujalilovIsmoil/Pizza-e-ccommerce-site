import { Card1 } from "assets/images/png";
import { Button, Input } from "components/fields";
import {
  ProductModalIcon1,
  ProductModalIcon10,
  ProductModalIcon2,
  ProductModalIcon3,
  ProductModalIcon4,
  ProductModalIcon5,
  ProductModalIcon6,
  ProductModalIcon7,
  ProductModalIcon8,
  ProductModalIcon9,
} from "assets/images/svg";

const index = () => {
  return (
    <>
      <section className="product-modal">
        <div className="container">
          <div className="product-modal__container">
            <img
              src={ProductModalIcon1}
              alt="product-modal-icon1"
              className="product-modal__container-times"
            />
            <div className="product-modal__background">
              <div className="product-modal__category">
                <h4 className="product-modal__category-heading">new</h4>
              </div>
              <ul className="product-modal__list">
                <li className="product-modal__item">
                  <img
                    alt="card"
                    src={Card1}
                    title="product-img"
                    className="product-modal__item-img"
                  />
                </li>
                <li className="product-modal__item">
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
                  <ul className="item-categories">
                    <li className="item-categories__box">
                      <Input
                        type="radio"
                        id="category1"
                        name="category"
                        value="category1"
                        className="item-categories__box-input"
                      />
                      <label
                        htmlFor="category1"
                        className="item-categories__back"
                      >
                        <div className="item-categories__active">
                          <img
                            alt="success"
                            src={ProductModalIcon4}
                            className="item-categories__back-success"
                          />
                          <img
                            alt="categories-meal"
                            src={ProductModalIcon5}
                            className="item-categories__back-meal"
                          />
                        </div>
                        <h4 className="item-categories__box-title">
                          Моцарелла
                        </h4>
                      </label>
                    </li>
                    <li className="item-categories__box">
                      <Input
                        type="radio"
                        id="category2"
                        name="category"
                        value="category2"
                        className="item-categories__box-input"
                      />
                      <label
                        htmlFor="category2"
                        className="item-categories__back"
                      >
                        <div className="item-categories__active">
                          <img
                            alt="success"
                            src={ProductModalIcon4}
                            className="item-categories__back-success"
                          />
                          <img
                            alt="categories-meal"
                            src={ProductModalIcon5}
                            className="item-categories__back-meal"
                          />
                        </div>
                        <h4 className="item-categories__box-title">
                          Огурцы маринованные
                        </h4>
                      </label>
                    </li>
                    <li className="item-categories__box">
                      <Input
                        type="radio"
                        id="category3"
                        name="category"
                        value="category3"
                        className="item-categories__box-input"
                      />
                      <label
                        htmlFor="category3"
                        className="item-categories__back"
                      >
                        <div className="item-categories__active">
                          <img
                            alt="success"
                            src={ProductModalIcon4}
                            className="item-categories__back-success"
                          />
                          <img
                            alt="categories-meal"
                            src={ProductModalIcon6}
                            className="item-categories__back-meal"
                          />
                        </div>
                        <h4 className="item-categories__box-title">
                          Пепперони
                        </h4>
                      </label>
                    </li>
                    <li className="item-categories__box">
                      <Input
                        type="radio"
                        id="category4"
                        name="category"
                        value="category4"
                        className="item-categories__box-input"
                      />
                      <label
                        htmlFor="category4"
                        className="item-categories__back"
                      >
                        <div className="item-categories__active">
                          <img
                            alt="success"
                            src={ProductModalIcon4}
                            className="item-categories__back-success"
                          />
                          <img
                            alt="categories-meal"
                            src={ProductModalIcon7}
                            className="item-categories__back-meal"
                          />
                        </div>
                        <h4 className="item-categories__box-title">
                          Томатный соус
                        </h4>
                      </label>
                    </li>
                  </ul>
                  <ul className="item-sizes">
                    <li className="item-sizes__box">
                      <Button type="button" className="item-sizes__box-btn">
                        Традиционное
                      </Button>
                    </li>
                    <li className="item-sizes__box">
                      <Button type="button" className="item-sizes__box-btn">
                        Тонкое
                      </Button>
                    </li>
                  </ul>
                  <ul className="item-buttons">
                    <li className="item-buttons__box">
                      <Button type="button" className="item-buttons__box-btn">
                        20 см
                      </Button>
                    </li>
                    <li className="item-buttons__box">
                      <Button type="button" className="item-buttons__box-btn">
                        28 см
                      </Button>
                    </li>
                    <li className="item-buttons__box">
                      <Button type="button" className="item-buttons__box-btn">
                        33 см
                      </Button>
                    </li>
                  </ul>
                  <div className="product-modal__vegetables">
                    <h4 className="product-modal__vegetables-heading">
                      Добавьте в пиццу
                    </h4>
                    <ul className="item-categories">
                      <li className="item-categories__box">
                        <Input
                          type="radio"
                          id="category5"
                          name="category"
                          className="item-categories__box-input"
                        />
                        <label
                          htmlFor="category5"
                          className="item-categories__back"
                        >
                          <div className="item-categories__active">
                            <img
                              alt="success"
                              src={ProductModalIcon4}
                              className="item-categories__back-success"
                            />
                            <img
                              alt="categories-meal"
                              src={ProductModalIcon5}
                              className="item-categories__back-meal"
                            />
                          </div>
                          <h4 className="item-categories__box-title">
                            Моцарелла
                          </h4>
                          <h4 className="item-categories__box-price">59 ₽</h4>
                        </label>
                      </li>
                      <li className="item-categories__box">
                        <Input
                          type="radio"
                          id="category6"
                          name="category"
                          className="item-categories__box-input"
                        />
                        <label
                          htmlFor="category6"
                          className="item-categories__back"
                        >
                          <div className="item-categories__active">
                            <img
                              alt="success"
                              src={ProductModalIcon4}
                              className="item-categories__back-success"
                            />
                            <img
                              alt="categories-meal"
                              src={ProductModalIcon8}
                              className="item-categories__back-meal"
                            />
                          </div>
                          <h4 className="item-categories__box-title">
                            Шампиньоны
                          </h4>
                          <h4 className="item-categories__box-price">59 ₽</h4>
                        </label>
                      </li>
                      <li className="item-categories__box">
                        <Input
                          type="radio"
                          id="category7"
                          name="category"
                          className="item-categories__box-input"
                        />
                        <label
                          htmlFor="category7"
                          className="item-categories__back"
                        >
                          <div className="item-categories__active">
                            <img
                              alt="success"
                              src={ProductModalIcon4}
                              className="item-categories__back-success"
                            />
                            <img
                              alt="categories-meal"
                              src={ProductModalIcon9}
                              className="item-categories__back-meal"
                            />
                          </div>
                          <h4 className="item-categories__box-title">
                            Красный лук
                          </h4>
                          <h4 className="item-categories__box-price">59 ₽</h4>
                        </label>
                      </li>
                      <li className="item-categories__box">
                        <Input
                          type="radio"
                          id="category8"
                          name="category"
                          className="item-categories__box-input"
                        />
                        <label
                          htmlFor="category8"
                          className="item-categories__back"
                        >
                          <div className="item-categories__active">
                            <img
                              alt="success"
                              src={ProductModalIcon4}
                              className="item-categories__back-success"
                            />
                            <img
                              alt="categories-meal"
                              src={ProductModalIcon10}
                              className="item-categories__back-meal"
                            />
                          </div>
                          <h4 className="item-categories__box-title">
                            Сладкий перец
                          </h4>
                          <h4 className="item-categories__box-price">59 ₽</h4>
                        </label>
                      </li>
                    </ul>
                  </div>
                  <ul className="product-modal-bottom">
                    <li className="product-modal-bottom__box">
                      <h4 className="product-modal-bottom__box-heading">
                        Итого: 379 ₽
                      </h4>
                      <h4 className="product-modal-bottom__box-small">400 г</h4>
                    </li>
                    <li className="product-modal-bottom__box">
                      <Button
                        type="button"
                        className="product-modal-bottom__box-btn"
                      >
                        Добавить
                      </Button>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
