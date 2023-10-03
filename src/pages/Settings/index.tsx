import { settingsEditIcon } from "assets/images/svg";
import { Link, useLocation } from "react-router-dom";

const index = () => {
  const { pathname } = useLocation();

  return (
    <>
      <section className="settings">
        <div className="container">
          <div className="settings-header">
            <div className="settings-header__block">
              <h4 className="settings-header__block-heading">Мой аккаунт</h4>
            </div>
            <div className="settings-header__block">
              <Link
                type="button"
                to="/pages/history"
                className={`settings-header__block-btn ${
                  pathname === "/pages/history" &&
                  "settings-header__block-btn--active"
                }`}
              >
                История заказов
              </Link>
              <Link
                type="button"
                to="/pages/settings"
                className={`settings-header__block-btn ${
                  pathname === "/pages/settings" &&
                  "settings-header__block-btn--active"
                }`}
              >
                Настройки
              </Link>
            </div>
          </div>
          <div className="settings-body">
            <ul className="settings-body__list">
              <li className="settings-body__list-item">
                <div className="user">
                  <div className="user-header">
                    <div className="user-header__box">
                      <h4 className="user-header__box-heading">
                        Личные данные
                      </h4>
                    </div>
                    <div className="user-header__box">
                      <img
                        src={settingsEditIcon}
                        alt="setting-edit-icon"
                        className="user-header__box-icon"
                      />
                      <h4 className="user-header__box-edit">Изменить</h4>
                    </div>
                  </div>
                  <div className="user-body">
                    <ul className="user-body__list">
                      <li className="user-body__item">
                        <h5 className="user-body__item-key">Имя*</h5>
                        <h5 className="user-body__item-value">Вадим</h5>
                      </li>
                      <li className="user-body__item">
                        <h5 className="user-body__item-key">Номер телефона*</h5>
                        <h5 className="user-body__item-value">
                          +7 (926) 223-10-11
                        </h5>
                      </li>
                      <li className="user-body__item">
                        <h5 className="user-body__item-key">Почта</h5>
                        <h5 className="user-body__item-value">
                          mail@gmail.com
                        </h5>
                      </li>
                      <li className="user-body__item">
                        <h5 className="user-body__item-key">Дата рождения</h5>
                        <h5 className="user-body__item-value">13.02.1996</h5>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
