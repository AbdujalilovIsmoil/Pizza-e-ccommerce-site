import { GroupCardFilter } from "assets/images/svg";
import { Button } from "components/fields";

const index = () => {
  return (
    <>
      <section className="group-card">
        <div className="container">
          <ul className="group-card__list">
            <li className="group-card__item">
              <div className="group-card__header">
                <div className="group-card__box">
                  <h2 className="group-card__box-heading">Пицца</h2>
                </div>
                <div className="group-card__box">
                  <Button className="group-card__filter" type="button">
                    <img
                      src={GroupCardFilter}
                      alt="group-card-filter"
                      className="group-card__filter-img"
                    />
                    <h4 className="group-card__filter-heading">Фильтры</h4>
                  </Button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default index;
