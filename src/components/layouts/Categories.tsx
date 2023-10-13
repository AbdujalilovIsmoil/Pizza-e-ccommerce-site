import { Autoplay } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import {
  Categories2,
  Categories3,
  Categories4,
  Categories5,
  Categories6,
  Categories7,
  Categories8,
} from "assets/images/svg";

const Categories = () => {
  type Tcategories = {
    id: number;
    img: string;
    title: string;
  };

  const categories: Tcategories[] = [
    {
      id: 1,
      img: Categories2,
      title: "Пицца",
    },
    {
      id: 2,
      img: Categories3,
      title: "Суши",
    },
    {
      id: 3,
      img: Categories4,
      title: "Напитки",
    },
    {
      id: 4,
      img: Categories5,
      title: "Закуски",
    },
    {
      id: 5,
      img: Categories6,
      title: "Коa",
    },
    {
      id: 6,
      img: Categories7,
      title: "Десерты",
    },
    {
      id: 7,
      img: Categories8,
      title: "Соусы",
    },
    {
      id: 8,
      img: Categories8,
      title: "Соусы",
    },
    {
      id: 9,
      img: Categories8,
      title: "Соусы",
    },
    {
      id: 10,
      img: Categories8,
      title: "Соусы",
    },
    {
      id: 11,
      img: Categories8,
      title: "Соусы",
    },
    {
      id: 12,
      img: Categories8,
      title: "Соусы",
    },
    {
      id: 13,
      img: Categories8,
      title: "Соусы",
    },
    {
      id: 14,
      img: Categories8,
      title: "Соусы",
    },
    {
      id: 15,
      img: Categories8,
      title: "Соусы",
    },
    {
      id: 16,
      img: Categories8,
      title: "Соусы",
    },
  ];

  return (
    <>
      <div className="container">
        <section className="categories">
          <Swiper
            loop={true}
            grabCursor={true}
            spaceBetween={30}
            slidesPerView={8}
            modules={[Autoplay]}
            className="categories__list"
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
          >
            {categories.length > 0 &&
              categories.map((el: Tcategories) => {
                return (
                  <SwiperSlide key={el.id}>
                    <li className="categories__item">
                      <img
                        src={el.img}
                        alt="categories-8"
                        title="categories-8"
                        className="categories__item-img"
                      />
                      <div className="categories__item-desc">
                        <h4 className="categories__item-heading">{el.title}</h4>
                      </div>
                    </li>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </section>
      </div>
    </>
  );
};

export default Categories;
