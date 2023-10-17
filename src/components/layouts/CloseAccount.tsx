import { FilterModalIcon2 } from "assets/images/svg/filter";
import { Button } from "components/fields";

type TCloseAccount = {
  isCloseAccount: boolean;
  setIsCloseAccount: (e: boolean) => void;
};

function CloseAccount({ isCloseAccount, setIsCloseAccount }: TCloseAccount) {
  return (
    <>
      <section
        className={`close-account-modal ${
          isCloseAccount && "close-account-modal--open"
        }`}
      >
        <div className="container">
          <div className="close-account-modal__container">
            <img
              src={FilterModalIcon2}
              alt="auth-modal-close"
              className="close-account-modal__container-close"
              onClick={() => setIsCloseAccount(false)}
            />
            <div className="close-account-modal__background">
              <div className="close-account-modal__content">
                <h4 className="close-account-modal__text">
                  Вы действительно хотите покинуть сайт?
                </h4>
                <div className="close-account-modal__buttons">
                  <Button type="button" className="close-account-modal-btn">
                    Да
                  </Button>
                  <Button
                    type="button"
                    className="close-account-modal-btn"
                    onClick={() => setIsCloseAccount(false)}
                  >
                    Нет
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CloseAccount;
