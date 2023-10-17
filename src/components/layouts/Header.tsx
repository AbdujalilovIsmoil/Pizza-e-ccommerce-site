import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "components/fields";
import { HeaderTopAccount } from "assets/images/svg";
import { HeaderListIntro } from "assets/images/svg/header";
import { CardModal, Auth, CloseAccount } from "components/layouts";
import { HeaderListCart } from "assets/images/svg/header/header-list";

const Header = () => {
  const [isCloseAccount, setIsCloseAccount] = useState<boolean>(false);
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
        <CloseAccount
          isCloseAccount={isCloseAccount}
          setIsCloseAccount={setIsCloseAccount}
        />
        <div className="header__border-bottom">
          <div className="container">
            <div className="header-top">
              <ul className="header-top__list">
                <li className="header-top__item">
                  <h4 className="header-top__item-heading">
                    Время работы: с 9:00 до 23:00
                  </h4>
                </li>
                <li className="header-top__item header-top__item--hover">
                  <img
                    src={HeaderTopAccount}
                    alt="header-top__item-account"
                    className="header-top__item-account"
                  />
                  <h4 className="header-top__item-heading">Войти в аккаунт</h4>

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
                      <Button
                        type="button"
                        className="header-open__item-btn"
                        onClick={() => setIsCloseAccount(true)}
                      >
                        Выход из аккаунта
                      </Button>
                    </li>
                  </ul>
                </li>
              </ul>
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

export default Header;
