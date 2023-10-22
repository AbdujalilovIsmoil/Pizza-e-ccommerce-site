import { get } from "lodash";
import { api } from "services";
import { useState } from "react";
import { storage } from "services";
import { Button } from "components/fields";
import { getCategories } from "store/categoryData";
import { HeaderTopAccount } from "assets/images/svg";
import { HeaderListIntro } from "assets/images/svg/header";
import { CardModal, Auth, CloseAccount } from "components/layouts";
import { Link, NavLink, useNavigate, useSearchParams } from "react-router-dom";
import { HeaderListCart } from "assets/images/svg/header/header-list";
import { useDispatch, useSelector } from "react-redux";
import { useTokenGet } from "hook";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [isCloseAccount, setIsCloseAccount] = useState<boolean>(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState<boolean>(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);
  const [categoryTitle, setCategoryTitle] = useState<string>(
    storage.get("category") || ""
  );

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
      title: "Пицца",
    },
    {
      id: 2,
      title: "Суши",
    },
    {
      id: 3,
      title: "Напитки",
    },
    {
      id: 4,
      title: "Закуски",
    },
    {
      id: 5,
      title: "Комбо",
    },
    {
      id: 6,
      title: "Десерты",
    },
    {
      id: 7,
      title: "Соусы",
    },
  ];

  const getCategory = (title: string) => {
    navigate(`/pages/category`);
    storage.set("category", title);
    setCategoryTitle(title);
    setSearchParams((params: URLSearchParams) => {
      params.set("category", storage.get("category") as string);
      return params;
    });
    dispatch(getCategories(title));
  };

  const { data } = useTokenGet({
    path: "/cart",
    queryKey: "cart",
  });

  const { smallProductModal }: any = useSelector((state) =>
    get(state, "productData")
  );

  console.log(smallProductModal);

  return (
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
                <h4 className="header-top__item-heading">
                  {storage.get("username") ?? "Войти в аккаунт"}
                </h4>

                <ul className="header-open">
                  {storage.get("token") && (
                    <li className="header-open__item">
                      <Link to="/pages/history">
                        <h4 className="header-open__item-heading header-open__item-heading--regular">
                          История заказов
                        </h4>
                      </Link>
                    </li>
                  )}
                  {storage.get("token") ? (
                    <li className="header-open__item">
                      <Button
                        type="button"
                        className="header-open__item-btn"
                        onClick={() => setIsCloseAccount(true)}
                      >
                        Выход из аккаунта
                      </Button>
                    </li>
                  ) : (
                    <li
                      onClick={() => setIsAuthModalOpen(true)}
                      className="header-open__item"
                    >
                      <Button type="button" className="header-open__item-btn">
                        Вход в аккаунт
                      </Button>
                    </li>
                  )}
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
                    <li
                      key={el.id}
                      className="header-list-menu__item"
                      onClick={() => getCategory(el.title)}
                    >
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
              <h4 className="header-list__btn-heading">
                {{ ...data }[0]?.items?.length > 0
                  ? { ...data }[0]?.items?.length
                  : 0}
              </h4>
            </Button>
            <div
              className={`small-modal ${
                smallProductModal && "small-modal--open"
              }`}
            >
              <h4 className="small-modal__heading">Товар добавлен в корзину</h4>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
