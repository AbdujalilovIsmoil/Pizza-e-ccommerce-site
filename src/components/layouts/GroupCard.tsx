import { get } from "lodash";
import { useGet } from "hook";
import Error from "pages/Error";
import { useState } from "react";
import { storage } from "services";
import { Button } from "components/fields";
import { GroupCardFilter } from "assets/images/svg";
import { useDispatch, useSelector } from "react-redux";
import { toggleFilterOpenModal } from "store/filterData";
import { Auth, FilterModal, Loader } from "components/layouts";
import { toggleProductModal, setProductId } from "store/productData";

const GroupCard = () => {
  const dispatch = useDispatch();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);
  const { isFilterModalOpen }: any = useSelector((state) =>
    get(state, "filterData")
  );

  if (isFilterModalOpen) {
    document.body.classList.add("hidden");
  } else {
    document.body.classList.remove("hidden");
  }

  const { data, isFetching, isError } = useGet({
    path: "/product",
    queryKey: "product",
  });

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
    <section className="group-card">
      <FilterModal />
      <Auth
        isAuthModalOpen={isAuthModalOpen}
        setIsAuthModalOpen={setIsAuthModalOpen}
      />
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
            {isError && <Error />}
            {!isError && isFetching && <Loader />}
            <ul className="cards">
              {!isError &&
                !isFetching &&
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
                              {el.price} ₽
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
