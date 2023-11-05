import Error from "./Error";
import { get } from "lodash";
import { api, storage } from "services";
import { Button } from "components/fields";
import { memo, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { GroupCardFilter } from "assets/images/svg";
import { useDispatch, useSelector } from "react-redux";
import { Auth, FilterModal, Loader } from "components/layouts";
import { toggleFilterOpenModal } from "store/filterData";
import { setProductId, toggleProductModal } from "store/productData";

const Category = () => {
  const dispatch = useDispatch();
  const [category, _] = useSearchParams();
  const categoryQuery = category.get("search");
  const [isError, setIsError] = useState<boolean>(false);
  const [categoryData, setCategoryData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);
  const { isFilterModalOpen }: any = useSelector((state) =>
    get(state, "filterData")
  );

  useEffect(() => {
    setIsError(false);
    setIsLoading(true);
    api
      .get(`/product/category?category=${categoryQuery?.split("").join("")}`)
      .then((res) => {
        setIsError(false);
        setIsLoading(false);
        setCategoryData([...get(res, "data.prodyct")]);
      })
      .catch(() => {
        setIsError(true);
        setIsLoading(false);
      });
  }, [categoryQuery]);

  if (isFilterModalOpen) {
    document.body.classList.add("hidden");
  } else {
    document.body.classList.remove("hidden");
  }

  const clickButton = (id: string) => {
    if (!storage.get("token")) {
      setIsAuthModalOpen(true);
    } else {
      dispatch(setProductId(id));
      dispatch(toggleProductModal());
    }
  };

  return (
    <>
      <Auth
        isAuthModalOpen={isAuthModalOpen}
        setIsAuthModalOpen={setIsAuthModalOpen}
      />
      <div className="container">
        <FilterModal />
        <ul className="group-card__list">
          <li className="group-card__item">
            <div className="group-card__header">
              <div className="group-card__box">
                <h2 className="group-card__box-heading">{categoryQuery}</h2>
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
                {categoryData.length > 0 &&
                  categoryData.map((el: any) => {
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
          </li>
        </ul>
      </div>
    </>
  );
};

export default memo(Category);
