import { restangleCard1 } from "assets/images/svg";

const index = () => {
  return (
    <>
      <section className="restangle-card">
        <div className="container">
          <ul className="restangle-card__list">
            <li className="restangle-card__item">
              <img
                src={restangleCard1}
                alt="restangle-card"
                title="restangle-card"
                className="restangle-card__item-img"
              />
              <div className="restangle-card__item-line">
                <h4 className="restangle-card__item-heading">
                  3 средние пиццы от 999 рубле
                </h4>
              </div>
            </li>
            <li className="restangle-card__item">
              <img
                src={restangleCard1}
                alt="restangle-card"
                title="restangle-card"
                className="restangle-card__item-img"
              />
              <h4 className="restangle-card__item-heading">
                Кэшбек 10% на самовывоз (доставка)
              </h4>
            </li>
            <li className="restangle-card__item">
              <img
                src={restangleCard1}
                alt="restangle-card"
                title="restangle-card"
                className="restangle-card__item-img"
              />
              <h4 className="restangle-card__item-heading">
                3 средние пиццы от 999 рублей
              </h4>
            </li>
            <li className="restangle-card__item">
              <img
                src={restangleCard1}
                alt="restangle-card"
                title="restangle-card"
                className="restangle-card__item-img"
              />
              <h4 className="restangle-card__item-heading">
                Кэшбек 10% на самовывоз (доставка)
              </h4>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default index;
