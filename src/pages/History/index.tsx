import { HistoryIcon1 } from "assets/images/svg";
import { Button, Input } from "components/fields";
import { Link, useLocation } from "react-router-dom";
import { Card1, Card2, Card3 } from "assets/images/png";
import { Pagination } from "components/UI";

const index = () => {
  const { pathname } = useLocation();

  return (
    <>
      <section className="history">
        <div className="container">
          <div className="history-header">
            <div className="history-header__block">
              <h4 className="history-header__block-heading">Мой аккаунт</h4>
            </div>
            <div className="history-header__block">
              <Link
                type="button"
                to="/pages/history"
                className={`history-header__block-btn ${
                  pathname === "/pages/history" &&
                  "history-header__block-btn--active"
                }`}
              >
                История заказов
              </Link>
              <Link
                type="button"
                to="/pages/settings"
                className={`history-header__block-btn ${
                  pathname === "/pages/settings" &&
                  "history-header__block-btn--active"
                }`}
              >
                Настройки
              </Link>
            </div>
          </div>
          <div className="history__container">
            <Input
              type="checkbox"
              id="history-radio1"
              name="history-radio"
              className="history__input"
            />
            <label htmlFor="history-radio1" className="history-top">
              <ul className="history-top__list">
                <li className="history-top__item">
                  <h5 className="history-top__item-heading">Заказ</h5>
                  <div className="history-top__numbers">
                    <h4 className="history-top__numbers-heading">№130312</h4>
                    <h5 className="history-top__numbers-date">22.06.21</h5>
                  </div>
                </li>
                <li className="history-top__item">
                  <h5 className="history-top__item-heading">Сумма заказа</h5>
                  <div className="history-top__numbers">
                    <h4 className="history-top__numbers-heading">399 ₽</h4>
                  </div>
                </li>
                <li className="history-top__item">
                  <h5 className="history-top__item-heading">Статус</h5>
                  <div className="history-top__numbers">
                    <h4 className="history-top__numbers-heading">
                      Обрабатывается
                    </h4>
                  </div>
                </li>
                <li className="history-top__item">
                  <h5 className="history-top__item-heading">Оплачено</h5>
                  <div className="history-top__numbers">
                    <h4 className="history-top__numbers-heading">Картой</h4>
                  </div>
                </li>
                <li className="history-top__item">
                  <img
                    alt="arrow-down"
                    src={HistoryIcon1}
                    className="history-top__item-icon"
                  />
                </li>
              </ul>
            </label>
            <div className="history-background">
              <ul className="history-background__list">
                <li className="history-background__item">
                  <div className="history-background__container">
                    <div className="history-background__box">
                      <h4 className="history-background__box-text">
                        ул. Львовская 48/2, офис 301, 2 этаж, домофон 4801#
                      </h4>
                    </div>
                    <div className="history-background__box">
                      <img
                        src={Card1}
                        className="history-background__box-img"
                        alt="history-background-card"
                      />
                      <img
                        src={Card2}
                        className="history-background__box-img"
                        alt="history-background-card"
                      />
                      <img
                        src={Card3}
                        className="history-background__box-img"
                        alt="history-background-card"
                      />
                    </div>
                  </div>
                  <ul className="history-background__elements">
                    <li className="history-background__element">
                      <img
                        alt="card"
                        src={Card1}
                        title="card"
                        className="history-background__element-img"
                      />
                      <h4 className="history-background__element-heading">
                        Пепперони по-деревенски
                      </h4>
                      <h5 className="history-background__element-regular">
                        Традиционное тесто, 23 см
                      </h5>
                      <Button
                        type="button"
                        className="history-background__element-btn"
                      >
                        1 товар
                      </Button>
                      <h4 className="history-background__element-price">
                        399 ₽
                      </h4>
                    </li>
                    <li className="history-background__element">
                      <img
                        alt="card"
                        src={Card1}
                        title="card"
                        className="history-background__element-img"
                      />
                      <h4 className="history-background__element-heading">
                        Пепперони по-деревенски
                      </h4>
                      <h5 className="history-background__element-regular">
                        Традиционное тесто, 23 см
                      </h5>
                      <Button
                        type="button"
                        className="history-background__element-btn"
                      >
                        1 товар
                      </Button>
                      <h4 className="history-background__element-price">
                        399 ₽
                      </h4>
                    </li>
                    <li className="history-background__element">
                      <img
                        alt="card"
                        src={Card1}
                        title="card"
                        className="history-background__element-img"
                      />
                      <h4 className="history-background__element-heading">
                        Пепперони по-деревенски
                      </h4>
                      <h5 className="history-background__element-regular">
                        Традиционное тесто, 23 см
                      </h5>
                      <Button
                        type="button"
                        className="history-background__element-btn"
                      >
                        1 товар
                      </Button>
                      <h4 className="history-background__element-price">
                        399 ₽
                      </h4>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="history__container">
            <Input
              type="checkbox"
              id="history-radio2"
              name="history-radio"
              className="history__input"
            />
            <label htmlFor="history-radio2" className="history-top">
              <ul className="history-top__list">
                <li className="history-top__item">
                  <h5 className="history-top__item-heading">Заказ</h5>
                  <div className="history-top__numbers">
                    <h4 className="history-top__numbers-heading">№130312</h4>
                    <h5 className="history-top__numbers-date">22.06.21</h5>
                  </div>
                </li>
                <li className="history-top__item">
                  <h5 className="history-top__item-heading">Сумма заказа</h5>
                  <div className="history-top__numbers">
                    <h4 className="history-top__numbers-heading">399 ₽</h4>
                  </div>
                </li>
                <li className="history-top__item">
                  <h5 className="history-top__item-heading">Статус</h5>
                  <div className="history-top__numbers">
                    <h4 className="history-top__numbers-heading">
                      Обрабатывается
                    </h4>
                  </div>
                </li>
                <li className="history-top__item">
                  <h5 className="history-top__item-heading">Оплачено</h5>
                  <div className="history-top__numbers">
                    <h4 className="history-top__numbers-heading">Картой</h4>
                  </div>
                </li>
                <li className="history-top__item">
                  <img
                    alt="arrow-down"
                    src={HistoryIcon1}
                    className="history-top__item-icon"
                  />
                </li>
              </ul>
            </label>
            <div className="history-background">
              <ul className="history-background__list">
                <li className="history-background__item">
                  <div className="history-background__container">
                    <div className="history-background__box">
                      <h4 className="history-background__box-text">
                        ул. Львовская 48/2, офис 301, 2 этаж, домофон 4801#
                      </h4>
                    </div>
                    <div className="history-background__box">
                      <img
                        src={Card1}
                        className="history-background__box-img"
                        alt="history-background-card"
                      />
                      <img
                        src={Card2}
                        className="history-background__box-img"
                        alt="history-background-card"
                      />
                      <img
                        src={Card3}
                        className="history-background__box-img"
                        alt="history-background-card"
                      />
                    </div>
                  </div>
                  <ul className="history-background__elements">
                    <li className="history-background__element">
                      <img
                        alt="card"
                        src={Card1}
                        title="card"
                        className="history-background__element-img"
                      />
                      <h4 className="history-background__element-heading">
                        Пепперони по-деревенски
                      </h4>
                      <h5 className="history-background__element-regular">
                        Традиционное тесто, 23 см
                      </h5>
                      <Button
                        type="button"
                        className="history-background__element-btn"
                      >
                        1 товар
                      </Button>
                      <h4 className="history-background__element-price">
                        399 ₽
                      </h4>
                    </li>
                    <li className="history-background__element">
                      <img
                        alt="card"
                        src={Card1}
                        title="card"
                        className="history-background__element-img"
                      />
                      <h4 className="history-background__element-heading">
                        Пепперони по-деревенски
                      </h4>
                      <h5 className="history-background__element-regular">
                        Традиционное тесто, 23 см
                      </h5>
                      <Button
                        type="button"
                        className="history-background__element-btn"
                      >
                        1 товар
                      </Button>
                      <h4 className="history-background__element-price">
                        399 ₽
                      </h4>
                    </li>
                    <li className="history-background__element">
                      <img
                        alt="card"
                        src={Card1}
                        title="card"
                        className="history-background__element-img"
                      />
                      <h4 className="history-background__element-heading">
                        Пепперони по-деревенски
                      </h4>
                      <h5 className="history-background__element-regular">
                        Традиционное тесто, 23 см
                      </h5>
                      <Button
                        type="button"
                        className="history-background__element-btn"
                      >
                        1 товар
                      </Button>
                      <h4 className="history-background__element-price">
                        399 ₽
                      </h4>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="history__container">
            <Input
              type="checkbox"
              id="history-radio3"
              name="history-radio"
              className="history__input"
            />
            <label htmlFor="history-radio3" className="history-top">
              <ul className="history-top__list">
                <li className="history-top__item">
                  <h5 className="history-top__item-heading">Заказ</h5>
                  <div className="history-top__numbers">
                    <h4 className="history-top__numbers-heading">№130312</h4>
                    <h5 className="history-top__numbers-date">22.06.21</h5>
                  </div>
                </li>
                <li className="history-top__item">
                  <h5 className="history-top__item-heading">Сумма заказа</h5>
                  <div className="history-top__numbers">
                    <h4 className="history-top__numbers-heading">399 ₽</h4>
                  </div>
                </li>
                <li className="history-top__item">
                  <h5 className="history-top__item-heading">Статус</h5>
                  <div className="history-top__numbers">
                    <h4 className="history-top__numbers-heading">
                      Обрабатывается
                    </h4>
                  </div>
                </li>
                <li className="history-top__item">
                  <h5 className="history-top__item-heading">Оплачено</h5>
                  <div className="history-top__numbers">
                    <h4 className="history-top__numbers-heading">Картой</h4>
                  </div>
                </li>
                <li className="history-top__item">
                  <img
                    alt="arrow-down"
                    src={HistoryIcon1}
                    className="history-top__item-icon"
                  />
                </li>
              </ul>
            </label>
            <div className="history-background">
              <ul className="history-background__list">
                <li className="history-background__item">
                  <div className="history-background__container">
                    <div className="history-background__box">
                      <h4 className="history-background__box-text">
                        ул. Львовская 48/2, офис 301, 2 этаж, домофон 4801#
                      </h4>
                    </div>
                    <div className="history-background__box">
                      <img
                        src={Card1}
                        className="history-background__box-img"
                        alt="history-background-card"
                      />
                      <img
                        src={Card2}
                        className="history-background__box-img"
                        alt="history-background-card"
                      />
                      <img
                        src={Card3}
                        className="history-background__box-img"
                        alt="history-background-card"
                      />
                    </div>
                  </div>
                  <ul className="history-background__elements">
                    <li className="history-background__element">
                      <img
                        alt="card"
                        src={Card1}
                        title="card"
                        className="history-background__element-img"
                      />
                      <h4 className="history-background__element-heading">
                        Пепперони по-деревенски
                      </h4>
                      <h5 className="history-background__element-regular">
                        Традиционное тесто, 23 см
                      </h5>
                      <Button
                        type="button"
                        className="history-background__element-btn"
                      >
                        1 товар
                      </Button>
                      <h4 className="history-background__element-price">
                        399 ₽
                      </h4>
                    </li>
                    <li className="history-background__element">
                      <img
                        alt="card"
                        src={Card1}
                        title="card"
                        className="history-background__element-img"
                      />
                      <h4 className="history-background__element-heading">
                        Пепперони по-деревенски
                      </h4>
                      <h5 className="history-background__element-regular">
                        Традиционное тесто, 23 см
                      </h5>
                      <Button
                        type="button"
                        className="history-background__element-btn"
                      >
                        1 товар
                      </Button>
                      <h4 className="history-background__element-price">
                        399 ₽
                      </h4>
                    </li>
                    <li className="history-background__element">
                      <img
                        alt="card"
                        src={Card1}
                        title="card"
                        className="history-background__element-img"
                      />
                      <h4 className="history-background__element-heading">
                        Пепперони по-деревенски
                      </h4>
                      <h5 className="history-background__element-regular">
                        Традиционное тесто, 23 см
                      </h5>
                      <Button
                        type="button"
                        className="history-background__element-btn"
                      >
                        1 товар
                      </Button>
                      <h4 className="history-background__element-price">
                        399 ₽
                      </h4>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="history__container">
            <Input
              type="checkbox"
              id="history-radio4"
              name="history-radio"
              className="history__input"
            />
            <label htmlFor="history-radio4" className="history-top">
              <ul className="history-top__list">
                <li className="history-top__item">
                  <h5 className="history-top__item-heading">Заказ</h5>
                  <div className="history-top__numbers">
                    <h4 className="history-top__numbers-heading">№130312</h4>
                    <h5 className="history-top__numbers-date">22.06.21</h5>
                  </div>
                </li>
                <li className="history-top__item">
                  <h5 className="history-top__item-heading">Сумма заказа</h5>
                  <div className="history-top__numbers">
                    <h4 className="history-top__numbers-heading">399 ₽</h4>
                  </div>
                </li>
                <li className="history-top__item">
                  <h5 className="history-top__item-heading">Статус</h5>
                  <div className="history-top__numbers">
                    <h4 className="history-top__numbers-heading">
                      Обрабатывается
                    </h4>
                  </div>
                </li>
                <li className="history-top__item">
                  <h5 className="history-top__item-heading">Оплачено</h5>
                  <div className="history-top__numbers">
                    <h4 className="history-top__numbers-heading">Картой</h4>
                  </div>
                </li>
                <li className="history-top__item">
                  <img
                    alt="arrow-down"
                    src={HistoryIcon1}
                    className="history-top__item-icon"
                  />
                </li>
              </ul>
            </label>
            <div className="history-background">
              <ul className="history-background__list">
                <li className="history-background__item">
                  <div className="history-background__container">
                    <div className="history-background__box">
                      <h4 className="history-background__box-text">
                        ул. Львовская 48/2, офис 301, 2 этаж, домофон 4801#
                      </h4>
                    </div>
                    <div className="history-background__box">
                      <img
                        src={Card1}
                        className="history-background__box-img"
                        alt="history-background-card"
                      />
                      <img
                        src={Card2}
                        className="history-background__box-img"
                        alt="history-background-card"
                      />
                      <img
                        src={Card3}
                        className="history-background__box-img"
                        alt="history-background-card"
                      />
                    </div>
                  </div>
                  <ul className="history-background__elements">
                    <li className="history-background__element">
                      <img
                        alt="card"
                        src={Card1}
                        title="card"
                        className="history-background__element-img"
                      />
                      <h4 className="history-background__element-heading">
                        Пепперони по-деревенски
                      </h4>
                      <h5 className="history-background__element-regular">
                        Традиционное тесто, 23 см
                      </h5>
                      <Button
                        type="button"
                        className="history-background__element-btn"
                      >
                        1 товар
                      </Button>
                      <h4 className="history-background__element-price">
                        399 ₽
                      </h4>
                    </li>
                    <li className="history-background__element">
                      <img
                        alt="card"
                        src={Card1}
                        title="card"
                        className="history-background__element-img"
                      />
                      <h4 className="history-background__element-heading">
                        Пепперони по-деревенски
                      </h4>
                      <h5 className="history-background__element-regular">
                        Традиционное тесто, 23 см
                      </h5>
                      <Button
                        type="button"
                        className="history-background__element-btn"
                      >
                        1 товар
                      </Button>
                      <h4 className="history-background__element-price">
                        399 ₽
                      </h4>
                    </li>
                    <li className="history-background__element">
                      <img
                        alt="card"
                        src={Card1}
                        title="card"
                        className="history-background__element-img"
                      />
                      <h4 className="history-background__element-heading">
                        Пепперони по-деревенски
                      </h4>
                      <h5 className="history-background__element-regular">
                        Традиционное тесто, 23 см
                      </h5>
                      <Button
                        type="button"
                        className="history-background__element-btn"
                      >
                        1 товар
                      </Button>
                      <h4 className="history-background__element-price">
                        399 ₽
                      </h4>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="history-pagination">
            <Pagination itemsPerPage={4} />
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
