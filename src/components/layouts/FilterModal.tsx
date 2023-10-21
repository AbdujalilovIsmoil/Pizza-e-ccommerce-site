import { get } from "lodash";
import { useTokenGet } from "hook";
import { Button, Input } from "components/fields";
import { useDispatch, useSelector } from "react-redux";
import { toggleFilterOpenModal } from "store/filterData";
import { FilterModalIcon1 } from "assets/images/svg/filter";

const FilterModal = () => {
  const dispatch = useDispatch();
  const closeFilterModal = (e: any) => {
    if (e.target?.getAttribute("class") === "filter-modal filter-modal--open") {
      dispatch(toggleFilterOpenModal());
    }
  };

  const { isFilterModalOpen }: any = useSelector((state) =>
    get(state, "filterData")
  );

  const { data, isError, isLoading } = useTokenGet({
    queryKey: "reting",
    path: "/reting/views",
  });

  return (
    <section
      onClick={(e) => closeFilterModal(e)}
      className={`filter-modal ${isFilterModalOpen && "filter-modal--open"}`}
    >
      <div className="filter-modal__background">
        <div className="filter-modal__border">
          <div className="filter-modal__header">
            <div className="filter-modal__box">
              <h4 className="filter-modal__box-heading">Фильтры</h4>
            </div>
            <div
              className="filter-modal__box"
              onClick={() => dispatch(toggleFilterOpenModal())}
            >
              <img
                src={FilterModalIcon1}
                alt="filter-modal-icon"
                className="filter-modal__box-icon"
              />
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
          {!isLoading && !isError && get(data, "reting", []).length === 0 && (
            <div>
              <h2>NO DATA</h2>
            </div>
          )}
          <ul className="filter-modal__list">
            <ul className="filter-modal__check-list">
              {get(data, "reting", []).length > 0 &&
                get(data, "reting", []).map((el: any) => {
                  return (
                    <li className="filter-modal__check" key={el._id}>
                      <Input
                        name="data"
                        type="radio"
                        id={`${el._id}`}
                        value={`${el.name}`}
                      />
                      <label
                        htmlFor={`${el._id}`}
                        className="filter-modal__check-btn"
                      >
                        {el.name}
                      </label>
                    </li>
                  );
                })}
            </ul>
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
  );
};

export default FilterModal;
