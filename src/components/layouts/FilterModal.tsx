import { get } from "lodash";
import { useGet } from "hook";
import { storage } from "services";
import { Button, Input } from "components/fields";
import { useDispatch, useSelector } from "react-redux";
import { toggleFilterOpenModal } from "store/filterData";
import { FilterModalIcon1 } from "assets/images/svg/filter";
import { useNavigate, useSearchParams } from "react-router-dom";

const FilterModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [_, setRetingSearchParams] = useSearchParams();

  const closeFilterModal = (e: any) => {
    if (e.target?.getAttribute("class") === "filter-modal filter-modal--open") {
      dispatch(toggleFilterOpenModal());
    }
  };

  const { isFilterModalOpen }: any = useSelector((state) =>
    get(state, "filterData")
  );

  const { data, isError, isLoading } = useGet({
    queryKey: "reting",
    path: "/product",
  });

  const retings: any = [];

  const getReting = () => {
    return get(data, "allProduct", []).map((el: any) => {
      if (!retings.includes(el.reting)) {
        retings.push(el.reting);
      }
    });
  };

  getReting();

  const changeFilterValue = (value: string) => {
    navigate(`/pages/retings/reting`);
    storage.set("reting", value);
    setRetingSearchParams((params: URLSearchParams) => {
      params.set("search", storage.get("reting") as string);
      return params;
    });
    dispatch(toggleFilterOpenModal());
  };

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
          {!isLoading &&
            !isError &&
            get(data, "allProduct", []).length === 0 && (
              <div>
                <h2>NO DATA</h2>
              </div>
            )}
          <ul className="filter-modal__list">
            <ul className="filter-modal__check-list">
              {retings?.length > 0 &&
                retings.map((el: any, index: number) => {
                  return (
                    <li className="filter-modal__check" key={el}>
                      <Input
                        name="data"
                        type="radio"
                        value={el}
                        id={`${index}`}
                        onChange={(e) => changeFilterValue(e.target.value)}
                      />
                      <label
                        htmlFor={`${index}`}
                        className="filter-modal__check-btn"
                      >
                        {el}
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
