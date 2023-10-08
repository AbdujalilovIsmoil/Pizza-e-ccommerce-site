import {
  FooterIcon1,
  FooterIcon2,
  FooterIcon3,
  FooterIcon4,
} from "assets/images/svg";
import { HeaderListIntro } from "assets/images/svg/header";

const index = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <ul className="footer__list">
            <li className="footer__item">
              <img
                alt="intro"
                title="intro"
                src={HeaderListIntro}
                className="footer__item-intro"
              />
            </li>
            <li className="footer__item">
              <h4 className="footer__item-heading">Куда пицца</h4>
              <ul className="footer-categories">
                <li className="footer-categories__item">
                  <h4 className="footer-categories__item-heading">
                    О компании
                  </h4>
                </li>
                <li className="footer-categories__item">
                  <h4 className="footer-categories__item-heading">
                    Пользовательское соглашение
                  </h4>
                </li>
                <li className="footer-categories__item">
                  <h4 className="footer-categories__item-heading">
                    Условия гарантии
                  </h4>
                </li>
              </ul>
            </li>
            <li className="footer__item">
              <h4 className="footer__item-heading">Помощь</h4>
              <ul className="footer-categories">
                <li className="footer-categories__item">
                  <h4 className="footer-categories__item-heading">Ресторан</h4>
                </li>
                <li className="footer-categories__item">
                  <h4 className="footer-categories__item-heading">Контакты</h4>
                </li>
                <li className="footer-categories__item">
                  <h4 className="footer-categories__item-heading">Поддержка</h4>
                </li>
                <li className="footer-categories__item">
                  <h4 className="footer-categories__item-heading">
                    Отследить заказ
                  </h4>
                </li>
              </ul>
            </li>
            <li className="footer__item">
              <h4 className="footer__item-heading">Контакты</h4>
              <ul className="footer-medias">
                <li className="footer-medias__item">
                  <a href="#" target="_blank">
                    <img
                      title="phone"
                      src={FooterIcon1}
                      alt="footer-icon1"
                      className="footer-medias__item-icon"
                    />
                    <h4 className="fotoer-medias__item-heading">
                      +7 (926) 223-10-11
                    </h4>
                  </a>
                </li>
                <li className="footer-medias__item">
                  <a href="#" target="_blank">
                    <img
                      title="location"
                      src={FooterIcon2}
                      alt="footer-icon2"
                      className="footer-medias__item-icon"
                    />
                    <h4 className="fotoer-medias__item-heading">
                      Москва, ул. Юных Ленинцев, д.99
                    </h4>
                  </a>
                </li>
                <ul className="footer-medias__list">
                  <li className="footer-medias__item">
                    <a href="#" target="_blank">
                      <img
                        title="facebook"
                        src={FooterIcon3}
                        alt="footer-icon3"
                        className="footer-medias__item-icon"
                      />
                      <h4 className="fotoer-medias__item-heading">Facebok</h4>
                    </a>
                  </li>
                  <li className="footer-medias__item">
                    <a href="#" target="_blank">
                      <img
                        title="facebook"
                        src={FooterIcon4}
                        alt="footer-icon4"
                        className="footer-medias__item-icon"
                      />
                      <h4 className="fotoer-medias__item-heading">Instagram</h4>
                    </a>
                  </li>
                </ul>
              </ul>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default index;
