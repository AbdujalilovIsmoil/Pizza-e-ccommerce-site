import { Autoplay } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import {
  Categories1,
  Categories2,
  Categories3,
  Categories4,
  Categories5,
  Categories6,
  Categories7,
  Categories8,
} from "assets/images/svg";

const index = () => {
  return (
    <>
      <div className="container">
        <section className="categories">
          <Swiper
            loop={true}
            spaceBetween={30}
            slidesPerView={8}
            modules={[Autoplay]}
            className="categories__list"
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
              <li className="categories__item">
                <img
                  src={Categories1}
                  alt="categories-1"
                  title="categories-1"
                  className="categories__item-img"
                />
                <div className="categories__item-desc">
                  <h4 className="categories__item-heading">Акции</h4>
                </div>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li className="categories__item">
                <img
                  src={Categories2}
                  alt="categories-2"
                  title="categories-2"
                  className="categories__item-img"
                />
                <div className="categories__item-desc">
                  <h4 className="categories__item-heading">Пицца</h4>
                </div>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li className="categories__item">
                <img
                  src={Categories3}
                  alt="categories-3"
                  title="categories-3"
                  className="categories__item-img"
                />
                <div className="categories__item-desc">
                  <h4 className="categories__item-heading">Суши</h4>
                </div>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li className="categories__item">
                <img
                  src={Categories4}
                  alt="categories-4"
                  title="categories-4"
                  className="categories__item-img"
                />
                <div className="categories__item-desc">
                  <h4 className="categories__item-heading">Напитки</h4>
                </div>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li className="categories__item">
                <img
                  src={Categories5}
                  alt="categories-5"
                  title="categories-5"
                  className="categories__item-img"
                />
                <div className="categories__item-desc">
                  <h4 className="categories__item-heading">Закуски</h4>
                </div>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li className="categories__item">
                <img
                  src={Categories6}
                  alt="categories-6"
                  title="categories-6"
                  className="categories__item-img"
                />
                <div className="categories__item-desc">
                  <h4 className="categories__item-heading">Коa </h4>
                </div>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li className="categories__item">
                <img
                  src={Categories7}
                  alt="categories-7"
                  title="categories-7"
                  className="categories__item-img"
                />
                <div className="categories__item-desc">
                  <h4 className="categories__item-heading">Десерты</h4>
                </div>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li className="categories__item">
                <img
                  src={Categories8}
                  alt="categories-8"
                  title="categories-8"
                  className="categories__item-img"
                />
                <div className="categories__item-desc">
                  <h4 className="categories__item-heading">Соусы</h4>
                </div>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li className="categories__item">
                <img
                  src={Categories1}
                  alt="categories-1"
                  title="categories-1"
                  className="categories__item-img"
                />
                <div className="categories__item-desc">
                  <h4 className="categories__item-heading">Акции</h4>
                </div>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li className="categories__item">
                <img
                  src={Categories2}
                  alt="categories-2"
                  title="categories-2"
                  className="categories__item-img"
                />
                <div className="categories__item-desc">
                  <h4 className="categories__item-heading">Пицца</h4>
                </div>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li className="categories__item">
                <img
                  src={Categories3}
                  alt="categories-3"
                  title="categories-3"
                  className="categories__item-img"
                />
                <div className="categories__item-desc">
                  <h4 className="categories__item-heading">Суши</h4>
                </div>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li className="categories__item">
                <img
                  src={Categories4}
                  alt="categories-4"
                  title="categories-4"
                  className="categories__item-img"
                />
                <div className="categories__item-desc">
                  <h4 className="categories__item-heading">Напитки</h4>
                </div>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li className="categories__item">
                <img
                  src={Categories5}
                  alt="categories-5"
                  title="categories-5"
                  className="categories__item-img"
                />
                <div className="categories__item-desc">
                  <h4 className="categories__item-heading">Закуски</h4>
                </div>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li className="categories__item">
                <img
                  src={Categories6}
                  alt="categories-6"
                  title="categories-6"
                  className="categories__item-img"
                />
                <div className="categories__item-desc">
                  <h4 className="categories__item-heading">Коa </h4>
                </div>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li className="categories__item">
                <img
                  src={Categories7}
                  alt="categories-7"
                  title="categories-7"
                  className="categories__item-img"
                />
                <div className="categories__item-desc">
                  <h4 className="categories__item-heading">Десерты</h4>
                </div>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li className="categories__item">
                <img
                  src={Categories8}
                  alt="categories-8"
                  title="categories-8"
                  className="categories__item-img"
                />
                <div className="categories__item-desc">
                  <h4 className="categories__item-heading">Соусы</h4>
                </div>
              </li>
            </SwiperSlide>
          </Swiper>
        </section>
      </div>
    </>
  );
};

export default index;
