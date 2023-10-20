import { get } from "lodash";
import { useGet } from "hook";
import { useState } from "react";
import { Button } from "components/fields";
import { GroupCardFilter } from "assets/images/svg";
import { FilterModal, ProductModal } from "components/layouts";

const GroupCard = () => {
  const [isOpenFilterModal, setIsOpenFilterModal] = useState<boolean>(false);
  const [isOpenProductModal, setIsOpenProductModal] = useState<boolean>(false);

  if (isOpenFilterModal) {
    document.body.classList.add("hidden");
  } else {
    document.body.classList.remove("hidden");
  }


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
