import { get } from "lodash";
import { api } from "services";
import { useDispatch } from "react-redux";
import { Button } from "components/fields";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { GroupCardFilter } from "assets/images/svg";
import { toggleFilterOpenModal } from "store/filterData";
import { setProductId, toggleProductModal } from "store/productData";
import { FilterModal, Loader } from "components/layouts";
import Error from "./Error";
import { Empty } from "components/UI";

const Filter = () => {
  const dispatch = useDispatch();
  const [isError, setIsError] = useState(false);
  const [retingSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const retingQuery = retingSearchParams.get("search");
  const [retingData, setRetingData] = useState<any[]>([]);

  useEffect(() => {
    setIsLoading(true);
    api
      .get(
        `/product/filter-by-reting?reting=${retingQuery?.split("").join("")}`
      )
      .then((res) => {
        setIsError(false);
        setIsLoading(false);
        setRetingData([...get(res, "data.retings")]);
      })
      .catch(() => {
        setIsError(true);
      });
  }, [retingQuery]);

  const clickButton = (id: string) => {
    dispatch(setProductId(id));
    dispatch(toggleProductModal());
  };

  return (
    <div className="container">
      <FilterModal />
      <ul className="group-card__list">
        <li className="group-card__item">
          <div className="group-card__header">
            <div className="group-card__box">
              <h2 className="group-card__box-heading">{retingQuery}</h2>
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
          {isError ? (
            <Error />
          ) : isLoading ? (
            <Loader />
          ) : (
            <ul className="cards">
              {retingData.length > 0 &&
                retingData.map((el: any) => {
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
                              {el.price} ₽
                            </h4>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
            </ul>
          )}
          {retingData.length === 0 && <Empty content="No other products" />}
        </li>
      </ul>
    </div>
  );
};

export default Filter;
