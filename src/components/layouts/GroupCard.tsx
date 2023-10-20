import { useState } from "react";
import { Button } from "components/fields";
import { GroupCardFilter } from "assets/images/svg";
import { FilterModal, ProductModal } from "components/layouts";
import { Card1, Card2, Card3, Card4 } from "assets/images/png";
import { useGet } from "hook";
import { get } from "lodash";

type TgroupCardData = {
  id: number;
  title: string;
  data: TgroupCardDatas[];
};

type TgroupCardDatas = {
  id: number;
  img: string;
  text: string;
  price: string;
  title: string;
  category: string;
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

  const { data } = useGet({
    path: "/product",
    queryKey: "product"
  });

  console.log(get(data, "allProduct"));
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
            {get(data, "allProduct", []).length > 0 && get(data, "allProduct", []).map((el: any) => {
              return <li className="group-card__item" key={el._id}>
                <div className="group-card__header">
                  <div className="group-card__box">
                    <h2 className="group-card__box-heading">{el.tags}</h2>
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
                  <li className="cards__item" key={el.id}>
                    <div className="cards__image">
                      <img
                        src={el.images["home"]}
                        alt="card-1"
                        title="card-1"
                        className="cards__image-img"
                      />
                    </div>
                    <div className="cards__content">
                      <h4 className="cards__content-title">
                        {el.name}
                      </h4>
                      <h4 className="cards__content-text">
                        {el.description}
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
                            от {el.price} ₽
                          </h4>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default GroupCard;
