import { HeaderListIntro } from "assets/images/svg/header";
import {
  HeaderTopDown,
  HeaderTopAccount,
  HeaderTopLocation,
} from "assets/images/svg";

const index = () => {
  return (
    <>
      <header className="header">
        <div className="header__border-bottom">
          <div className="container">
            <div className="header-top">
              <div className="header-top__block">
                <ul className="header-top__list">
                  <li className="header-top__item header-top__item--hover">
                    <img
                      src={HeaderTopLocation}
                      alt="header-top__location"
                      className="header-top__item-location"
                    />
                    <h4 className="header-top__item-heading">Москва</h4>
                    <img
                      src={HeaderTopDown}
                      alt="header-top__down"
                      className="header-top__item-down"
                    />
                  </li>
                  <li className="header-top__item">
                    <h4 className="header-top__item-heading">
                      Проверить адрес
                    </h4>
                  </li>
                  <li className="header-top__item">
                    <h4 className="header-top__item-heading">
                      Среднее время доставки*:{" "}
                      <span className="header-top__item-active">00:24:19</span>
                    </h4>
                  </li>
                </ul>
              </div>
              <div className="header-top__block">
                <ul className="header-top__list">
                  <li className="header-top__item">
                    <h4 className="header-top__item-heading">
                      Время работы: с 11:00 до 23:00
                    </h4>
                  </li>
                  <li className="header-top__item header-top__item--hover">
                    <img
                      src={HeaderTopAccount}
                      alt="header-top__item-account"
                      className="header-top__item-account"
                    />
                    <h4 className="header-top__item-heading">
                      Войти в аккаунт
                    </h4>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="header-list">
          <div className="header-list__intro">
            <img
              alt="Pizza"
              title="Pizza"
              src={HeaderListIntro}
              className="header-list__intro-icon"
            />
            <h4 className="header-list__intro-heading">Куда пицца</h4>
          </div>
          <ul className="header-list-menu">
            <li className="header-list-menu__item">
              <h4 className="header-list-menu__item-heading">Акции</h4>
            </li>
            <li className="header-list-menu__item">
              <h4 className="header-list-menu__item-heading">Суши</h4>
            </li>
            <li className="header-list-menu__item">
              <h4 className="header-list-menu__item-heading">Напитки</h4>
            </li>
            <li className="header-list-menu__item">
              <h4 className="header-list-menu__item-heading">Закуски</h4>
            </li>
            <li className="header-list-menu__item">
              <h4 className="header-list-menu__item-heading">Комбо</h4>
            </li>
            <li className="header-list-menu__item">
              <h4 className="header-list-menu__item-heading">Десерты</h4>
            </li>
            <li className="header-list-menu__item">
              <h4 className="header-list-menu__item-heading">Соусы</h4>
            </li>
            <li className="header-list-menu__item">
              <h4 className="header-list-menu__item-heading">Другое</h4>
              <img
                src={HeaderTopDown}
                alt="header-list-menu__item-down"
                className="header-list-menu__item-down"
              />
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default index;
