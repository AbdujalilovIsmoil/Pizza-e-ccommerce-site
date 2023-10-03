import { Link, useLocation } from "react-router-dom";

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
        </div>
      </section>
    </>
  );
};

export default index;
