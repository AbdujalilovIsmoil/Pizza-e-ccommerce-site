import { useState } from "react";
import { Button } from "components/fields";
import { GroupCardFilter } from "assets/images/svg";
import { FilterModal, ProductModal } from "components/layouts";
import { Card1, Card2, Card3, Card4 } from "assets/images/png";

type TgroupCardData = {
  id: number;
  title: string;
  data: TgroupCardDatas[];
};

type TgroupCardDatas = {
  id: number;
  img: string;
  category: string;
  price: string;
  title: string;
  text: string;
};

const GroupCard = () => {
  const [isOpenFilterModal, setIsOpenFilterModal] = useState<boolean>(false);
  const [isOpenProductModal, setIsOpenProductModal] = useState<boolean>(false);

  if (isOpenFilterModal) {
    document.body.classList.add("hidden");
  } else {
    document.body.classList.remove("hidden");
  }

  const groupCardData: TgroupCardData[] = [
    {
      id: 1,
      title: "Пицца",
      data: [
        {
          id: 1,
          img: Card1,
          category: "NEW",
          price: "от 399 ₽",
          title: "Чикен Сладкий Чили",
          text: "Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...",
        },
        {
          id: 2,
          img: Card2,
          category: "ХИТ",
          price: "от 399 ₽",
          title: "EASY PEASY огуречный расколбас",
          text: "Курица, Лук, Перец Халапеньо...",
        },
        {
          id: 3,
          img: Card3,
          category: "",
          price: "от 399 ₽",
          title: "EASY PEASY чикен а-ля хрен",
          text: "Курица, Лук, Перец Халапеньо...",
        },
        {
          id: 4,
          img: Card4,
          category: "",
          price: "от 399 ₽",
          title: "4 сезона",
          text: "Бекон, Ветчина, Грибы, Курица, Лук, Маслины, Огурцы мари...",
        },
        {
          id: 5,
          img: Card1,
          category: "NEW",
          price: "от 399 ₽",
          title: "Чикен Сладкий Чили",
          text: "Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...",
        },
        {
          id: 6,
          img: Card2,
          category: "ХИТ",
          price: "от 399 ₽",
          title: "EASY PEASY огуречный расколбас",
          text: "Курица, Лук, Перец Халапеньо...",
        },
        {
          id: 7,
          img: Card3,
          category: "",
          price: "от 399 ₽",
          title: "EASY PEASY чикен а-ля хрен",
          text: "Курица, Лук, Перец Халапеньо...",
        },
        {
          id: 8,
          img: Card4,
          category: "",
          price: "от 399 ₽",
          title: "4 сезона",
          text: "Бекон, Ветчина, Грибы, Курица, Лук, Маслины, Огурцы мари...",
        },
      ],
    },
    {
      id: 2,
      title: "Пицца",
      data: [
        {
          id: 1,
          img: Card1,
          category: "NEW",
          price: "от 399 ₽",
          title: "Чикен Сладкий Чили",
          text: "Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...",
        },
        {
          id: 2,
          img: Card2,
          category: "ХИТ",
          price: "от 399 ₽",
          title: "EASY PEASY огуречный расколбас",
          text: "Курица, Лук, Перец Халапеньо...",
        },
        {
          id: 3,
          img: Card3,
          category: "",
          price: "от 399 ₽",
          title: "EASY PEASY чикен а-ля хрен",
          text: "Курица, Лук, Перец Халапеньо...",
        },
        {
          id: 4,
          img: Card4,
          category: "",
          price: "от 399 ₽",
          title: "4 сезона",
          text: "Бекон, Ветчина, Грибы, Курица, Лук, Маслины, Огурцы мари...",
        },
        {
          id: 5,
          img: Card1,
          category: "NEW",
          price: "от 399 ₽",
          title: "Чикен Сладкий Чили",
          text: "Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...",
        },
        {
          id: 6,
          img: Card2,
          category: "ХИТ",
          price: "от 399 ₽",
          title: "EASY PEASY огуречный расколбас",
          text: "Курица, Лук, Перец Халапеньо...",
        },
        {
          id: 7,
          img: Card3,
          category: "",
          price: "от 399 ₽",
          title: "EASY PEASY чикен а-ля хрен",
          text: "Курица, Лук, Перец Халапеньо...",
        },
        {
          id: 8,
          img: Card4,
          category: "",
          price: "от 399 ₽",
          title: "4 сезона",
          text: "Бекон, Ветчина, Грибы, Курица, Лук, Маслины, Огурцы мари...",
        },
      ],
    },
    {
      id: 3,
      title: "Пицца",
      data: [
        {
          id: 1,
          img: Card1,
          category: "NEW",
          price: "от 399 ₽",
          title: "Чикен Сладкий Чили",
          text: "Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...",
        },
        {
          id: 2,
          img: Card2,
          category: "ХИТ",
          price: "от 399 ₽",
          title: "EASY PEASY огуречный расколбас",
          text: "Курица, Лук, Перец Халапеньо...",
        },
        {
          id: 3,
          img: Card3,
          category: "",
          price: "от 399 ₽",
          title: "EASY PEASY чикен а-ля хрен",
          text: "Курица, Лук, Перец Халапеньо...",
        },
        {
          id: 4,
          img: Card4,
          category: "",
          price: "от 399 ₽",
          title: "4 сезона",
          text: "Бекон, Ветчина, Грибы, Курица, Лук, Маслины, Огурцы мари...",
        },
        {
          id: 5,
          img: Card1,
          category: "NEW",
          price: "от 399 ₽",
          title: "Чикен Сладкий Чили",
          text: "Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...",
        },
        {
          id: 6,
          img: Card2,
          category: "ХИТ",
          price: "от 399 ₽",
          title: "EASY PEASY огуречный расколбас",
          text: "Курица, Лук, Перец Халапеньо...",
        },
        {
          id: 7,
          img: Card3,
          category: "",
          price: "от 399 ₽",
          title: "EASY PEASY чикен а-ля хрен",
          text: "Курица, Лук, Перец Халапеньо...",
        },
        {
          id: 8,
          img: Card4,
          category: "",
          price: "от 399 ₽",
          title: "4 сезона",
          text: "Бекон, Ветчина, Грибы, Курица, Лук, Маслины, Огурцы мари...",
        },
      ],
    },
    {
      id: 4,
      title: "Пицца",
      data: [
        {
          id: 1,
          img: Card1,
          category: "NEW",
          price: "от 399 ₽",
          title: "Чикен Сладкий Чили",
          text: "Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...",
        },
        {
          id: 2,
          img: Card2,
          category: "ХИТ",
          price: "от 399 ₽",
          title: "EASY PEASY огуречный расколбас",
          text: "Курица, Лук, Перец Халапеньо...",
        },
        {
          id: 3,
          img: Card3,
          category: "",
          price: "от 399 ₽",
          title: "EASY PEASY чикен а-ля хрен",
          text: "Курица, Лук, Перец Халапеньо...",
        },
        {
          id: 4,
          img: Card4,
          category: "",
          price: "от 399 ₽",
          title: "4 сезона",
          text: "Бекон, Ветчина, Грибы, Курица, Лук, Маслины, Огурцы мари...",
        },
        {
          id: 5,
          img: Card1,
          category: "NEW",
          price: "от 399 ₽",
          title: "Чикен Сладкий Чили",
          text: "Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...",
        },
        {
          id: 6,
          img: Card2,
          category: "ХИТ",
          price: "от 399 ₽",
          title: "EASY PEASY огуречный расколбас",
          text: "Курица, Лук, Перец Халапеньо...",
        },
        {
          id: 7,
          img: Card3,
          category: "",
          price: "от 399 ₽",
          title: "EASY PEASY чикен а-ля хрен",
          text: "Курица, Лук, Перец Халапеньо...",
        },
        {
          id: 8,
          img: Card4,
          category: "",
          price: "от 399 ₽",
          title: "4 сезона",
          text: "Бекон, Ветчина, Грибы, Курица, Лук, Маслины, Огурцы мари...",
        },
      ],
    },
    {
      id: 5,
      title: "Пицца",
      data: [
        {
          id: 1,
          img: Card1,
          category: "NEW",
          price: "от 399 ₽",
          title: "Чикен Сладкий Чили",
          text: "Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...",
        },
        {
          id: 2,
          img: Card2,
          category: "ХИТ",
          price: "от 399 ₽",
          title: "EASY PEASY огуречный расколбас",
          text: "Курица, Лук, Перец Халапеньо...",
        },
        {
          id: 3,
          img: Card3,
          category: "",
          price: "от 399 ₽",
          title: "EASY PEASY чикен а-ля хрен",
          text: "Курица, Лук, Перец Халапеньо...",
        },
        {
          id: 4,
          img: Card4,
          category: "",
          price: "от 399 ₽",
          title: "4 сезона",
          text: "Бекон, Ветчина, Грибы, Курица, Лук, Маслины, Огурцы мари...",
        },
        {
          id: 5,
          img: Card1,
          category: "NEW",
          price: "от 399 ₽",
          title: "Чикен Сладкий Чили",
          text: "Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...",
        },
        {
          id: 6,
          img: Card2,
          category: "ХИТ",
          price: "от 399 ₽",
          title: "EASY PEASY огуречный расколбас",
          text: "Курица, Лук, Перец Халапеньо...",
        },
        {
          id: 7,
          img: Card3,
          category: "",
          price: "от 399 ₽",
          title: "EASY PEASY чикен а-ля хрен",
          text: "Курица, Лук, Перец Халапеньо...",
        },
        {
          id: 8,
          img: Card4,
          category: "",
          price: "от 399 ₽",
          title: "4 сезона",
          text: "Бекон, Ветчина, Грибы, Курица, Лук, Маслины, Огурцы мари...",
        },
      ],
    },
    {
      id: 6,
      title: "Пицца",
      data: [
        {
          id: 1,
          img: Card1,
          category: "NEW",
          price: "от 399 ₽",
          title: "Чикен Сладкий Чили",
          text: "Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...",
        },
        {
          id: 2,
          img: Card2,
          category: "ХИТ",
          price: "от 399 ₽",
          title: "EASY PEASY огуречный расколбас",
          text: "Курица, Лук, Перец Халапеньо...",
        },
        {
          id: 3,
          img: Card3,
          category: "",
          price: "от 399 ₽",
          title: "EASY PEASY чикен а-ля хрен",
          text: "Курица, Лук, Перец Халапеньо...",
        },
        {
          id: 4,
          img: Card4,
          category: "",
          price: "от 399 ₽",
          title: "4 сезона",
          text: "Бекон, Ветчина, Грибы, Курица, Лук, Маслины, Огурцы мари...",
        },
        {
          id: 5,
          img: Card1,
          category: "NEW",
          price: "от 399 ₽",
          title: "Чикен Сладкий Чили",
          text: "Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...",
        },
        {
          id: 6,
          img: Card2,
          category: "ХИТ",
          price: "от 399 ₽",
          title: "EASY PEASY огуречный расколбас",
          text: "Курица, Лук, Перец Халапеньо...",
        },
        {
          id: 7,
          img: Card3,
          category: "",
          price: "от 399 ₽",
          title: "EASY PEASY чикен а-ля хрен",
          text: "Курица, Лук, Перец Халапеньо...",
        },
        {
          id: 8,
          img: Card4,
          category: "",
          price: "от 399 ₽",
          title: "4 сезона",
          text: "Бекон, Ветчина, Грибы, Курица, Лук, Маслины, Огурцы мари...",
        },
      ],
    },
    {
      id: 7,
      title: "Пицца",
      data: [
        {
          id: 1,
          img: Card1,
          category: "NEW",
          price: "от 399 ₽",
          title: "Чикен Сладкий Чили",
          text: "Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...",
        },
        {
          id: 2,
          img: Card2,
          category: "ХИТ",
          price: "от 399 ₽",
          title: "EASY PEASY огуречный расколбас",
          text: "Курица, Лук, Перец Халапеньо...",
        },
        {
          id: 3,
          img: Card3,
          category: "",
          price: "от 399 ₽",
          title: "EASY PEASY чикен а-ля хрен",
          text: "Курица, Лук, Перец Халапеньо...",
        },
        {
          id: 4,
          img: Card4,
          category: "",
          price: "от 399 ₽",
          title: "4 сезона",
          text: "Бекон, Ветчина, Грибы, Курица, Лук, Маслины, Огурцы мари...",
        },
        {
          id: 5,
          img: Card1,
          category: "NEW",
          price: "от 399 ₽",
          title: "Чикен Сладкий Чили",
          text: "Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...",
        },
        {
          id: 6,
          img: Card2,
          category: "ХИТ",
          price: "от 399 ₽",
          title: "EASY PEASY огуречный расколбас",
          text: "Курица, Лук, Перец Халапеньо...",
        },
        {
          id: 7,
          img: Card3,
          category: "",
          price: "от 399 ₽",
          title: "EASY PEASY чикен а-ля хрен",
          text: "Курица, Лук, Перец Халапеньо...",
        },
        {
          id: 8,
          img: Card4,
          category: "",
          price: "от 399 ₽",
          title: "4 сезона",
          text: "Бекон, Ветчина, Грибы, Курица, Лук, Маслины, Огурцы мари...",
        },
      ],
    },
  ];

  return (
    <>
      <section className="group-card">
        <ProductModal
          isOpenProductModal={isOpenProductModal}
          setIsOpenProductModal={setIsOpenProductModal}
        />
        <FilterModal
          isOpenFilterModal={isOpenFilterModal}
          setIsOpenFilterModal={setIsOpenFilterModal}
        />
        <div className="container">
          <ul className="group-card__list">
            {groupCardData.length > 0 &&
              groupCardData.map((el: TgroupCardData) => {
                return (
                  <li className="group-card__item" key={el.id}>
                    <div className="group-card__header">
                      <div className="group-card__box">
                        <h2 className="group-card__box-heading">{el.title}</h2>
                      </div>
                      <div className="group-card__box">
                        <Button
                          className="group-card__filter"
                          type="button"
                          onClick={() => setIsOpenFilterModal(true)}
                        >
                          <img
                            src={GroupCardFilter}
                            alt="group-card-filter"
                            className="group-card__filter-img"
                          />
                          <h4 className="group-card__filter-heading">
                            Фильтры
                          </h4>
                        </Button>
                      </div>
                    </div>
                    <ul className="cards">
                      {el.data.length > 0 &&
                        el.data.map((el: TgroupCardDatas) => {
                          return (
                            <li className="cards__item">
                              <div className="cards__image">
                                <div className="cards__category">
                                  <h4 className="cards__category-heading">
                                    {el.category}
                                  </h4>
                                </div>
                                <img
                                  src={el.img}
                                  alt="card-1"
                                  title="card-1"
                                  className="cards__image-img"
                                />
                              </div>
                              <div className="cards__content">
                                <h4 className="cards__content-title">
                                  {el.title}
                                </h4>
                                <h4 className="cards__content-text">
                                  {el.text}
                                </h4>
                                <div className="cards-footer">
                                  <div className="cards-footer__box">
                                    <Button
                                      type="button"
                                      className="cards-footer__box-btn"
                                      onClick={() =>
                                        setIsOpenProductModal(true)
                                      }
                                    >
                                      Выбрать
                                    </Button>
                                  </div>
                                  <div className="cards-footer__box">
                                    <h4 className="cards-footer__box-heading">
                                      {el.price}
                                    </h4>
                                  </div>
                                </div>
                              </div>
                            </li>
                          );
                        })}
                    </ul>
                  </li>
                );
              })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default GroupCard;
