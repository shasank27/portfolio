import React from "react";
import "./testimonials.css";
import AV1 from "../../assets/avatar1.jpg";
import AV2 from "../../assets/avatar2.jpg";
import AV3 from "../../assets/avatar3.jpg";
import AV4 from "../../assets/avatar4.jpg";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AV1,
    name: "Shasank Periwal",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus nisi dignissimos ratione totam ex iusto nam neque exercitationem, tempora natus!",
  },
  {
    avatar: AV2,
    name: "Shasank Periwal",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus nisi dignissimos ratione totam ex iusto nam neque exercitationem, tempora natus!",
  },
  {
    avatar: AV3,
    name: "Shasank Periwal",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus nisi dignissimos ratione totam ex iusto nam neque exercitationem, tempora natus!",
  },
  {
    avatar: AV4,
    name: "Shasank Periwal",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus nisi dignissimos ratione totam ex iusto nam neque exercitationem, tempora natus!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from people</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonial__container"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        pagination={{
          dynamicBullets: true,
        }}
        spaceBetween={50}
        slidesPerView={1}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar 1" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
