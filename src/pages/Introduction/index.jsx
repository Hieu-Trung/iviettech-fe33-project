import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import { Fragment } from "react";


import * as S from "./style";
import Construction from "../user/Construction";

const Introduction = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };
  return (
    <Fragment>
      <S.SlideWrapper>
        <Slider {...settings}>
          <S.ImageSlide1Wrapper />
          <S.ImageSlide2Wrapper />
          <S.ImageSlide3Wrapper />
          <S.ImageSlide4Wrapper />
          <S.ImageSlide5Wrapper />
        </Slider>
      </S.SlideWrapper>
      <S.TitleWrapper>
        Nếu bạn cho chúng tôi 1% sự tin tưởng, chúng tôi sẽ cho bạn 99% sự hài
        lòng!...
      </S.TitleWrapper>
      <ScrollAnimation animateIn="animate__fadeInDown">
        <S.TitleAboutWrapper>VỀ CHÚNG TÔI 1</S.TitleAboutWrapper>
      </ScrollAnimation>
      <S.AboutDetailWrapper>
        <ScrollAnimation animateIn="animate__fadeInLeft">
          <S.ImageAboutWrapper/>
        </ScrollAnimation>
        <S.TitleDetailAboutWrapper>
          <ScrollAnimation animateIn="animate__fadeInRight">
            Với kinh nghiệm về thiết kế hơn 15 năm trong thiết kế và hoàn thiện
            nội thất cùng đội ngũ thiết kế chuyên nghiệp,{" "}
            <strong>Nội Thât Khoa Phạm</strong>
            mang đến giải pháp toàn diện trong nội thất!...
          </ScrollAnimation>
        </S.TitleDetailAboutWrapper>
      </S.AboutDetailWrapper>
      <Construction />
    </Fragment>
  );
};
export default Introduction;
