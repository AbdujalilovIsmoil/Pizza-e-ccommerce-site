import { useState } from "react";
import { Button } from "components/fields";
import { FilterModal } from "components/layouts";
import { GroupCardFilter } from "assets/images/svg";

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
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default index;
