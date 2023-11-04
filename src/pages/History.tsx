import { useTokenGet } from "hook";
import { storage } from "services";
import { Pagination } from "components/UI";
import { useEffect, useState } from "react";
import { HistoryIcon1 } from "assets/images/svg";
import { Button, Input } from "components/fields";
import { Link, useNavigate } from "react-router-dom";

const History = () => {
  const allPageCount = [];
  const navigate = useNavigate();
  const [index, _] = useState<number>(5);
  const [currentPage, setCurrentPage] = useState(1);
  const firstOperator = index * currentPage;
  const lastOperator = firstOperator - index;

  const { data } = useTokenGet({
    path: "/order",
    queryKey: "order",
  });

  const sliceHistoryProduct = data?.slice(lastOperator, firstOperator);

  for (let i = 0; i < Math.ceil(data?.length / index); i++) {
    allPageCount.push(i);
  }

  const handleClick = (data: any) => {
    setCurrentPage(data.selected + 1);
  };

  useEffect(() => {
    if (!storage.get("token")) navigate("/");
  }, []);

  return (
    <section className="history">
      <div className="container">
        <div className="history-header">
          <div className="history-header__block">
            <h4 className="history-header__block-heading">Мой аккаунт</h4>
          </div>
          <div className="history-header__block">
            <Link
              type="button"
              to="/pages/history"
              className="history-header__block-btn history-header__block-btn--active"
            >
              История заказов
            </Link>
          </div>
        </div>

        {sliceHistoryProduct?.length > 0 &&
          sliceHistoryProduct?.map((el: any) => {
            return (
              <div className="history__container">
                <Input
                  id={el._id}
                  type="checkbox"
                  name="history-radio"
                  className="history__input"
                />
                <label htmlFor={el._id} className="history-top">
                  <ul className="history-top__list">
                    <li className="history-top__item">
                      <h5 className="history-top__item-heading">Заказ</h5>
                      <div className="history-top__numbers">
                        <h4 className="history-top__numbers-heading">
                          №130312
                        </h4>
                        <h5 className="history-top__numbers-date">
                          {el?.createdAt?.slice(0, 10)?.split("-")?.join(".")}
                        </h5>
                      </div>
                    </li>
                    <li className="history-top__item">
                      <h5 className="history-top__item-heading">
                        Сумма заказа
                      </h5>
                      <div className="history-top__numbers">
                        <h4 className="history-top__numbers-heading">399 ₽</h4>
                      </div>
                    </li>
                    <li className="history-top__item">
                      <h5 className="history-top__item-heading">Статус</h5>
                      <div className="history-top__numbers">
                        <h4 className="history-top__numbers-heading">
                          {el.status}
                        </h4>
                      </div>
                    </li>
                    <li className="history-top__item">
                      <h5 className="history-top__item-heading">Оплачено</h5>
                      <div className="history-top__numbers">
                        <h4 className="history-top__numbers-heading">
                          {el.payment}
                        </h4>
                      </div>
                    </li>
                    <li className="history-top__item">
                      <img
                        alt="arrow-down"
                        src={HistoryIcon1}
                        className="history-top__item-icon"
                      />
                    </li>
                  </ul>
                </label>
                <div className="history-background">
                  <ul className="history-background__list">
                    <li className="history-background__item">
                      <div className="history-background__container">
                        <div className="history-background__box">
                          <h4 className="history-background__box-text">
                            ул. {el.street}, офис {el.kvartira}, 2 {el.etaj},
                            домофон
                            {el.domofon} #
                          </h4>
                        </div>
                        <div className="history-background__box">
                          {el?.orderItems?.length > 0 &&
                            el?.orderItems?.map((el: any) => {
                              return (
                                <img
                                  alt={el?.productId?.name}
                                  src={el?.productId?.images?.home}
                                  className="history-background__box-img"
                                />
                              );
                            })}
                        </div>
                      </div>
                      <ul className="history-background__elements">
                        {el?.orderItems?.length > 0 &&
                          el?.orderItems?.map((el: any) => {
                            return (
                              <li className="history-background__element">
                                <img
                                  alt={el?.productId?.name}
                                  src={el?.productId?.images?.home}
                                  title="card"
                                  className="history-background__element-img"
                                />
                                <div className="history-background__content">
                                  <h4 className="history-background__element-heading">
                                    {el?.productId?.name}
                                  </h4>
                                  <h5 className="history-background__element-regular">
                                    {el?.productId?.description}
                                  </h5>
                                </div>
                                <div className="history-background__wrapper">
                                  <Button
                                    type="button"
                                    className="history-background__element-btn"
                                  >
                                    {el?.quantity} товар
                                  </Button>
                                  <h4 className="history-background__element-price">
                                    {el?.price} ₽
                                  </h4>
                                </div>
                              </li>
                            );
                          })}
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            );
          })}
        {data?.length > 5 && (
          <div className="history-pagination">
            <Pagination
              onPageChange={handleClick}
              pageCount={allPageCount?.length}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default History;
