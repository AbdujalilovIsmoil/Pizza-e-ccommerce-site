import { get } from "lodash";
import { useGet } from "hook";
import { Button } from "components/fields";
import { FilterModal } from "components/layouts";
import { GroupCardFilter } from "assets/images/svg";
import { useDispatch, useSelector } from "react-redux";
import { toggleFilterOpenModal } from "store/filterData";
import { toggleProductModal, setProductId } from "store/productData";

const GroupCard = () => {

  const dispatch = useDispatch();
  const { isFilterModalOpen }: any = useSelector((state) =>
    get(state, "filterData")
  );

  if (isFilterModalOpen) {
    document.body.classList.add("hidden");
  } else {
    document.body.classList.remove("hidden");
  }

  const { data, isLoading, isError } = useGet({
    path: "/product",
    queryKey: "product",
  });

  const clickButton = (id: string) => {
    dispatch(setProductId(id));
    dispatch(toggleProductModal());
  };

  return (
    <section className="group-card">
      <FilterModal />
      <div className="container">
        <ul className="group-card__list">
          <li className="group-card__item">
            <div className="group-card__header">
              <div className="group-card__box">
                <h2 className="group-card__box-heading">Все продукты</h2>
              </div>
              <div className="group-card__box">
                <Button
                  type="button"
                  className="group-card__filter"
                  onClick={() => dispatch(toggleFilterOpenModal())}
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
            {isError && (
              <div>
                <h2>NOT FOUND</h2>
              </div>
            )}
            {!isError && isLoading && (
              <div>
                <h2>Loader</h2>
              </div>
            )}
            {!isLoading &&
              !isError &&
              get(data, "allProduct", []).length === 0 && (
                <div>
                  <h2>NO DATA</h2>
                </div>
              )}
            <ul className="cards">
              {!isLoading &&
                get(data, "allProduct", []).length > 0 &&
                get(data, "allProduct", []).map((el: any) => {
                  return (
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
                        <h4 className="cards__content-title">{el.name}</h4>
                        <h4 className="cards__content-text">
                          {el.description}
                        </h4>
                        <div className="cards-footer">
                          <div className="cards-footer__box">
                            <Button
                              type="button"
                              className="cards-footer__box-btn"
                              onClick={() => clickButton(el._id)}
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
                  );
                })}
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default GroupCard;
