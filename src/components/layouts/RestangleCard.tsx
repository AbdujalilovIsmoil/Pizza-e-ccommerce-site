import { Autoplay } from "swiper/modules";
import { restangleCard1 } from "assets/images/svg";
import { Swiper, SwiperSlide } from "swiper/react";

const RestangleCard = () => {
  return (
    <>
      <section className="restangle-card">
        <div className="container">
          <Swiper
            loop={true}
            spaceBetween={30}
            slidesPerView={4}
            grabCursor={true}
            modules={[Autoplay]}
            className="restangle-card__list"
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
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
            </SwiperSlide>
            <SwiperSlide>
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
            </SwiperSlide>
            <SwiperSlide>
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
            </SwiperSlide>
            <SwiperSlide>
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
            </SwiperSlide>
            <SwiperSlide>
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
            </SwiperSlide>
            <SwiperSlide>
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
            </SwiperSlide>
            <SwiperSlide>
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
            </SwiperSlide>
            <SwiperSlide>
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
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default RestangleCard;
