// SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "./styles.css";
import { EffectCards } from "swiper";

// Estilos do Styled
import * as S from "./ShowsStyled";
import post1 from "../../assets/posterShow1.jpeg";
import post2 from "../../assets/posterShow2.jpeg";
import post3 from "../../assets/posterShow3.jpeg";
import post4 from "../../assets/posterShow4.jpeg";
import post5 from "../../assets/posterShow5.jpeg";
import post6 from "../../assets/posterShow6.jpeg";
import wpp from "../../assets/botaoWpp.png";

const Shows = () => {
  return (
    <S.Container>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
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
      <a href="https://wa.me/+5521976460392?text=Reservas" target="blank">
        <S.ImgWpp src={wpp} alt="botão do whatsapp"/>
      </a>
    </S.Container>
  );
};

export default Shows;
