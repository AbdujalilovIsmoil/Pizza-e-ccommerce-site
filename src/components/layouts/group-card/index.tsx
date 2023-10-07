import { useState } from "react";
import { Button } from "components/fields";
import { FilterModal } from "components/layouts";
import { GroupCardFilter } from "assets/images/svg";
import { Card1, Card2, Card3, Card4 } from "assets/images/png";

const index = () => {
  const [isOpenFilterModal, setIsOpenFilterModal] = useState<boolean>(false);

  if (isOpenFilterModal) {
    document.body.classList.add("hidden");
  } else {
    document.body.classList.remove("hidden");
  }

  return (
    <>
      <section className="group-card">
        <FilterModal
          isOpenFilterModal={isOpenFilterModal}
          setIsOpenFilterModal={setIsOpenFilterModal}
        />
        <div className="container">
          <ul className="group-card__list">
            <li className="group-card__item">
              <div className="group-card__header">
                <div className="group-card__box">
                  <h2 className="group-card__box-heading">Пицца</h2>
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
                    <h4 className="group-card__filter-heading">Фильтры</h4>
                  </Button>
                </div>
              </div>
              <ul className="cards">
                <li className="cards__item">
                  <div className="cards__image">
                    <div className="cards__category">
                      <h4 className="cards__category-heading">NEW</h4>
                    </div>
                    <img
                      src={Card1}
                      alt="card-1"
                      title="card-1"
                      className="cards__image-img"
                    />
                  </div>
                  <div className="cards__content">
                    <h4 className="cards__content-title">Чикен Сладкий Чили</h4>
                    <h4 className="cards__content-text">
                      Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный
                      соу...
                    </h4>
                    <div className="cards-footer">
                      <div className="cards-footer__box">
                        <Button className="cards-footer__box-btn" type="button">
                          Выбрать
                        </Button>
                      </div>
                      <div className="cards-footer__box">
                        <h4 className="cards-footer__box-heading">от 399 ₽</h4>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="cards__item">
                  <div className="cards__image">
                    <div className="cards__category">
                      <h4 className="cards__category-heading">ХИТ</h4>
                    </div>
                    <img
                      src={Card2}
                      alt="card-2"
                      title="card-2"
                      className="cards__image-img"
                    />
                  </div>
                  <div className="cards__content">
                    <h4 className="cards__content-title">
                      EASY PEASY огуречный расколбас
                    </h4>
                    <h4 className="cards__content-text">
                      Курица, Лук, Перец Халапеньо...
                    </h4>
                    <div className="cards-footer">
                      <div className="cards-footer__box">
                        <Button className="cards-footer__box-btn" type="button">
                          Выбрать
                        </Button>
                      </div>
                      <div className="cards-footer__box">
                        <h4 className="cards-footer__box-heading">от 549 ₽</h4>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="cards__item">
                  <div className="cards__image">
                    <img
                      src={Card3}
                      alt="card-3"
                      title="card-3"
                      className="cards__image-img"
                    />
                  </div>
                  <div className="cards__content">
                    <h4 className="cards__content-title">
                      EASY PEASY чикен а-ля хрен
                    </h4>
                    <h4 className="cards__content-text">
                      Курица, Лук, Соус Карбонара,...
                    </h4>
                    <div className="cards-footer">
                      <div className="cards-footer__box">
                        <Button className="cards-footer__box-btn" type="button">
                          Выбрать
                        </Button>
                      </div>
                      <div className="cards-footer__box">
                        <h4 className="cards-footer__box-heading">от 249 ₽</h4>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="cards__item">
                  <div className="cards__image">
                    <img
                      src={Card4}
                      alt="card-4"
                      title="card-4"
                      className="cards__image-img"
                    />
                  </div>
                  <div className="cards__content">
                    <h4 className="cards__content-title">4 сезона</h4>
                    <h4 className="cards__content-text">
                      Бекон, Ветчина, Грибы, Курица, Лук, Маслины, Огурцы
                      мари...
                    </h4>
                    <div className="cards-footer">
                      <div className="cards-footer__box">
                        <Button className="cards-footer__box-btn" type="button">
                          Выбрать
                        </Button>
                      </div>
                      <div className="cards-footer__box">
                        <h4 className="cards-footer__box-heading">от 630 ₽</h4>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="cards__item">
                  <div className="cards__image">
                    <img
                      src={Card4}
                      alt="card-4"
                      title="card-4"
                      className="cards__image-img"
                    />
                  </div>
                  <div className="cards__content">
                    <h4 className="cards__content-title">4 сезона</h4>
                    <h4 className="cards__content-text">
                      Бекон, Ветчина, Грибы, Курица, Лук, Маслины, Огурцы
                      мари...
                    </h4>
                    <div className="cards-footer">
                      <div className="cards-footer__box">
                        <Button className="cards-footer__box-btn" type="button">
                          Выбрать
                        </Button>
                      </div>
                      <div className="cards-footer__box">
                        <h4 className="cards-footer__box-heading">от 630 ₽</h4>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="cards__item">
                  <div className="cards__image">
                    <img
                      src={Card3}
                      alt="card-3"
                      title="card-3"
                      className="cards__image-img"
                    />
                  </div>
                  <div className="cards__content">
                    <h4 className="cards__content-title">
                      EASY PEASY чикен а-ля хрен
                    </h4>
                    <h4 className="cards__content-text">
                      Курица, Лук, Соус Карбонара,...
                    </h4>
                    <div className="cards-footer">
                      <div className="cards-footer__box">
                        <Button className="cards-footer__box-btn" type="button">
                          Выбрать
                        </Button>
                      </div>
                      <div className="cards-footer__box">
                        <h4 className="cards-footer__box-heading">от 249 ₽</h4>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="cards__item">
                  <div className="cards__image">
                    <div className="cards__category">
                      <h4 className="cards__category-heading">NEW</h4>
                    </div>
                    <img
                      src={Card1}
                      alt="card-1"
                      title="card-1"
                      className="cards__image-img"
                    />
                  </div>
                  <div className="cards__content">
                    <h4 className="cards__content-title">Чикен Сладкий Чили</h4>
                    <h4 className="cards__content-text">
                      Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный
                      соу...
                    </h4>
                    <div className="cards-footer">
                      <div className="cards-footer__box">
                        <Button className="cards-footer__box-btn" type="button">
                          Выбрать
                        </Button>
                      </div>
                      <div className="cards-footer__box">
                        <h4 className="cards-footer__box-heading">от 399 ₽</h4>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="cards__item">
                  <div className="cards__image">
                    <div className="cards__category">
                      <h4 className="cards__category-heading">ХИТ</h4>
                    </div>
                    <img
                      src={Card2}
                      alt="card-2"
                      title="card-2"
                      className="cards__image-img"
                    />
                  </div>
                  <div className="cards__content">
                    <h4 className="cards__content-title">
                      EASY PEASY огуречный расколбас
                    </h4>
                    <h4 className="cards__content-text">
                      Курица, Лук, Перец Халапеньо...
                    </h4>
                    <div className="cards-footer">
                      <div className="cards-footer__box">
                        <Button className="cards-footer__box-btn" type="button">
                          Выбрать
                        </Button>
                      </div>
                      <div className="cards-footer__box">
                        <h4 className="cards-footer__box-heading">от 549 ₽</h4>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
            <li className="group-card__item">
              <div className="group-card__header">
                <div className="group-card__box">
                  <h2 className="group-card__box-heading">Пицца</h2>
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
                    <h4 className="group-card__filter-heading">Фильтры</h4>
                  </Button>
                </div>
              </div>
              <ul className="cards">
                <li className="cards__item">
                  <div className="cards__image">
                    <div className="cards__category">
                      <h4 className="cards__category-heading">NEW</h4>
                    </div>
                    <img
                      src={Card1}
                      alt="card-1"
                      title="card-1"
                      className="cards__image-img"
                    />
                  </div>
                  <div className="cards__content">
                    <h4 className="cards__content-title">Чикен Сладкий Чили</h4>
                    <h4 className="cards__content-text">
                      Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный
                      соу...
                    </h4>
                    <div className="cards-footer">
                      <div className="cards-footer__box">
                        <Button className="cards-footer__box-btn" type="button">
                          Выбрать
                        </Button>
                      </div>
                      <div className="cards-footer__box">
                        <h4 className="cards-footer__box-heading">от 399 ₽</h4>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="cards__item">
                  <div className="cards__image">
                    <div className="cards__category">
                      <h4 className="cards__category-heading">ХИТ</h4>
                    </div>
                    <img
                      src={Card2}
                      alt="card-2"
                      title="card-2"
                      className="cards__image-img"
                    />
                  </div>
                  <div className="cards__content">
                    <h4 className="cards__content-title">
                      EASY PEASY огуречный расколбас
                    </h4>
                    <h4 className="cards__content-text">
                      Курица, Лук, Перец Халапеньо...
                    </h4>
                    <div className="cards-footer">
                      <div className="cards-footer__box">
                        <Button className="cards-footer__box-btn" type="button">
                          Выбрать
                        </Button>
                      </div>
                      <div className="cards-footer__box">
                        <h4 className="cards-footer__box-heading">от 549 ₽</h4>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="cards__item">
                  <div className="cards__image">
                    <img
                      src={Card3}
                      alt="card-3"
                      title="card-3"
                      className="cards__image-img"
                    />
                  </div>
                  <div className="cards__content">
                    <h4 className="cards__content-title">
                      EASY PEASY чикен а-ля хрен
                    </h4>
                    <h4 className="cards__content-text">
                      Курица, Лук, Соус Карбонара,...
                    </h4>
                    <div className="cards-footer">
                      <div className="cards-footer__box">
                        <Button className="cards-footer__box-btn" type="button">
                          Выбрать
                        </Button>
                      </div>
                      <div className="cards-footer__box">
                        <h4 className="cards-footer__box-heading">от 249 ₽</h4>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="cards__item">
                  <div className="cards__image">
                    <img
                      src={Card4}
                      alt="card-4"
                      title="card-4"
                      className="cards__image-img"
                    />
                  </div>
                  <div className="cards__content">
                    <h4 className="cards__content-title">4 сезона</h4>
                    <h4 className="cards__content-text">
                      Бекон, Ветчина, Грибы, Курица, Лук, Маслины, Огурцы
                      мари...
                    </h4>
                    <div className="cards-footer">
                      <div className="cards-footer__box">
                        <Button className="cards-footer__box-btn" type="button">
                          Выбрать
                        </Button>
                      </div>
                      <div className="cards-footer__box">
                        <h4 className="cards-footer__box-heading">от 630 ₽</h4>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="cards__item">
                  <div className="cards__image">
                    <img
                      src={Card4}
                      alt="card-4"
                      title="card-4"
                      className="cards__image-img"
                    />
                  </div>
                  <div className="cards__content">
                    <h4 className="cards__content-title">4 сезона</h4>
                    <h4 className="cards__content-text">
                      Бекон, Ветчина, Грибы, Курица, Лук, Маслины, Огурцы
                      мари...
                    </h4>
                    <div className="cards-footer">
                      <div className="cards-footer__box">
                        <Button className="cards-footer__box-btn" type="button">
                          Выбрать
                        </Button>
                      </div>
                      <div className="cards-footer__box">
                        <h4 className="cards-footer__box-heading">от 630 ₽</h4>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="cards__item">
                  <div className="cards__image">
                    <img
                      src={Card3}
                      alt="card-3"
                      title="card-3"
                      className="cards__image-img"
                    />
                  </div>
                  <div className="cards__content">
                    <h4 className="cards__content-title">
                      EASY PEASY чикен а-ля хрен
                    </h4>
                    <h4 className="cards__content-text">
                      Курица, Лук, Соус Карбонара,...
                    </h4>
                    <div className="cards-footer">
                      <div className="cards-footer__box">
                        <Button className="cards-footer__box-btn" type="button">
                          Выбрать
                        </Button>
                      </div>
                      <div className="cards-footer__box">
                        <h4 className="cards-footer__box-heading">от 249 ₽</h4>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="cards__item">
                  <div className="cards__image">
                    <div className="cards__category">
                      <h4 className="cards__category-heading">NEW</h4>
                    </div>
                    <img
                      src={Card1}
                      alt="card-1"
                      title="card-1"
                      className="cards__image-img"
                    />
                  </div>
                  <div className="cards__content">
                    <h4 className="cards__content-title">Чикен Сладкий Чили</h4>
                    <h4 className="cards__content-text">
                      Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный
                      соу...
                    </h4>
                    <div className="cards-footer">
                      <div className="cards-footer__box">
                        <Button className="cards-footer__box-btn" type="button">
                          Выбрать
                        </Button>
                      </div>
                      <div className="cards-footer__box">
                        <h4 className="cards-footer__box-heading">от 399 ₽</h4>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="cards__item">
                  <div className="cards__image">
                    <div className="cards__category">
                      <h4 className="cards__category-heading">ХИТ</h4>
                    </div>
                    <img
                      src={Card2}
                      alt="card-2"
                      title="card-2"
                      className="cards__image-img"
                    />
                  </div>
                  <div className="cards__content">
                    <h4 className="cards__content-title">
                      EASY PEASY огуречный расколбас
                    </h4>
                    <h4 className="cards__content-text">
                      Курица, Лук, Перец Халапеньо...
                    </h4>
                    <div className="cards-footer">
                      <div className="cards-footer__box">
                        <Button className="cards-footer__box-btn" type="button">
                          Выбрать
                        </Button>
                      </div>
                      <div className="cards-footer__box">
                        <h4 className="cards-footer__box-heading">от 549 ₽</h4>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
            <li className="group-card__item">
              <div className="group-card__header">
                <div className="group-card__box">
                  <h2 className="group-card__box-heading">Пицца</h2>
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
                    <h4 className="group-card__filter-heading">Фильтры</h4>
                  </Button>
                </div>
              </div>
              <ul className="cards">
                <li className="cards__item">
                  <div className="cards__image">
                    <div className="cards__category">
                      <h4 className="cards__category-heading">NEW</h4>
                    </div>
                    <img
                      src={Card1}
                      alt="card-1"
                      title="card-1"
                      className="cards__image-img"
                    />
                  </div>
                  <div className="cards__content">
                    <h4 className="cards__content-title">Чикен Сладкий Чили</h4>
                    <h4 className="cards__content-text">
                      Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный
                      соу...
                    </h4>
                    <div className="cards-footer">
                      <div className="cards-footer__box">
                        <Button className="cards-footer__box-btn" type="button">
                          Выбрать
                        </Button>
                      </div>
                      <div className="cards-footer__box">
                        <h4 className="cards-footer__box-heading">от 399 ₽</h4>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="cards__item">
                  <div className="cards__image">
                    <div className="cards__category">
                      <h4 className="cards__category-heading">ХИТ</h4>
                    </div>
                    <img
                      src={Card2}
                      alt="card-2"
                      title="card-2"
                      className="cards__image-img"
                    />
                  </div>
                  <div className="cards__content">
                    <h4 className="cards__content-title">
                      EASY PEASY огуречный расколбас
                    </h4>
                    <h4 className="cards__content-text">
                      Курица, Лук, Перец Халапеньо...
                    </h4>
                    <div className="cards-footer">
                      <div className="cards-footer__box">
                        <Button className="cards-footer__box-btn" type="button">
                          Выбрать
                        </Button>
                      </div>
                      <div className="cards-footer__box">
                        <h4 className="cards-footer__box-heading">от 549 ₽</h4>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="cards__item">
                  <div className="cards__image">
                    <img
                      src={Card3}
                      alt="card-3"
                      title="card-3"
                      className="cards__image-img"
                    />
                  </div>
                  <div className="cards__content">
                    <h4 className="cards__content-title">
                      EASY PEASY чикен а-ля хрен
                    </h4>
                    <h4 className="cards__content-text">
                      Курица, Лук, Соус Карбонара,...
                    </h4>
                    <div className="cards-footer">
                      <div className="cards-footer__box">
                        <Button className="cards-footer__box-btn" type="button">
                          Выбрать
                        </Button>
                      </div>
                      <div className="cards-footer__box">
                        <h4 className="cards-footer__box-heading">от 249 ₽</h4>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="cards__item">
                  <div className="cards__image">
                    <img
                      src={Card4}
                      alt="card-4"
                      title="card-4"
                      className="cards__image-img"
                    />
                  </div>
                  <div className="cards__content">
                    <h4 className="cards__content-title">4 сезона</h4>
                    <h4 className="cards__content-text">
                      Бекон, Ветчина, Грибы, Курица, Лук, Маслины, Огурцы
                      мари...
                    </h4>
                    <div className="cards-footer">
                      <div className="cards-footer__box">
                        <Button className="cards-footer__box-btn" type="button">
                          Выбрать
                        </Button>
                      </div>
                      <div className="cards-footer__box">
                        <h4 className="cards-footer__box-heading">от 630 ₽</h4>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="cards__item">
                  <div className="cards__image">
                    <img
                      src={Card4}
                      alt="card-4"
                      title="card-4"
                      className="cards__image-img"
                    />
                  </div>
                  <div className="cards__content">
                    <h4 className="cards__content-title">4 сезона</h4>
                    <h4 className="cards__content-text">
                      Бекон, Ветчина, Грибы, Курица, Лук, Маслины, Огурцы
                      мари...
                    </h4>
                    <div className="cards-footer">
                      <div className="cards-footer__box">
                        <Button className="cards-footer__box-btn" type="button">
                          Выбрать
                        </Button>
                      </div>
                      <div className="cards-footer__box">
                        <h4 className="cards-footer__box-heading">от 630 ₽</h4>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="cards__item">
                  <div className="cards__image">
                    <img
                      src={Card3}
                      alt="card-3"
                      title="card-3"
                      className="cards__image-img"
                    />
                  </div>
                  <div className="cards__content">
                    <h4 className="cards__content-title">
                      EASY PEASY чикен а-ля хрен
                    </h4>
                    <h4 className="cards__content-text">
                      Курица, Лук, Соус Карбонара,...
                    </h4>
                    <div className="cards-footer">
                      <div className="cards-footer__box">
                        <Button className="cards-footer__box-btn" type="button">
                          Выбрать
                        </Button>
                      </div>
                      <div className="cards-footer__box">
                        <h4 className="cards-footer__box-heading">от 249 ₽</h4>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="cards__item">
                  <div className="cards__image">
                    <div className="cards__category">
                      <h4 className="cards__category-heading">NEW</h4>
                    </div>
                    <img
                      src={Card1}
                      alt="card-1"
                      title="card-1"
                      className="cards__image-img"
                    />
                  </div>
                  <div className="cards__content">
                    <h4 className="cards__content-title">Чикен Сладкий Чили</h4>
                    <h4 className="cards__content-text">
                      Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный
                      соу...
                    </h4>
                    <div className="cards-footer">
                      <div className="cards-footer__box">
                        <Button className="cards-footer__box-btn" type="button">
                          Выбрать
                        </Button>
                      </div>
                      <div className="cards-footer__box">
                        <h4 className="cards-footer__box-heading">от 399 ₽</h4>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="cards__item">
                  <div className="cards__image">
                    <div className="cards__category">
                      <h4 className="cards__category-heading">ХИТ</h4>
                    </div>
                    <img
                      src={Card2}
                      alt="card-2"
                      title="card-2"
                      className="cards__image-img"
                    />
                  </div>
                  <div className="cards__content">
                    <h4 className="cards__content-title">
                      EASY PEASY огуречный расколбас
                    </h4>
                    <h4 className="cards__content-text">
                      Курица, Лук, Перец Халапеньо...
                    </h4>
                    <div className="cards-footer">
                      <div className="cards-footer__box">
                        <Button className="cards-footer__box-btn" type="button">
                          Выбрать
                        </Button>
                      </div>
                      <div className="cards-footer__box">
                        <h4 className="cards-footer__box-heading">от 549 ₽</h4>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
            <li className="group-card__item">
              <div className="group-card__header">
                <div className="group-card__box">
                  <h2 className="group-card__box-heading">Пицца</h2>
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
                    <h4 className="group-card__filter-heading">Фильтры</h4>
                  </Button>
                </div>
              </div>
              <ul className="cards">
                <li className="cards__item">
                  <div className="cards__image">
                    <div className="cards__category">
                      <h4 className="cards__category-heading">NEW</h4>
                    </div>
                    <img
                      src={Card1}
                      alt="card-1"
                      title="card-1"
                      className="cards__image-img"
                    />
                  </div>
                  <div className="cards__content">
                    <h4 className="cards__content-title">Чикен Сладкий Чили</h4>
                    <h4 className="cards__content-text">
                      Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный
                      соу...
                    </h4>
                    <div className="cards-footer">
                      <div className="cards-footer__box">
                        <Button className="cards-footer__box-btn" type="button">
                          Выбрать
                        </Button>
                      </div>
                      <div className="cards-footer__box">
                        <h4 className="cards-footer__box-heading">от 399 ₽</h4>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="cards__item">
                  <div className="cards__image">
                    <div className="cards__category">
                      <h4 className="cards__category-heading">ХИТ</h4>
                    </div>
                    <img
                      src={Card2}
                      alt="card-2"
                      title="card-2"
                      className="cards__image-img"
                    />
                  </div>
                  <div className="cards__content">
                    <h4 className="cards__content-title">
                      EASY PEASY огуречный расколбас
                    </h4>
                    <h4 className="cards__content-text">
                      Курица, Лук, Перец Халапеньо...
                    </h4>
                    <div className="cards-footer">
                      <div className="cards-footer__box">
                        <Button className="cards-footer__box-btn" type="button">
                          Выбрать
                        </Button>
                      </div>
                      <div className="cards-footer__box">
                        <h4 className="cards-footer__box-heading">от 549 ₽</h4>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="cards__item">
                  <div className="cards__image">
                    <img
                      src={Card3}
                      alt="card-3"
                      title="card-3"
                      className="cards__image-img"
                    />
                  </div>
                  <div className="cards__content">
                    <h4 className="cards__content-title">
                      EASY PEASY чикен а-ля хрен
                    </h4>
                    <h4 className="cards__content-text">
                      Курица, Лук, Соус Карбонара,...
                    </h4>
                    <div className="cards-footer">
                      <div className="cards-footer__box">
                        <Button className="cards-footer__box-btn" type="button">
                          Выбрать
                        </Button>
                      </div>
                      <div className="cards-footer__box">
                        <h4 className="cards-footer__box-heading">от 249 ₽</h4>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="cards__item">
                  <div className="cards__image">
                    <img
                      src={Card4}
                      alt="card-4"
                      title="card-4"
                      className="cards__image-img"
                    />
                  </div>
                  <div className="cards__content">
                    <h4 className="cards__content-title">4 сезона</h4>
                    <h4 className="cards__content-text">
                      Бекон, Ветчина, Грибы, Курица, Лук, Маслины, Огурцы
                      мари...
                    </h4>
                    <div className="cards-footer">
                      <div className="cards-footer__box">
                        <Button className="cards-footer__box-btn" type="button">
                          Выбрать
                        </Button>
                      </div>
                      <div className="cards-footer__box">
                        <h4 className="cards-footer__box-heading">от 630 ₽</h4>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="cards__item">
                  <div className="cards__image">
                    <img
                      src={Card4}
                      alt="card-4"
                      title="card-4"
                      className="cards__image-img"
                    />
                  </div>
                  <div className="cards__content">
                    <h4 className="cards__content-title">4 сезона</h4>
                    <h4 className="cards__content-text">
                      Бекон, Ветчина, Грибы, Курица, Лук, Маслины, Огурцы
                      мари...
                    </h4>
                    <div className="cards-footer">
                      <div className="cards-footer__box">
                        <Button className="cards-footer__box-btn" type="button">
                          Выбрать
                        </Button>
                      </div>
                      <div className="cards-footer__box">
                        <h4 className="cards-footer__box-heading">от 630 ₽</h4>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="cards__item">
                  <div className="cards__image">
                    <img
                      src={Card3}
                      alt="card-3"
                      title="card-3"
                      className="cards__image-img"
                    />
                  </div>
                  <div className="cards__content">
                    <h4 className="cards__content-title">
                      EASY PEASY чикен а-ля хрен
                    </h4>
                    <h4 className="cards__content-text">
                      Курица, Лук, Соус Карбонара,...
                    </h4>
                    <div className="cards-footer">
                      <div className="cards-footer__box">
                        <Button className="cards-footer__box-btn" type="button">
                          Выбрать
                        </Button>
                      </div>
                      <div className="cards-footer__box">
                        <h4 className="cards-footer__box-heading">от 249 ₽</h4>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="cards__item">
                  <div className="cards__image">
                    <div className="cards__category">
                      <h4 className="cards__category-heading">NEW</h4>
                    </div>
                    <img
                      src={Card1}
                      alt="card-1"
                      title="card-1"
                      className="cards__image-img"
                    />
                  </div>
                  <div className="cards__content">
                    <h4 className="cards__content-title">Чикен Сладкий Чили</h4>
                    <h4 className="cards__content-text">
                      Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный
                      соу...
                    </h4>
                    <div className="cards-footer">
                      <div className="cards-footer__box">
                        <Button className="cards-footer__box-btn" type="button">
                          Выбрать
                        </Button>
                      </div>
                      <div className="cards-footer__box">
                        <h4 className="cards-footer__box-heading">от 399 ₽</h4>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="cards__item">
                  <div className="cards__image">
                    <div className="cards__category">
                      <h4 className="cards__category-heading">ХИТ</h4>
                    </div>
                    <img
                      src={Card2}
                      alt="card-2"
                      title="card-2"
                      className="cards__image-img"
                    />
                  </div>
                  <div className="cards__content">
                    <h4 className="cards__content-title">
                      EASY PEASY огуречный расколбас
                    </h4>
                    <h4 className="cards__content-text">
                      Курица, Лук, Перец Халапеньо...
                    </h4>
                    <div className="cards-footer">
                      <div className="cards-footer__box">
                        <Button className="cards-footer__box-btn" type="button">
                          Выбрать
                        </Button>
                      </div>
                      <div className="cards-footer__box">
                        <h4 className="cards-footer__box-heading">от 549 ₽</h4>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
            <li className="group-card__item">
              <div className="group-card__header">
                <div className="group-card__box">
                  <h2 className="group-card__box-heading">Пицца</h2>
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
                    <h4 className="group-card__filter-heading">Фильтры</h4>
                  </Button>
                </div>
              </div>
              <ul className="cards">
                <li className="cards__item">
                  <div className="cards__image">
                    <div className="cards__category">
                      <h4 className="cards__category-heading">NEW</h4>
                    </div>
                    <img
                      src={Card1}
                      alt="card-1"
                      title="card-1"
                      className="cards__image-img"
                    />
                  </div>
                  <div className="cards__content">
                    <h4 className="cards__content-title">Чикен Сладкий Чили</h4>
                    <h4 className="cards__content-text">
                      Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный
                      соу...
                    </h4>
                    <div className="cards-footer">
                      <div className="cards-footer__box">
                        <Button className="cards-footer__box-btn" type="button">
                          Выбрать
                        </Button>
                      </div>
                      <div className="cards-footer__box">
                        <h4 className="cards-footer__box-heading">от 399 ₽</h4>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="cards__item">
                  <div className="cards__image">
                    <div className="cards__category">
                      <h4 className="cards__category-heading">ХИТ</h4>
                    </div>
                    <img
                      src={Card2}
                      alt="card-2"
                      title="card-2"
                      className="cards__image-img"
                    />
                  </div>
                  <div className="cards__content">
                    <h4 className="cards__content-title">
                      EASY PEASY огуречный расколбас
                    </h4>
                    <h4 className="cards__content-text">
                      Курица, Лук, Перец Халапеньо...
                    </h4>
                    <div className="cards-footer">
                      <div className="cards-footer__box">
                        <Button className="cards-footer__box-btn" type="button">
                          Выбрать
                        </Button>
                      </div>
                      <div className="cards-footer__box">
                        <h4 className="cards-footer__box-heading">от 549 ₽</h4>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="cards__item">
                  <div className="cards__image">
                    <img
                      src={Card3}
                      alt="card-3"
                      title="card-3"
                      className="cards__image-img"
                    />
                  </div>
                  <div className="cards__content">
                    <h4 className="cards__content-title">
                      EASY PEASY чикен а-ля хрен
                    </h4>
                    <h4 className="cards__content-text">
                      Курица, Лук, Соус Карбонара,...
                    </h4>
                    <div className="cards-footer">
                      <div className="cards-footer__box">
                        <Button className="cards-footer__box-btn" type="button">
                          Выбрать
                        </Button>
                      </div>
                      <div className="cards-footer__box">
                        <h4 className="cards-footer__box-heading">от 249 ₽</h4>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="cards__item">
                  <div className="cards__image">
                    <img
                      src={Card4}
                      alt="card-4"
                      title="card-4"
                      className="cards__image-img"
                    />
                  </div>
                  <div className="cards__content">
                    <h4 className="cards__content-title">4 сезона</h4>
                    <h4 className="cards__content-text">
                      Бекон, Ветчина, Грибы, Курица, Лук, Маслины, Огурцы
                      мари...
                    </h4>
                    <div className="cards-footer">
                      <div className="cards-footer__box">
                        <Button className="cards-footer__box-btn" type="button">
                          Выбрать
                        </Button>
                      </div>
                      <div className="cards-footer__box">
                        <h4 className="cards-footer__box-heading">от 630 ₽</h4>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="cards__item">
                  <div className="cards__image">
                    <img
                      src={Card4}
                      alt="card-4"
                      title="card-4"
                      className="cards__image-img"
                    />
                  </div>
                  <div className="cards__content">
                    <h4 className="cards__content-title">4 сезона</h4>
                    <h4 className="cards__content-text">
                      Бекон, Ветчина, Грибы, Курица, Лук, Маслины, Огурцы
                      мари...
                    </h4>
                    <div className="cards-footer">
                      <div className="cards-footer__box">
                        <Button className="cards-footer__box-btn" type="button">
                          Выбрать
                        </Button>
                      </div>
                      <div className="cards-footer__box">
                        <h4 className="cards-footer__box-heading">от 630 ₽</h4>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="cards__item">
                  <div className="cards__image">
                    <img
                      src={Card3}
                      alt="card-3"
                      title="card-3"
                      className="cards__image-img"
                    />
                  </div>
                  <div className="cards__content">
                    <h4 className="cards__content-title">
                      EASY PEASY чикен а-ля хрен
                    </h4>
                    <h4 className="cards__content-text">
                      Курица, Лук, Соус Карбонара,...
                    </h4>
                    <div className="cards-footer">
                      <div className="cards-footer__box">
                        <Button className="cards-footer__box-btn" type="button">
                          Выбрать
                        </Button>
                      </div>
                      <div className="cards-footer__box">
                        <h4 className="cards-footer__box-heading">от 249 ₽</h4>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="cards__item">
                  <div className="cards__image">
                    <div className="cards__category">
                      <h4 className="cards__category-heading">NEW</h4>
                    </div>
                    <img
                      src={Card1}
                      alt="card-1"
                      title="card-1"
                      className="cards__image-img"
                    />
                  </div>
                  <div className="cards__content">
                    <h4 className="cards__content-title">Чикен Сладкий Чили</h4>
                    <h4 className="cards__content-text">
                      Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный
                      соу...
                    </h4>
                    <div className="cards-footer">
                      <div className="cards-footer__box">
                        <Button className="cards-footer__box-btn" type="button">
                          Выбрать
                        </Button>
                      </div>
                      <div className="cards-footer__box">
                        <h4 className="cards-footer__box-heading">от 399 ₽</h4>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="cards__item">
                  <div className="cards__image">
                    <div className="cards__category">
                      <h4 className="cards__category-heading">ХИТ</h4>
                    </div>
                    <img
                      src={Card2}
                      alt="card-2"
                      title="card-2"
                      className="cards__image-img"
                    />
                  </div>
                  <div className="cards__content">
                    <h4 className="cards__content-title">
                      EASY PEASY огуречный расколбас
                    </h4>
                    <h4 className="cards__content-text">
                      Курица, Лук, Перец Халапеньо...
                    </h4>
                    <div className="cards-footer">
                      <div className="cards-footer__box">
                        <Button className="cards-footer__box-btn" type="button">
                          Выбрать
                        </Button>
                      </div>
                      <div className="cards-footer__box">
                        <h4 className="cards-footer__box-heading">от 549 ₽</h4>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
            <li className="group-card__item">
              <div className="group-card__header">
                <div className="group-card__box">
                  <h2 className="group-card__box-heading">Пицца</h2>
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
                    <h4 className="group-card__filter-heading">Фильтры</h4>
                  </Button>
                </div>
              </div>
              <ul className="cards">
                <li className="cards__item">
                  <div className="cards__image">
                    <div className="cards__category">
                      <h4 className="cards__category-heading">NEW</h4>
                    </div>
                    <img
                      src={Card1}
                      alt="card-1"
                      title="card-1"
                      className="cards__image-img"
                    />
                  </div>
                  <div className="cards__content">
                    <h4 className="cards__content-title">Чикен Сладкий Чили</h4>
                    <h4 className="cards__content-text">
                      Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный
                      соу...
                    </h4>
                    <div className="cards-footer">
                      <div className="cards-footer__box">
                        <Button className="cards-footer__box-btn" type="button">
                          Выбрать
                        </Button>
                      </div>
                      <div className="cards-footer__box">
                        <h4 className="cards-footer__box-heading">от 399 ₽</h4>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="cards__item">
                  <div className="cards__image">
                    <div className="cards__category">
                      <h4 className="cards__category-heading">ХИТ</h4>
                    </div>
                    <img
                      src={Card2}
                      alt="card-2"
                      title="card-2"
                      className="cards__image-img"
                    />
                  </div>
                  <div className="cards__content">
                    <h4 className="cards__content-title">
                      EASY PEASY огуречный расколбас
                    </h4>
                    <h4 className="cards__content-text">
                      Курица, Лук, Перец Халапеньо...
                    </h4>
                    <div className="cards-footer">
                      <div className="cards-footer__box">
                        <Button className="cards-footer__box-btn" type="button">
                          Выбрать
                        </Button>
                      </div>
                      <div className="cards-footer__box">
                        <h4 className="cards-footer__box-heading">от 549 ₽</h4>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="cards__item">
                  <div className="cards__image">
                    <img
                      src={Card3}
                      alt="card-3"
                      title="card-3"
                      className="cards__image-img"
                    />
                  </div>
                  <div className="cards__content">
                    <h4 className="cards__content-title">
                      EASY PEASY чикен а-ля хрен
                    </h4>
                    <h4 className="cards__content-text">
                      Курица, Лук, Соус Карбонара,...
                    </h4>
                    <div className="cards-footer">
                      <div className="cards-footer__box">
                        <Button className="cards-footer__box-btn" type="button">
                          Выбрать
                        </Button>
                      </div>
                      <div className="cards-footer__box">
                        <h4 className="cards-footer__box-heading">от 249 ₽</h4>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="cards__item">
                  <div className="cards__image">
                    <img
                      src={Card4}
                      alt="card-4"
                      title="card-4"
                      className="cards__image-img"
                    />
                  </div>
                  <div className="cards__content">
                    <h4 className="cards__content-title">4 сезона</h4>
                    <h4 className="cards__content-text">
                      Бекон, Ветчина, Грибы, Курица, Лук, Маслины, Огурцы
                      мари...
                    </h4>
                    <div className="cards-footer">
                      <div className="cards-footer__box">
                        <Button className="cards-footer__box-btn" type="button">
                          Выбрать
                        </Button>
                      </div>
                      <div className="cards-footer__box">
                        <h4 className="cards-footer__box-heading">от 630 ₽</h4>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="cards__item">
                  <div className="cards__image">
                    <img
                      src={Card4}
                      alt="card-4"
                      title="card-4"
                      className="cards__image-img"
                    />
                  </div>
                  <div className="cards__content">
                    <h4 className="cards__content-title">4 сезона</h4>
                    <h4 className="cards__content-text">
                      Бекон, Ветчина, Грибы, Курица, Лук, Маслины, Огурцы
                      мари...
                    </h4>
                    <div className="cards-footer">
                      <div className="cards-footer__box">
                        <Button className="cards-footer__box-btn" type="button">
                          Выбрать
                        </Button>
                      </div>
                      <div className="cards-footer__box">
                        <h4 className="cards-footer__box-heading">от 630 ₽</h4>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="cards__item">
                  <div className="cards__image">
                    <img
                      src={Card3}
                      alt="card-3"
                      title="card-3"
                      className="cards__image-img"
                    />
                  </div>
                  <div className="cards__content">
                    <h4 className="cards__content-title">
                      EASY PEASY чикен а-ля хрен
                    </h4>
                    <h4 className="cards__content-text">
                      Курица, Лук, Соус Карбонара,...
                    </h4>
                    <div className="cards-footer">
                      <div className="cards-footer__box">
                        <Button className="cards-footer__box-btn" type="button">
                          Выбрать
                        </Button>
                      </div>
                      <div className="cards-footer__box">
                        <h4 className="cards-footer__box-heading">от 249 ₽</h4>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="cards__item">
                  <div className="cards__image">
                    <div className="cards__category">
                      <h4 className="cards__category-heading">NEW</h4>
                    </div>
                    <img
                      src={Card1}
                      alt="card-1"
                      title="card-1"
                      className="cards__image-img"
                    />
                  </div>
                  <div className="cards__content">
                    <h4 className="cards__content-title">Чикен Сладкий Чили</h4>
                    <h4 className="cards__content-text">
                      Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный
                      соу...
                    </h4>
                    <div className="cards-footer">
                      <div className="cards-footer__box">
                        <Button className="cards-footer__box-btn" type="button">
                          Выбрать
                        </Button>
                      </div>
                      <div className="cards-footer__box">
                        <h4 className="cards-footer__box-heading">от 399 ₽</h4>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="cards__item">
                  <div className="cards__image">
                    <div className="cards__category">
                      <h4 className="cards__category-heading">ХИТ</h4>
                    </div>
                    <img
                      src={Card2}
                      alt="card-2"
                      title="card-2"
                      className="cards__image-img"
                    />
                  </div>
                  <div className="cards__content">
                    <h4 className="cards__content-title">
                      EASY PEASY огуречный расколбас
                    </h4>
                    <h4 className="cards__content-text">
                      Курица, Лук, Перец Халапеньо...
                    </h4>
                    <div className="cards-footer">
                      <div className="cards-footer__box">
                        <Button className="cards-footer__box-btn" type="button">
                          Выбрать
                        </Button>
                      </div>
                      <div className="cards-footer__box">
                        <h4 className="cards-footer__box-heading">от 549 ₽</h4>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
            <li className="group-card__item">
              <div className="group-card__header">
                <div className="group-card__box">
                  <h2 className="group-card__box-heading">Пицца</h2>
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
                    <h4 className="group-card__filter-heading">Фильтры</h4>
                  </Button>
                </div>
              </div>
              <ul className="cards">
                <li className="cards__item">
                  <div className="cards__image">
                    <div className="cards__category">
                      <h4 className="cards__category-heading">NEW</h4>
                    </div>
                    <img
                      src={Card1}
                      alt="card-1"
                      title="card-1"
                      className="cards__image-img"
                    />
                  </div>
                  <div className="cards__content">
                    <h4 className="cards__content-title">Чикен Сладкий Чили</h4>
                    <h4 className="cards__content-text">
                      Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный
                      соу...
                    </h4>
                    <div className="cards-footer">
                      <div className="cards-footer__box">
                        <Button className="cards-footer__box-btn" type="button">
                          Выбрать
                        </Button>
                      </div>
                      <div className="cards-footer__box">
                        <h4 className="cards-footer__box-heading">от 399 ₽</h4>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="cards__item">
                  <div className="cards__image">
                    <div className="cards__category">
                      <h4 className="cards__category-heading">ХИТ</h4>
                    </div>
                    <img
                      src={Card2}
                      alt="card-2"
                      title="card-2"
                      className="cards__image-img"
                    />
                  </div>
                  <div className="cards__content">
                    <h4 className="cards__content-title">
                      EASY PEASY огуречный расколбас
                    </h4>
                    <h4 className="cards__content-text">
                      Курица, Лук, Перец Халапеньо...
                    </h4>
                    <div className="cards-footer">
                      <div className="cards-footer__box">
                        <Button className="cards-footer__box-btn" type="button">
                          Выбрать
                        </Button>
                      </div>
                      <div className="cards-footer__box">
                        <h4 className="cards-footer__box-heading">от 549 ₽</h4>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="cards__item">
                  <div className="cards__image">
                    <img
                      src={Card3}
                      alt="card-3"
                      title="card-3"
                      className="cards__image-img"
                    />
                  </div>
                  <div className="cards__content">
                    <h4 className="cards__content-title">
                      EASY PEASY чикен а-ля хрен
                    </h4>
                    <h4 className="cards__content-text">
                      Курица, Лук, Соус Карбонара,...
                    </h4>
                    <div className="cards-footer">
                      <div className="cards-footer__box">
                        <Button className="cards-footer__box-btn" type="button">
                          Выбрать
                        </Button>
                      </div>
                      <div className="cards-footer__box">
                        <h4 className="cards-footer__box-heading">от 249 ₽</h4>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="cards__item">
                  <div className="cards__image">
                    <img
                      src={Card4}
                      alt="card-4"
                      title="card-4"
                      className="cards__image-img"
                    />
                  </div>
                  <div className="cards__content">
                    <h4 className="cards__content-title">4 сезона</h4>
                    <h4 className="cards__content-text">
                      Бекон, Ветчина, Грибы, Курица, Лук, Маслины, Огурцы
                      мари...
                    </h4>
                    <div className="cards-footer">
                      <div className="cards-footer__box">
                        <Button className="cards-footer__box-btn" type="button">
                          Выбрать
                        </Button>
                      </div>
                      <div className="cards-footer__box">
                        <h4 className="cards-footer__box-heading">от 630 ₽</h4>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="cards__item">
                  <div className="cards__image">
                    <img
                      src={Card4}
                      alt="card-4"
                      title="card-4"
                      className="cards__image-img"
                    />
                  </div>
                  <div className="cards__content">
                    <h4 className="cards__content-title">4 сезона</h4>
                    <h4 className="cards__content-text">
                      Бекон, Ветчина, Грибы, Курица, Лук, Маслины, Огурцы
                      мари...
                    </h4>
                    <div className="cards-footer">
                      <div className="cards-footer__box">
                        <Button className="cards-footer__box-btn" type="button">
                          Выбрать
                        </Button>
                      </div>
                      <div className="cards-footer__box">
                        <h4 className="cards-footer__box-heading">от 630 ₽</h4>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="cards__item">
                  <div className="cards__image">
                    <img
                      src={Card3}
                      alt="card-3"
                      title="card-3"
                      className="cards__image-img"
                    />
                  </div>
                  <div className="cards__content">
                    <h4 className="cards__content-title">
                      EASY PEASY чикен а-ля хрен
                    </h4>
                    <h4 className="cards__content-text">
                      Курица, Лук, Соус Карбонара,...
                    </h4>
                    <div className="cards-footer">
                      <div className="cards-footer__box">
                        <Button className="cards-footer__box-btn" type="button">
                          Выбрать
                        </Button>
                      </div>
                      <div className="cards-footer__box">
                        <h4 className="cards-footer__box-heading">от 249 ₽</h4>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="cards__item">
                  <div className="cards__image">
                    <div className="cards__category">
                      <h4 className="cards__category-heading">NEW</h4>
                    </div>
                    <img
                      src={Card1}
                      alt="card-1"
                      title="card-1"
                      className="cards__image-img"
                    />
                  </div>
                  <div className="cards__content">
                    <h4 className="cards__content-title">Чикен Сладкий Чили</h4>
                    <h4 className="cards__content-text">
                      Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный
                      соу...
                    </h4>
                    <div className="cards-footer">
                      <div className="cards-footer__box">
                        <Button className="cards-footer__box-btn" type="button">
                          Выбрать
                        </Button>
                      </div>
                      <div className="cards-footer__box">
                        <h4 className="cards-footer__box-heading">от 399 ₽</h4>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="cards__item">
                  <div className="cards__image">
                    <div className="cards__category">
                      <h4 className="cards__category-heading">ХИТ</h4>
                    </div>
                    <img
                      src={Card2}
                      alt="card-2"
                      title="card-2"
                      className="cards__image-img"
                    />
                  </div>
                  <div className="cards__content">
                    <h4 className="cards__content-title">
                      EASY PEASY огуречный расколбас
                    </h4>
                    <h4 className="cards__content-text">
                      Курица, Лук, Перец Халапеньо...
                    </h4>
                    <div className="cards-footer">
                      <div className="cards-footer__box">
                        <Button className="cards-footer__box-btn" type="button">
                          Выбрать
                        </Button>
                      </div>
                      <div className="cards-footer__box">
                        <h4 className="cards-footer__box-heading">от 549 ₽</h4>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
            <li className="group-card__item">
              <div className="group-card__header">
                <div className="group-card__box">
                  <h2 className="group-card__box-heading">Пицца</h2>
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
                    <h4 className="group-card__filter-heading">Фильтры</h4>
                  </Button>
                </div>
              </div>
              <ul className="cards">
                <li className="cards__item">
                  <div className="cards__image">
                    <div className="cards__category">
                      <h4 className="cards__category-heading">NEW</h4>
                    </div>
                    <img
                      src={Card1}
                      alt="card-1"
                      title="card-1"
                      className="cards__image-img"
                    />
                  </div>
                  <div className="cards__content">
                    <h4 className="cards__content-title">Чикен Сладкий Чили</h4>
                    <h4 className="cards__content-text">
                      Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный
                      соу...
                    </h4>
                    <div className="cards-footer">
                      <div className="cards-footer__box">
                        <Button className="cards-footer__box-btn" type="button">
                          Выбрать
                        </Button>
                      </div>
                      <div className="cards-footer__box">
                        <h4 className="cards-footer__box-heading">от 399 ₽</h4>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="cards__item">
                  <div className="cards__image">
                    <div className="cards__category">
                      <h4 className="cards__category-heading">ХИТ</h4>
                    </div>
                    <img
                      src={Card2}
                      alt="card-2"
                      title="card-2"
                      className="cards__image-img"
                    />
                  </div>
                  <div className="cards__content">
                    <h4 className="cards__content-title">
                      EASY PEASY огуречный расколбас
                    </h4>
                    <h4 className="cards__content-text">
                      Курица, Лук, Перец Халапеньо...
                    </h4>
                    <div className="cards-footer">
                      <div className="cards-footer__box">
                        <Button className="cards-footer__box-btn" type="button">
                          Выбрать
                        </Button>
                      </div>
                      <div className="cards-footer__box">
                        <h4 className="cards-footer__box-heading">от 549 ₽</h4>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="cards__item">
                  <div className="cards__image">
                    <img
                      src={Card3}
                      alt="card-3"
                      title="card-3"
                      className="cards__image-img"
                    />
                  </div>
                  <div className="cards__content">
                    <h4 className="cards__content-title">
                      EASY PEASY чикен а-ля хрен
                    </h4>
                    <h4 className="cards__content-text">
                      Курица, Лук, Соус Карбонара,...
                    </h4>
                    <div className="cards-footer">
                      <div className="cards-footer__box">
                        <Button className="cards-footer__box-btn" type="button">
                          Выбрать
                        </Button>
                      </div>
                      <div className="cards-footer__box">
                        <h4 className="cards-footer__box-heading">от 249 ₽</h4>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="cards__item">
                  <div className="cards__image">
                    <img
                      src={Card4}
                      alt="card-4"
                      title="card-4"
                      className="cards__image-img"
                    />
                  </div>
                  <div className="cards__content">
                    <h4 className="cards__content-title">4 сезона</h4>
                    <h4 className="cards__content-text">
                      Бекон, Ветчина, Грибы, Курица, Лук, Маслины, Огурцы
                      мари...
                    </h4>
                    <div className="cards-footer">
                      <div className="cards-footer__box">
                        <Button className="cards-footer__box-btn" type="button">
                          Выбрать
                        </Button>
                      </div>
                      <div className="cards-footer__box">
                        <h4 className="cards-footer__box-heading">от 630 ₽</h4>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="cards__item">
                  <div className="cards__image">
                    <img
                      src={Card4}
                      alt="card-4"
                      title="card-4"
                      className="cards__image-img"
                    />
                  </div>
                  <div className="cards__content">
                    <h4 className="cards__content-title">4 сезона</h4>
                    <h4 className="cards__content-text">
                      Бекон, Ветчина, Грибы, Курица, Лук, Маслины, Огурцы
                      мари...
                    </h4>
                    <div className="cards-footer">
                      <div className="cards-footer__box">
                        <Button className="cards-footer__box-btn" type="button">
                          Выбрать
                        </Button>
                      </div>
                      <div className="cards-footer__box">
                        <h4 className="cards-footer__box-heading">от 630 ₽</h4>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="cards__item">
                  <div className="cards__image">
                    <img
                      src={Card3}
                      alt="card-3"
                      title="card-3"
                      className="cards__image-img"
                    />
                  </div>
                  <div className="cards__content">
                    <h4 className="cards__content-title">
                      EASY PEASY чикен а-ля хрен
                    </h4>
                    <h4 className="cards__content-text">
                      Курица, Лук, Соус Карбонара,...
                    </h4>
                    <div className="cards-footer">
                      <div className="cards-footer__box">
                        <Button className="cards-footer__box-btn" type="button">
                          Выбрать
                        </Button>
                      </div>
                      <div className="cards-footer__box">
                        <h4 className="cards-footer__box-heading">от 249 ₽</h4>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="cards__item">
                  <div className="cards__image">
                    <div className="cards__category">
                      <h4 className="cards__category-heading">NEW</h4>
                    </div>
                    <img
                      src={Card1}
                      alt="card-1"
                      title="card-1"
                      className="cards__image-img"
                    />
                  </div>
                  <div className="cards__content">
                    <h4 className="cards__content-title">Чикен Сладкий Чили</h4>
                    <h4 className="cards__content-text">
                      Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный
                      соу...
                    </h4>
                    <div className="cards-footer">
                      <div className="cards-footer__box">
                        <Button className="cards-footer__box-btn" type="button">
                          Выбрать
                        </Button>
                      </div>
                      <div className="cards-footer__box">
                        <h4 className="cards-footer__box-heading">от 399 ₽</h4>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="cards__item">
                  <div className="cards__image">
                    <div className="cards__category">
                      <h4 className="cards__category-heading">ХИТ</h4>
                    </div>
                    <img
                      src={Card2}
                      alt="card-2"
                      title="card-2"
                      className="cards__image-img"
                    />
                  </div>
                  <div className="cards__content">
                    <h4 className="cards__content-title">
                      EASY PEASY огуречный расколбас
                    </h4>
                    <h4 className="cards__content-text">
                      Курица, Лук, Перец Халапеньо...
                    </h4>
                    <div className="cards-footer">
                      <div className="cards-footer__box">
                        <Button className="cards-footer__box-btn" type="button">
                          Выбрать
                        </Button>
                      </div>
                      <div className="cards-footer__box">
                        <h4 className="cards-footer__box-heading">от 549 ₽</h4>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default index;
