import { Button, Input } from "components/fields";
import { FilterModalIcon1 } from "assets/images/svg/filter";

const index = ({
  isAuthModalOpen,
  setIsAuthModalOpen,
}: {
  isAuthModalOpen: boolean;
  setIsAuthModalOpen: (e: boolean) => void;
}) => {
  return (
    <>
      <section
        className={`auth-modal ${isAuthModalOpen && "auth-modal--open"}`}
      >
        <div className="container">
          <div className="auth-modal__background">
            <img
              src={FilterModalIcon1}
              alt="auth-modal-close"
              className="auth-modal__background-close"
              onClick={() => setIsAuthModalOpen(false)}
            />
            <div className="auth-modal__content">
              <h4 className="auth-modal__background-heading">Вход в аккаунт</h4>
              <h4 className="auth-modal__background-desc">
                Сможете быстро оформлять заказы, использовать бонусы
              </h4>
              {isAuthModalOpen ? (
                <form className="auth-modal__form">
                  <Input
                    type="text"
                    placeholder="имя пользователя"
                    className="auth-modal__form-input"
                  />
                  <Input
                    type="email"
                    placeholder="электронная почта"
                    className="auth-modal__form-input"
                  />
                  <Input
                    type="password"
                    placeholder="пароль"
                    className="auth-modal__form-input"
                  />
                  <Button className="auth-modal__background-btn" type="submit">
                    Войти
                  </Button>
                </form>
              ) : (
                <form className="auth-modal__form">
                  <Input
                    type="email"
                    placeholder="электронная почта"
                    className="auth-modal__form-input"
                  />
                  <Input
                    type="password"
                    placeholder="пароль"
                    className="auth-modal__form-input"
                  />
                  <Button className="auth-modal__background-btn" type="submit">
                    Войти
                  </Button>
                </form>
              )}
              <h4 className="auth-modal__background-text">
                Продолжая, вы соглашаетесь со сбором и обработкой персональных
                данных и пользовательским соглашением
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
