import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

 function Banner({list}) {
  return (
    <>
    <div className="container">

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {
          list.map((item)=>(
          <SwiperSlide key={item.id}>
          <div className="banner">
          <img src={item.image} alt={item.title} />
          </div>
          </SwiperSlide>
          ))
        }

      </Swiper>
    </div>

    </>
  );
}
export default Banner
