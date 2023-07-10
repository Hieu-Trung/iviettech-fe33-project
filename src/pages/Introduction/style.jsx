import { styled } from "styled-components";
import Slide1 from '../../image/slide/slide1.jpg'
import Slide2 from '../../image/slide/slide2.jpg'
import Slide3 from "../../image/slide/slide3.jpg";
import Slide4 from "../../image/slide/slide4.jpg";
import Slide5 from "../../image/slide/slide5.jpg";
export const SlideWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const ImageSlide1Wrapper = styled.div`
  background-image: url(${Slide1});
  height: 500px;
  background-size: 100% 100%;
`;
export const ImageSlide2Wrapper = styled.div`
  background-image: url(${Slide2});
  height: 500px;
 background-size: 100% 100%;
`;
export const ImageSlide3Wrapper = styled.div`
  background-image: url(${Slide3});
  height: 500px;
 background-size: 100% 100%;
`;
export const ImageSlide4Wrapper = styled.div`
  background-image: url(${Slide4});
  height: 500px;
 background-size: 100% 100%;
`;
export const ImageSlide5Wrapper = styled.div`
  background-image: url(${Slide5});
  height: 500px;
 background-size: 100% 100%;
`;
