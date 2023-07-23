import * as S from "./style";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

const ListConstruction = () => {
  return (
    <S.ConstructionWrapper>
      <ScrollAnimation animateIn="animate__fadeInLeft">
        <S.TitleWrapper>MỘT SỐ KHÔNG GIAN NỘI THẤT</S.TitleWrapper>
      </ScrollAnimation>
      <S.ListConstructionWrapper>
        <ScrollAnimation animateIn="animate__zoomIn">
          <S.CardConstructionWrapper>
            <S.image>Image 400 x 200</S.image>
            <S.TitleListWrapper>
              Nội Thất phòng khách hiện đại và sang trọng
            </S.TitleListWrapper>
            <S.ContentWrapper>
              Nếu ví ngôi nhà là một cá thể nhất định thì không gian phòng khách
              chính là vẻ bề ngoài còn nội thất của phòng khách thể hiện phần
              nào
            </S.ContentWrapper>
          </S.CardConstructionWrapper>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__zoomIn">
          <S.CardConstructionWrapper>đáas</S.CardConstructionWrapper>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__zoomIn">
          <S.CardConstructionWrapper>đáas</S.CardConstructionWrapper>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__zoomIn">
          <S.CardConstructionWrapper>đáas</S.CardConstructionWrapper>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__zoomIn">
          <S.CardConstructionWrapper>đáas</S.CardConstructionWrapper>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__zoomIn">
          <S.CardConstructionWrapper>đáas</S.CardConstructionWrapper>
        </ScrollAnimation>
        
      </S.ListConstructionWrapper>
    </S.ConstructionWrapper>
  );
};
export default ListConstruction;
