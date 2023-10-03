import { Button } from "components/fields";
import { BsChevronDown } from "assets/react-icons";
import { HeaderListIntro } from "assets/images/svg/header";
import { HeaderListCart } from "assets/images/svg/header/header-list";
import { HeaderTopAccount, HeaderTopLocation } from "assets/images/svg";

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
                    <BsChevronDown className="header-top__item-down" />
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
        <div className="container">
          <div className="header-list">
            <div className="header-list__container">
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
                  <div className="header-list-menu__item-block">
                    <h4 className="header-list-menu__item-heading">Другое</h4>
                    <BsChevronDown className="header-list-menu__item-down" />
                  </div>
                  <ul className="header-drop-down">
                    <li className="header-drop-down__block">
                      <h4 className="header-drop-down__block-title">Акции</h4>
                    </li>
                    <li className="header-drop-down__block">
                      <h4 className="header-drop-down__block-title">
                        О компании{" "}
                      </h4>
                    </li>
                    <li className="header-drop-down__block">
                      <h4 className="header-drop-down__block-title">
                        Пользовательское соглашение
                      </h4>
                    </li>
                    <li className="header-drop-down__block">
                      <h4 className="header-drop-down__block-title">
                        Условия гарантии
                      </h4>
                    </li>
                    <li className="header-drop-down__block">
                      <h4 className="header-drop-down__block-title">
                        Ресторан
                      </h4>
                    </li>
                    <li className="header-drop-down__block">
                      <h4 className="header-drop-down__block-title">
                        Контакты
                      </h4>
                    </li>
                    <li className="header-drop-down__block">
                      <h4 className="header-drop-down__block-title">
                        Поддержка
                      </h4>
                    </li>
                    <li className="header-drop-down__block">
                      <h4 className="header-drop-down__block-title">
                        Отследить заказ
                      </h4>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <Button className="header-list__btn" type="button">
              <img
                alt="header-cart"
                src={HeaderListCart}
                className="header-list__btn-cart"
              />
              <h4 className="header-list__btn-heading">0 ₽</h4>
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};

export default index;
