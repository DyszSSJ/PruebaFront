import Cards from "../Cards/Cards";
import styles from "./Swiper.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

function SwiperSlider() {
  return (
    <>
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        onSlideChange={() => console.log("slide change")}
        pagination={{ clickable: true }}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <Cards />
        </SwiperSlide>
        <SwiperSlide>
          <Cards />
        </SwiperSlide>
        <SwiperSlide>
          <Cards />
        </SwiperSlide>
        <SwiperSlide>
          <Cards />
        </SwiperSlide>
        <SwiperSlide>
          <Cards />
        </SwiperSlide>
        <SwiperSlide>
          <Cards />
        </SwiperSlide>
        <SwiperSlide>
          <Cards />
        </SwiperSlide>
      </Swiper>
      {/* <div className={styles.sliderPoints}>
        <div className={styles.points}></div>
        <div className={styles.points}></div>
        <div className={styles.points}></div>
        <div className={styles.points}></div>
        <div className={styles.points}></div>
      </div> */}
    </>
  );
}

export default SwiperSlider;
