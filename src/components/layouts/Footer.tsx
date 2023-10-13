import { HeaderListIntro } from "assets/images/svg/header";
import {
  FooterIcon1,
  FooterIcon2,
  FooterIcon3,
  FooterIcon4,
} from "assets/images/svg";

const index = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <ul className="footer__list">
            <li className="footer__item">
              <a href="#">
                <div className="footer__intro">
                  <img
                    alt="intro"
                    title="intro"
                    src={HeaderListIntro}
                    className="footer__item-intro"
                  />
                  <h4 className="footer__item-title">Куда пицца</h4>
                </div>
              </a>
            </li>
            <li className="footer__item">
              <h4 className="footer__item-heading">Куда пицца</h4>
              <ul className="footer-categories">
                <li className="footer-categories__item">
                  <a href="#" className="footer-categories__item-heading">
                    О компании
                  </a>
                </li>
                <li className="footer-categories__item">
                  <a href="#" className="footer-categories__item-heading">
                    Пользовательское соглашение
                  </a>
                </li>
                <li className="footer-categories__item">
                  <a href="#" className="footer-categories__item-heading">
                    Условия гарантии
                  </a>
                </li>
              </ul>
            </li>
            <li className="footer__item">
              <h4 className="footer__item-heading">Помощь</h4>
              <ul className="footer-categories">
                <li className="footer-categories__item">
                  <a href="#" className="footer-categories__item-heading">
                    Ресторан
                  </a>
                </li>
                <li className="footer-categories__item">
                  <a href="#" className="footer-categories__item-heading">
                    Контакты
                  </a>
                </li>
                <li className="footer-categories__item">
                  <a href="#" className="footer-categories__item-heading">
                    Поддержка
                  </a>
                </li>
                <li className="footer-categories__item">
                  <a href="#" className="footer-categories__item-heading">
                    Отследить заказ
                  </a>
                </li>
              </ul>
            </li>
            <li className="footer__item">
              <h4 className="footer__item-heading">Контакты</h4>
              <ul className="footer-medias">
                <li className="footer-medias__item">
                  <a href="#" target="_blank">
                    <div className="footer-medias__container">
                      <img
                        title="phone"
                        src={FooterIcon1}
                        alt="footer-icon1"
                        className="footer-medias__item-icon"
                      />
                      <h4 className="footer-medias__item-heading">
                        +7 (926) 223-10-11
                      </h4>
                    </div>
                  </a>
                </li>
                <li className="footer-medias__item">
                  <a href="#" target="_blank">
                    <div className="footer-medias__container">
                      <img
                        title="location"
                        src={FooterIcon2}
                        alt="footer-icon2"
                        className="footer-medias__item-icon"
                      />
                      <h4 className="footer-medias__item-heading">
                        Москва, ул. Юных Ленинцев, д.99
                      </h4>
                    </div>
                  </a>
                </li>
                <ul className="footer-medias__list">
                  <li className="footer-medias__item">
                    <a href="#" target="_blank">
                      <div className="footer-medias__container">
                        <img
                          title="facebook"
                          src={FooterIcon3}
                          alt="footer-icon3"
                          className="footer-medias__item-icon"
                        />
                        <h4 className="footer-medias__item-heading">Facebok</h4>
                      </div>
                    </a>
                  </li>
                  <li className="footer-medias__item">
                    <a href="#" target="_blank">
                      <div className="footer-medias__container">
                        <img
                          title="facebook"
                          src={FooterIcon4}
                          alt="footer-icon4"
                          className="footer-medias__item-icon"
                        />
                        <h4 className="footer-medias__item-heading">
                          Instagram
                        </h4>
                      </div>
                    </a>
                  </li>
                </ul>
              </ul>
            </li>
          </ul>
          <div className="footer__copy">
            <h4 className="footer__copy-heading">
              &copy; Copyright {new Date().getFullYear()} — Куда Пицца
            </h4>
          </div>
        </div>
      </footer>
    </>
  );
};

export default index;
