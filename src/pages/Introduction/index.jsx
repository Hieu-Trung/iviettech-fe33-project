import Slider from "react-slick"
import slide1 from '../../image/slide/slide1.jpg'
import slide2 from "../../image/slide/slide2.jpg";
import slide3 from "../../image/slide/slide3.jpg";
import slide4 from "../../image/slide/slide4.jpg";
import slide5 from "../../image/slide/slide5.jpg";
const Introduction = () => {
    const styleSlider = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
    };
    return (
        <Slider {...styleSlider}>

        </Slider>
    )
}
export default Introduction