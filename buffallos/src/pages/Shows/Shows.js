// SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative } from "swiper";
import "swiper/css";
import "swiper/css/effect-creative";
import "./styles.css";

// Estilos do Styled
import * as S from "./ShowsStyled";
import post1 from "../../assets/posterShow1.jpeg";
import post2 from "../../assets/posterShow2.jpeg";
import post3 from "../../assets/posterShow3.jpeg";
import post4 from "../../assets/posterShow4.jpeg";
import post5 from "../../assets/posterShow5.jpeg";
import post6 from "../../assets/posterShow6.jpeg";

const Shows = () => {
  return (
    <S.Container>
      <Swiper
        grabCursor={true}
        effect={"creative"}
        loop={true}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectCreative]}
        className="mySwiper"
      >
        <SwiperSlide>
          <S.ImgPost src={post1} alt="poster do show 1" />
        </SwiperSlide>
        <SwiperSlide>
          <S.ImgPost src={post2} alt="poster do show 2" />
        </SwiperSlide>
        <SwiperSlide>
          <S.ImgPost src={post3} alt="poster do show 3" />
        </SwiperSlide>
        <SwiperSlide>
          <S.ImgPost src={post4} alt="poster do show 4" />
        </SwiperSlide>
        <SwiperSlide>
          <S.ImgPost src={post5} alt="poster do show 5" />
        </SwiperSlide>
        <SwiperSlide>
          <S.ImgPost src={post6} alt="poster do show 6" />
        </SwiperSlide>
      </Swiper>
    </S.Container>
  );
};

export default Shows;
