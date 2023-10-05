import { Input, Button } from "components/fields";
import { locationIcon1 } from "assets/images/svg";

const index = () => {
  return (
    <>
      <section className="location">
        <div className="container">
          <ul className="location__list">
            <li className="location__item">
              <h4 className="location__item-heading">
                Проверить адрес доставки
              </h4>
            </li>
            <li className="location__item">
              <div className="location-form">
                <img
                  src={locationIcon1}
                  alt="location-icon"
                  className="location-form__icon"
                />
                <Input
                  type="text"
                  placeholder="Адрес"
                  className="location-form__input"
                />
              </div>
            </li>
            <li className="location__item">
              <Button className="location__item-btn" type="button">
                Проверить
              </Button>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default index;
