import Error from "./Error";
import { get } from "lodash";
import { api, storage } from "services";
import { Empty } from "components/UI";
import { useDispatch } from "react-redux";
import { Button } from "components/fields";
import { useEffect, useState } from "react";
import { GroupCardFilter } from "assets/images/svg";
import { toggleFilterOpenModal } from "store/filterData";
import { Auth, FilterModal, Loader } from "components/layouts";
import { useNavigate, useSearchParams } from "react-router-dom";
import { setProductId, toggleProductModal } from "store/productData";

const Filter = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isError, setIsError] = useState(false);
  const [retingSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const retingQuery = retingSearchParams.get("search");
  const [retingData, setRetingData] = useState<any[]>([]);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);

  useEffect(() => {
    if (!storage.get("token")) {
      navigate({
        pathname: "/",
      });
    }
  }, []);

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
    if (!storage.get("token")) {
      setIsAuthModalOpen(true);
    } else {
      dispatch(setProductId(id));
      dispatch(toggleProductModal());
    }
  };

  const openFilterModal = () => {
    if (!storage.get("token")) {
      setIsAuthModalOpen(true);
    } else {
      dispatch(toggleFilterOpenModal());
    }
  };

  return (
    <div className="container">
      <FilterModal />
      <Auth
        isAuthModalOpen={isAuthModalOpen}
        setIsAuthModalOpen={setIsAuthModalOpen}
      />
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
                onClick={() => openFilterModal()}
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
