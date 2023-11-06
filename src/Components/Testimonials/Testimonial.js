import './Testimonial.css'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import tresor from '../../images/tresor.jpeg'
import mypic from '../../images/380696937_270865792497138_7152962114175145613_n.jpg'
import diox from '../../images/diox.jpg'
import pilato from '../../images/pic.PNG'
import Nicola from '../../images/Nicola.jpg'

const Testimonial = () => {
  const clients = [
    {
      img: mypic,
      review:
       "Hivi na hivi",
    },
    {
      img: pilato,
      review:
        "Trent",
    },
    {
      img: Nicola,
      review:
        "Nicola",
    },
    {
      img: diox,
      review:
        "Dieudonne Ibikoraneza",
    },
    {
      img: tresor,
      review:
        "Tresor",
    }
  ];

  return (
    <div className=" t-wrapper" id="testimonials">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div
          className="blur t-blur2"
          style={{ background: "skyblue" }}
        ></div>
      </div>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial">
              <img src={client.img} alt="climag" />
              <span>{client.review}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
