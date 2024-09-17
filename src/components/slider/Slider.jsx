import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; 
import imageOne from "../../assets/images/images/imageOne.jpg";
import imageTwo from "../../assets/images/images/imageTwo.jpg";
import imageThree from "../../assets/images/images/imageThree.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "./Slider.scss";

function Slider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  useEffect(() => {
    const swiper = document.querySelector(".swiper").swiper;
    if (swiper) {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, []);
  return (
    <div className="slider__container">
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        <SwiperSlide>
          <div className="slide__image__container">
            <img src={imageOne} alt="Image One" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide__image__container">
            <img src={imageTwo} alt="Image Two" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide__image__container">
            <img src={imageThree} alt="Image Three" />
          </div>
        </SwiperSlide>
        <div className="swiper__button__container">
          <button ref={prevRef} className="custom-prev-button">
            <svg
              width="18"
              height="30"
              viewBox="0 0 18 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 3.525L6.87449 15L18 26.475L14.5749 30L-5.96007e-07 15L14.5749 3.51527e-06L18 3.525Z"
                fill="#003087"
              />
            </svg>
          </button>
          <button ref={nextRef} className="custom-next-button">
            <svg
              width="18"
              height="30"
              viewBox="0 0 18 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 26.475L11.1255 15L0 3.525L3.4251 0L18 15L3.4251 30L0 26.475Z"
                fill="#D9D9D9"
              />
            </svg>
          </button>
        </div>
      </Swiper>
    </div>
  );
}

export default Slider;
