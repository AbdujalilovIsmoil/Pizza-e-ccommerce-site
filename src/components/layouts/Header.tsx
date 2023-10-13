import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "components/fields";
import { BsChevronDown } from "assets/react-icons";
import { CardModal, Auth } from "components/layouts";
import { HeaderListIntro } from "assets/images/svg/header";
import { HeaderListCart } from "assets/images/svg/header/header-list";
import { HeaderTopAccount, HeaderTopLocation } from "assets/images/svg";

const index = () => {
  const [isCartModalOpen, setIsCartModalOpen] = useState<boolean>(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);

  if (isCartModalOpen) {
    document.body.classList.add("hidden");
  } else {
    document.body.classList.remove("hidden");
  }

  type Tcategories = {
    id: number;
    title: string;
  };

  const categories: Tcategories[] = [
    {
      id: 1,
      title: "Суши",
    },
    {
      id: 2,
      title: "Напитки",
    },
    {
      id: 3,
      title: "Закуски",
    },
    {
      id: 4,
      title: "Комбо",
    },
    {
      id: 5,
      title: "Десерты",
    },
    {
      id: 6,
      title: "Соусы",
    },
  ];

  return (
    <>
      <header className="header">
        <CardModal
          isCartModalOpen={isCartModalOpen}
          setIsCartModalOpen={setIsCartModalOpen}
        />
        <Auth
          isAuthModalOpen={isAuthModalOpen}
          setIsAuthModalOpen={setIsAuthModalOpen}
        />
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

                    <ul className="header-open">
                      <li className="header-open__item">
                        <Link to="/pages/history">
                          <h4 className="header-open__item-heading header-open__item-heading--regular">
                            История заказов
                          </h4>
                        </Link>
                      </li>
                      <li className="header-open__item">
                        <Link to="/pages/settings">
                          <h4 className="header-open__item-heading header-open__item-heading--regular">
                            Настройки
                          </h4>
                        </Link>
                      </li>
                      <li
                        onClick={() => setIsAuthModalOpen(true)}
                        className="header-open__item header-open__item--border"
                      >
                        <Button type="button" className="header-open__item-btn">
                          Вход в аккаунт
                        </Button>
                      </li>
                      <li className="header-open__item header-open__item--border">
                        <Button className="header-open__item-btn" type="button">
                          Выход из аккаунта
                        </Button>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="header-list">
            <div className="header-list__container">
              <Link to="/">
                <div className="header-list__intro">
                  <img
                    alt="Pizza"
                    title="Pizza"
                    src={HeaderListIntro}
                    className="header-list__intro-icon"
                  />
                  <h4 className="header-list__intro-heading">Куда пицца</h4>
                </div>
              </Link>
              <ul className="header-list-menu">
                {categories.length > 0 &&
                  categories.map((el: Tcategories) => {
                    return (
                      <li className="header-list-menu__item" key={el.id}>
                        <h4 className="header-list-menu__item-heading">
                          {el.title}
                        </h4>
                      </li>
                    );
                  })}
              </ul>
            </div>
            <div className="header-list__modal">
              <Button
                type="button"
                className="header-list__btn"
                onClick={() => setIsCartModalOpen(true)}
              >
                <img
                  alt="header-cart"
                  src={HeaderListCart}
                  className="header-list__btn-cart"
                />
                <h4 className="header-list__btn-heading">0 ₽</h4>
              </Button>
              <div className="small-modal small-modal--open">
                <h4 className="small-modal__heading">
                  Товар добавлен в корзину
                </h4>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default index;
