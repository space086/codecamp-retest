import styled from "@emotion/styled";
import Slider from "react-slick";

export const Wrap = styled.div`
  /* width: 100%; */
  margin: 0;
`;

export const StyledSlider = styled(Slider)`
  overflow-x: hidden;
  height: 100%;
  .slick-list {
    height: 100%;
    object-fit: cover;
    display: flex;
    align-items: center; // 이미지가 정방향이 아닐 경우 가운데 위치
  }
  .slick-track {
    display: flex;
    align-items: center;
  }

  .slick-prev {
    width: 20px;
    height: 20px;
    left: 10px;
    z-index: 999;
  }
  .slick-next {
    right: 10px;
    z-index: 999;
  }

  .slick-dots {
    bottom: 40px;
    color: white;
  }

  .slick-dots li button:before {
    color: white;
  }

  .slick-dots li.slick-active button:before {
    color: white;
  }
`;

export const SliderImageWrap = styled.div`
  width: 100vw;
  height: 750px;
  background-position: center;
`;

export const SliderImage = styled.img`
  background-position: center;
  background-size: cover;
`;
