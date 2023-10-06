import { Button, Input } from "components/fields";
import { FilterModalIcon1 } from "assets/images/svg/filter";

const index = ({
  isOpenFilterModal,
  setIsOpenFilterModal,
}: {
  isOpenFilterModal: boolean;
  setIsOpenFilterModal: (e: boolean) => void;
}) => {
  const closeFilterModal = (e: any) => {
    if (e.target?.getAttribute("class") === "filter-modal filter-modal--open") {
      setIsOpenFilterModal(false);
    }
  };

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
              <li className="filter-modal__item">
                <h2 className="filter-modal__item-heading">Общее</h2>
                <ul className="filter-modal__check-list">
                  <li className="filter-modal__check">
                    <input type="radio" id="1" name="data" value="1" />
                    <label htmlFor="1" className="filter-modal__check-btn">
                      Хит
                    </label>
                  </li>
                  <li className="filter-modal__check">
                    <Input type="radio" id="2" name="data" value="2" />
                    <label className="filter-modal__check-btn" htmlFor="2">
                      Новинка
                    </label>
                  </li>
                  <li className="filter-modal__check">
                    <Input type="radio" id="3" name="data" value="3" />
                    <label className="filter-modal__check-btn" htmlFor="3">
                      С мясом
                    </label>
                  </li>
                  <li className="filter-modal__check">
                    <Input type="radio" id="4" name="data" value="4" />
                    <label className="filter-modal__check-btn" htmlFor="4">
                      Вегетарианская
                    </label>
                  </li>
                  <li className="filter-modal__check">
                    <Input type="radio" id="5" name="data" value="5" />
                    <label className="filter-modal__check-btn" htmlFor="5">
                      С курицей
                    </label>
                  </li>
                  <li className="filter-modal__check">
                    <Input type="radio" id="6" name="data" value="6" />
                    <label className="filter-modal__check-btn" htmlFor="6">
                      Без лука
                    </label>
                  </li>
                  <li className="filter-modal__check">
                    <Input type="radio" id="7" name="data" value="7" />
                    <label className="filter-modal__check-btn" htmlFor="7">
                      С грибами
                    </label>
                  </li>
                  <li className="filter-modal__check">
                    <Input type="radio" id="8" name="data" value="8" />
                    <label className="filter-modal__check-btn" htmlFor="8">
                      С морепродуктами
                    </label>
                  </li>
                  <li className="filter-modal__check">
                    <Input type="radio" id="9" name="data" value="9" />
                    <label className="filter-modal__check-btn" htmlFor="9">
                      Барбекью
                    </label>
                  </li>
                </ul>
              </li>
              <li className="filter-modal__item">
                <h2 className="filter-modal__item-heading">Сыр</h2>
                <ul className="filter-modal__check-list">
                  <li className="filter-modal__check">
                    <Input type="radio" id="10" name="data" value="10" />
                    <label className="filter-modal__check-btn" htmlFor="10">
                      Реджанито
                    </label>
                  </li>
                  <li className="filter-modal__check">
                    <Input type="radio" id="12" name="data" value="12" />
                    <label className="filter-modal__check-btn" htmlFor="12">
                      Моцарелла
                    </label>
                  </li>
                  <li className="filter-modal__check">
                    <Input type="radio" id="13" name="data" value="13" />
                    <label className="filter-modal__check-btn" htmlFor="13">
                      Чеддер
                    </label>
                  </li>
                  <li className="filter-modal__check">
                    <Input type="radio" id="14" name="data" value="14" />
                    <label className="filter-modal__check-btn" htmlFor="14">
                      С голубой плесенью
                    </label>
                  </li>
                  <li className="filter-modal__check">
                    <Input type="radio" id="15" name="data" value="15" />
                    <label className="filter-modal__check-btn" htmlFor="15">
                      Смесь итальянских сыров
                    </label>
                  </li>
                  <li className="filter-modal__check">
                    <Input type="radio" id="16" name="data" value="16" />
                    <label className="filter-modal__check-btn" htmlFor="16">
                      Мягкий молодой сыр
                    </label>
                  </li>
                </ul>
              </li>
              <li className="filter-modal__item">
                <h2 className="filter-modal__item-heading">Мясо</h2>
                <ul className="filter-modal__check-list">
                  <li className="filter-modal__check">
                    <Input type="radio" id="17" name="data" value="17" />
                    <label className="filter-modal__check-btn" htmlFor="17">
                      Пепперони
                    </label>
                  </li>
                  <li className="filter-modal__check">
                    <Input type="radio" id="18" name="data" value="18" />
                    <label className="filter-modal__check-btn" htmlFor="18">
                      Свинина
                    </label>
                  </li>
                  <li className="filter-modal__check">
                    <Input type="radio" id="19" name="data" value="19" />
                    <label className="filter-modal__check-btn" htmlFor="19">
                      Ветчина
                    </label>
                  </li>
                  <li className="filter-modal__check">
                    <Input type="radio" id="20" name="data" value="20" />
                    <label className="filter-modal__check-btn" htmlFor="20">
                      Бекон
                    </label>
                  </li>
                  <li className="filter-modal__check">
                    <Input type="radio" id="21" name="data" value="21" />
                    <label className="filter-modal__check-btn" htmlFor="21">
                      Чоризо
                    </label>
                  </li>
                  <li className="filter-modal__check">
                    <Input type="radio" id="22" name="data" value="22" />
                    <label className="filter-modal__check-btn" htmlFor="22">
                      Колбаски
                    </label>
                  </li>
                  <li className="filter-modal__check">
                    <Input type="radio" id="23" name="data" value="23" />
                    <label className="filter-modal__check-btn" htmlFor="23">
                      Куриная грудка
                    </label>
                  </li>
                </ul>
              </li>
              <li className="filter-modal__item">
                <h2 className="filter-modal__item-heading">Компонент</h2>
                <ul className="filter-modal__check-list">
                  <li className="filter-modal__check">
                    <Input type="radio" id="24" name="data" value="24" />
                    <label className="filter-modal__check-btn" htmlFor="24">
                      Креветка
                    </label>
                  </li>
                  <li className="filter-modal__check">
                    <Input type="radio" id="25" name="data" value="25" />
                    <label className="filter-modal__check-btn" htmlFor="25">
                      Ананасы
                    </label>
                  </li>
                  <li className="filter-modal__check">
                    <Input type="radio" id="26" name="data" value="26" />
                    <label className="filter-modal__check-btn" htmlFor="26">
                      Шампиньоны
                    </label>
                  </li>
                  <li className="filter-modal__check">
                    <Input type="radio" id="27" name="data" value="27" />
                    <label className="filter-modal__check-btn" htmlFor="27">
                      Лук
                    </label>
                  </li>
                  <li className="filter-modal__check">
                    <Input type="radio" id="28" name="data" value="28" />
                    <label className="filter-modal__check-btn" htmlFor="28">
                      Перец халапеньо
                    </label>
                  </li>
                  <li className="filter-modal__check">
                    <Input type="radio" id="29" name="data" value="29" />
                    <label className="filter-modal__check-btn" htmlFor="29">
                      Орегано
                    </label>
                  </li>
                  <li className="filter-modal__check">
                    <Input type="radio" id="30" name="data" value="30" />
                    <label className="filter-modal__check-btn" htmlFor="30">
                      Зеленый перец
                    </label>
                  </li>
                  <li className="filter-modal__check">
                    <Input type="radio" id="31" name="data" value="31" />
                    <label className="filter-modal__check-btn" htmlFor="31">
                      Томаты
                    </label>
                  </li>
                  <li className="filter-modal__check">
                    <Input type="radio" id="32" name="data" value="32" />
                    <label className="filter-modal__check-btn" htmlFor="32">
                      Чеснок
                    </label>
                  </li>
                  <li className="filter-modal__check">
                    <Input type="radio" id="33" name="data" value="33" />
                    <label className="filter-modal__check-btn" htmlFor="33">
                      Красный перец
                    </label>
                  </li>
                  <li className="filter-modal__check">
                    <Input type="radio" id="34" name="data" value="34" />
                    <label className="filter-modal__check-btn" htmlFor="34">
                      Оливки
                    </label>
                  </li>
                  <li className="filter-modal__check">
                    <Input type="radio" id="35" name="data" value="35" />
                    <label className="filter-modal__check-btn" htmlFor="35">
                      Маслины
                    </label>
                  </li>
                  <li className="filter-modal__check">
                    <Input type="radio" id="36" name="data" value="36" />
                    <label className="filter-modal__check-btn" htmlFor="36">
                      Клубника
                    </label>
                  </li>
                  <li className="filter-modal__check">
                    <Input type="radio" id="37" name="data" value="37" />
                    <label className="filter-modal__check-btn" htmlFor="37">
                      Смесь итальянских трав
                    </label>
                  </li>
                </ul>
              </li>
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

export default index;
