import { Button, Input } from "components/fields";
import { FilterModalIcon1 } from "assets/images/svg/filter";

type TfilterModal = {
  isOpenFilterModal: boolean;
  setIsOpenFilterModal: (e: boolean) => void;
};

type TfilterDataInside = {
  id: number;
  title: string;
};

type TfilterData = {
  id: number;
  title: string;
  data: TfilterDataInside[];
};

const FilterModal = ({
  isOpenFilterModal,
  setIsOpenFilterModal,
}: TfilterModal) => {
  const closeFilterModal = (e: any) => {
    if (e.target?.getAttribute("class") === "filter-modal filter-modal--open") {
      setIsOpenFilterModal(false);
    }
  };

  const filterData: TfilterData[] = [
    {
      id: 1,
      title: "Общее",
      data: [
        {
          id:
            new Date().getMilliseconds() *
              new Date().getMilliseconds() *
              Math.random() *
              10 +
            new Date().getMilliseconds(),
          title: "Хит",
        },
        {
          id:
            new Date().getMilliseconds() *
              new Date().getMilliseconds() *
              Math.random() *
              10 +
            new Date().getMilliseconds(),
          title: "Новинка",
        },
        {
          id:
            new Date().getMilliseconds() *
              new Date().getMilliseconds() *
              Math.random() *
              10 +
            new Date().getMilliseconds(),
          title: "С мясом",
        },
        {
          id:
            new Date().getMilliseconds() *
              new Date().getMilliseconds() *
              Math.random() *
              10 +
            new Date().getMilliseconds(),
          title: "Вегетарианская",
        },
        {
          id:
            new Date().getMilliseconds() *
              new Date().getMilliseconds() *
              Math.random() *
              10 +
            new Date().getMilliseconds(),
          title: "Вегетарианская",
        },
        {
          id:
            new Date().getMilliseconds() *
              new Date().getMilliseconds() *
              Math.random() *
              10 +
            new Date().getMilliseconds(),
          title: "С курицей",
        },
        {
          id:
            new Date().getMilliseconds() *
              new Date().getMilliseconds() *
              Math.random() *
              10 +
            new Date().getMilliseconds(),
          title: "Без лука",
        },
        {
          id:
            new Date().getMilliseconds() *
              new Date().getMilliseconds() *
              Math.random() *
              10 +
            new Date().getMilliseconds(),
          title: "С грибами",
        },
        {
          id:
            new Date().getMilliseconds() *
              new Date().getMilliseconds() *
              Math.random() *
              10 +
            new Date().getMilliseconds(),
          title: "С морепродуктами",
        },
        {
          id:
            new Date().getMilliseconds() *
              new Date().getMilliseconds() *
              Math.random() *
              10 +
            new Date().getMilliseconds(),
          title: "Барбекью",
        },
      ],
    },
    {
      id: 2,
      title: "Сыр",
      data: [
        {
          id:
            new Date().getMilliseconds() *
              new Date().getMilliseconds() *
              Math.random() *
              10 +
            new Date().getMilliseconds(),
          title: "Реджанито",
        },
        {
          id:
            new Date().getMilliseconds() *
              new Date().getMilliseconds() *
              Math.random() *
              10 +
            new Date().getMilliseconds(),
          title: "Моцарелла",
        },
        {
          id:
            new Date().getMilliseconds() *
              new Date().getMilliseconds() *
              Math.random() *
              10 +
            new Date().getMilliseconds(),
          title: "Чеддер",
        },
        {
          id:
            new Date().getMilliseconds() *
              new Date().getMilliseconds() *
              Math.random() *
              10 +
            new Date().getMilliseconds(),
          title: "С голубой плесенью",
        },
        {
          id:
            new Date().getMilliseconds() *
              new Date().getMilliseconds() *
              Math.random() *
              10 +
            new Date().getMilliseconds(),
          title: "Смесь итальянских сыров",
        },
        {
          id:
            new Date().getMilliseconds() *
              new Date().getMilliseconds() *
              Math.random() *
              10 +
            new Date().getMilliseconds(),
          title: "Мягкий молодой сыр",
        },
      ],
    },
    {
      id: 3,
      title: "Мясо",
      data: [
        {
          id:
            new Date().getMilliseconds() *
              new Date().getMilliseconds() *
              Math.random() *
              10 +
            new Date().getMilliseconds(),
          title: "Пепперони",
        },
        {
          id:
            new Date().getMilliseconds() *
              new Date().getMilliseconds() *
              Math.random() *
              10 +
            new Date().getMilliseconds(),
          title: "Свинина",
        },
        {
          id:
            new Date().getMilliseconds() *
              new Date().getMilliseconds() *
              Math.random() *
              10 +
            new Date().getMilliseconds(),
          title: "Ветчина",
        },
        {
          id:
            new Date().getMilliseconds() *
              new Date().getMilliseconds() *
              Math.random() *
              10 +
            new Date().getMilliseconds(),
          title: "Бекон",
        },
        {
          id:
            new Date().getMilliseconds() *
              new Date().getMilliseconds() *
              Math.random() *
              10 +
            new Date().getMilliseconds(),
          title: "Чоризо",
        },
        {
          id:
            new Date().getMilliseconds() *
              new Date().getMilliseconds() *
              Math.random() *
              10 +
            new Date().getMilliseconds(),
          title: "Колбаски",
        },
        {
          id:
            new Date().getMilliseconds() *
              new Date().getMilliseconds() *
              Math.random() *
              10 +
            new Date().getMilliseconds(),
          title: "Куриная грудка",
        },
      ],
    },
    {
      id: 4,
      title: "Компонент",
      data: [
        {
          id:
            new Date().getMilliseconds() *
              new Date().getMilliseconds() *
              Math.random() *
              10 +
            new Date().getMilliseconds(),
          title: "Креветка",
        },
        {
          id:
            new Date().getMilliseconds() *
              new Date().getMilliseconds() *
              Math.random() *
              10 +
            new Date().getMilliseconds(),
          title: "Ананасы",
        },
        {
          id:
            new Date().getMilliseconds() *
              new Date().getMilliseconds() *
              Math.random() *
              10 +
            new Date().getMilliseconds(),
          title: "Шампиньоны",
        },
        {
          id:
            new Date().getMilliseconds() *
              new Date().getMilliseconds() *
              Math.random() *
              10 +
            new Date().getMilliseconds(),
          title: "Лук",
        },
        {
          id:
            new Date().getMilliseconds() *
              new Date().getMilliseconds() *
              Math.random() *
              10 +
            new Date().getMilliseconds(),
          title: "Перец халапеньо",
        },
        {
          id:
            new Date().getMilliseconds() *
              new Date().getMilliseconds() *
              Math.random() *
              10 +
            new Date().getMilliseconds(),
          title: "Орегано",
        },
        {
          id:
            new Date().getMilliseconds() *
              new Date().getMilliseconds() *
              Math.random() *
              10 +
            new Date().getMilliseconds(),
          title: "Зеленый перец",
        },
        {
          id:
            new Date().getMilliseconds() *
              new Date().getMilliseconds() *
              Math.random() *
              10 +
            new Date().getMilliseconds(),
          title: "Томаты",
        },
        {
          id:
            new Date().getMilliseconds() *
              new Date().getMilliseconds() *
              Math.random() *
              10 +
            new Date().getMilliseconds(),
          title: "Чеснок",
        },
        {
          id:
            new Date().getMilliseconds() *
              new Date().getMilliseconds() *
              Math.random() *
              10 +
            new Date().getMilliseconds(),
          title: "Красный перец",
        },
        {
          id:
            new Date().getMilliseconds() *
              new Date().getMilliseconds() *
              Math.random() *
              10 +
            new Date().getMilliseconds(),
          title: "Оливки",
        },
        {
          id:
            new Date().getMilliseconds() *
              new Date().getMilliseconds() *
              Math.random() *
              10 +
            new Date().getMilliseconds(),
          title: "Маслины",
        },
        {
          id:
            new Date().getMilliseconds() *
              new Date().getMilliseconds() *
              Math.random() *
              10 +
            new Date().getMilliseconds(),
          title: "Клубника",
        },
        {
          id:
            new Date().getMilliseconds() *
              new Date().getMilliseconds() *
              Math.random() *
              10 +
            new Date().getMilliseconds(),
          title: "Смесь итальянских трав",
        },
      ],
    },
  ];

  return (
    <>
      <section
        onClick={(e) => closeFilterModal(e)}
        className={`filter-modal ${isOpenFilterModal && "filter-modal--open"}`}
      >
        <div className="filter-modal__background">
          <div className="filter-modal__border">
            <div className="filter-modal__header">
              <div className="filter-modal__box">
                <h4 className="filter-modal__box-heading">Фильтры</h4>
              </div>
              <div
                className="filter-modal__box"
                onClick={() => setIsOpenFilterModal(false)}
              >
                <img
                  src={FilterModalIcon1}
                  alt="filter-modal-icon"
                  className="filter-modal__box-icon"
                />
              </div>
            </div>
            <ul className="filter-modal__list">
              {filterData.length > 0 &&
                filterData.map((el: TfilterData) => {
                  return (
                    <li className="filter-modal__item" key={el.id}>
                      <h2 className="filter-modal__item-heading">{el.title}</h2>
                      <ul className="filter-modal__check-list">
                        {el?.data?.length > 0 &&
                          el?.data?.map((el: TfilterDataInside) => {
                            return (
                              <li className="filter-modal__check" key={el.id}>
                                <Input
                                  name="data"
                                  type="radio"
                                  id={`${el.id}`}
                                  value={`${el.id}`}
                                />
                                <label
                                  htmlFor={`${el.id}`}
                                  className="filter-modal__check-btn"
                                >
                                  {el.title}
                                </label>
                              </li>
                            );
                          })}
                      </ul>
                    </li>
                  );
                })}
            </ul>
          </div>
          <div className="filter-modal__footer">
            <Button type="button" className="filter-modal__footer-btn">
              Сбросить
            </Button>
            <Button type="button" className="filter-modal__footer-btn">
              Применить
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default FilterModal;
