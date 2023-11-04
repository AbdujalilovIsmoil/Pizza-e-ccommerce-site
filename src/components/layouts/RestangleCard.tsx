import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  RestangleCardImg1,
  RestangleCardImg2,
  RestangleCardImg3,
  RestangleCardImg4,
  RestangleCardImg5,
  RestangleCardImg6,
  RestangleCardImg7,
  RestangleCardImg8,
} from "assets/images/jpg";

const RestangleCard = () => {
  type CardsData = {
    id: number;
    img: string;
    text: string;
  };

  const cardsData: CardsData[] = [
    {
      id: 1,
      img: RestangleCardImg1,
      text: "Baked tasty margerita pizza near oven stock photo",
    },
    {
      id: 2,
      img: RestangleCardImg2,
      text: `Pizza with salami, bell pepper, tomatoes and cheese, pickles,
      bacon and sausages on a light background. Close-up, selective
      focus stock photo`,
    },
    {
      id: 3,
      img: RestangleCardImg3,
      text: `Freshly baked pizza with arugula, tomato, red onion and
      mozzarella stock photo`,
    },
    {
      id: 4,
      img: RestangleCardImg4,
      text: "Sausage and vegetable pizza on dark background stock photo",
    },
    {
      id: 5,
      img: RestangleCardImg5,
      text: "Grilled sausages stock photo",
    },
    {
      id: 6,
      img: RestangleCardImg6,
      text: "Sausages variation on dark wood table stock photo",
    },
    {
      id: 7,
      img: RestangleCardImg7,
      text: "Italiam cured meat variety stock photo",
    },
    {
      id: 8,
      img: RestangleCardImg8,
      text: "Grilling Sausage stock photo",
    },
  ];

  return (
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
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
            1300: {
              slidesPerView: 4,
            },
          }}
        >
          {cardsData.length > 0 &&
            cardsData.map((el: CardsData) => {
              return (
                <SwiperSlide key={el.id}>
                  <li className="restangle-card__item">
                    <img
                      src={el.img}
                      alt={el.text}
                      title={el.text}
                      className="restangle-card__item-img"
                    />
                    <h4 className="restangle-card__item-heading">
                      {el.text}
                    </h4>
                  </li>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </section>
  );
};

export default RestangleCard;
