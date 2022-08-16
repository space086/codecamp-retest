import {
  Wrap,
  SliderImage,
  StyledSlider,
  SliderImageWrap,
} from "./LayoutBanner.styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LayoutBanner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Wrap>
      <StyledSlider {...settings}>
        <SliderImageWrap>
          <SliderImage src="../images/banner1.jpg" />
        </SliderImageWrap>
        <SliderImageWrap>
          <SliderImage src="../images/banner2.jpg" />
        </SliderImageWrap>
        <SliderImageWrap>
          <SliderImage src="../images/banner3.jpg" />
        </SliderImageWrap>
      </StyledSlider>
    </Wrap>
  );
}
