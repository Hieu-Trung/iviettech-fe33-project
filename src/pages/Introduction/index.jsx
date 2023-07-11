import Slider from "react-slick"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import * as S from './style'
const Introduction = () => {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false
    };
  return (
    <S.SlideWrapper>
      <Slider {...settings}>
        <S.ImageSlide1Wrapper/>
        <S.ImageSlide2Wrapper />
        <S.ImageSlide3Wrapper />
        <S.ImageSlide4Wrapper />
        <S.ImageSlide5Wrapper/>
      </Slider>
    </S.SlideWrapper>
  );
}
export default Introduction