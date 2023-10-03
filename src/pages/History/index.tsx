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
        </div>
      </section>
    </>
  );
};

export default index;
