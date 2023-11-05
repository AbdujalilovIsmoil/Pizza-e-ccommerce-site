import { HeaderListIntro } from "assets/images/svg/header";
import {
  FooterIcon1,
  FooterIcon2,
  FooterIcon3,
  FooterIcon4,
} from "assets/images/svg";

type TfooterDataOuside = {
  id: number;
  title: string;
  data: TfooterDataInside[];
};

type TfooterDataInside = {
  id: number;
  title: string;
};

type insideData = {
  id: number;
  alt: string;
  img: string;
  title: string;
};

type mediaOutsideData = {
  id: number;
  alt: string;
  img: string;
  title: string;
};

type mediaData = {
  id: number;
  title: string;
  outsideData: mediaOutsideData[];
};

const Footer = () => {
  const footerData: TfooterDataOuside[] = [
    {
      id: 1,
      title: "Куда пицца",
      data: [
        {
          id: 1,
          title: "О компании",
        },
        {
          id: 2,
          title: "Пользовательское соглашение",
        },
        {
          id: 3,
          title: "Условия гарантии",
        },
      ],
    },
    {
      id: 2,
      title: "Помощь",
      data: [
        {
          id: 1,
          title: "Ресторан",
        },
        {
          id: 2,
          title: "Контакты",
        },
        {
          id: 3,
          title: "Поддержка",
        },
        {
          id: 4,
          title: "Отследить заказ",
        },
      ],
    },
  ];

  const insideData: insideData[] = [
    {
      id: 1,
      alt: "Facebok",
      img: FooterIcon3,
      title: "Facebok",
    },
    {
      id: 2,
      alt: "Instagram",
      img: FooterIcon4,
      title: "Instagram",
    },
  ];

  const mediaData: mediaData[] = [
    {
      id: 1,
      title: "Контакты",
      outsideData: [
        {
          id: 1,
          alt: "phone",
          img: FooterIcon1,
          title: "+7 (926) 223-10-11",
        },
        {
          id: 2,
          alt: "location",
          img: FooterIcon2,
          title: "Москва, ул. Юных Ленинцев, д.99",
        },
      ],
    },
  ];

  return (
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
          {footerData.length > 0 &&
            footerData.map((el: TfooterDataOuside) => {
              return (
                <li className="footer__item" key={el.id}>
                  <h4 className="footer__item-heading">{el.title}</h4>
                  <ul className="footer-categories">
                    {el.data.length > 0 &&
                      el.data.map((el: TfooterDataInside) => {
                        return (
                          <li className="footer-categories__item" key={el.id}>
                            <a
                              href="#"
                              className="footer-categories__item-heading"
                            >
                              {el.title}
                            </a>
                          </li>
                        );
                      })}
                  </ul>
                </li>
              );
            })}

          {mediaData.length > 0 &&
            mediaData.map((el: mediaData) => {
              return (
                <li className="footer__item" key={el.id}>
                  <h4 className="footer__item-heading">{el.title}</h4>

                  <ul className="footer-medias">
                    {el.outsideData.length > 0 &&
                      el.outsideData.slice(0, 2).map((el) => {
                        return (
                          <li className="footer-medias__item" key={el.id}>
                            <a href="#" target="_blank">
                              <div className="footer-medias__container">
                                <img
                                  src={el.img}
                                  alt={el.alt}
                                  title={el.title}
                                  className="footer-medias__item-icon"
                                />
                                <h4 className="footer-medias__item-heading">
                                  {el.title}
                                </h4>
                              </div>
                            </a>
                          </li>
                        );
                      })}
                    <ul className="footer-medias__list">
                      {insideData.length > 0 &&
                        insideData.map((el: insideData) => {
                          return (
                            <li className="footer-medias__item" key={el.id}>
                              <a href="#" target="_blank">
                                <div className="footer-medias__container">
                                  <img
                                    src={el.img}
                                    alt={el.alt}
                                    title={el.title}
                                    className="footer-medias__item-icon"
                                  />
                                  <h4 className="footer-medias__item-heading">
                                    {el.title}
                                  </h4>
                                </div>
                              </a>
                            </li>
                          );
                        })}
                    </ul>
                  </ul>
                </li>
              );
            })}
        </ul>
        <div className="footer__copy">
          <h4 className="footer__copy-heading">
            &copy; Copyright {new Date().getFullYear()} — Куда Пицца
          </h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
