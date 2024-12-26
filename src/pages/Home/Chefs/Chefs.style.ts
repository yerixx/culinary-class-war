import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const SelectView = styled.section`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0 120px;
  gap: 20px;
  z-index: 999;
`;

export const SelectTitle = styled.article`
  width: 100%;
  font-size: 38px;
  font-weight: bold;
`;

export const SelectWrapper = styled.article`
  width: 300px;
  position: absolute;
  top: 125%;
  left: 120px;
`;

export const Selected = styled.article`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  color: #fff;
  border-bottom: 1px solid #fff;
  cursor: pointer;
`;
export const SelectedOption = styled.ul`
  width: 100%;
  padding-inline-start: 0;
  li {
    position: relative;
    width: 100%;
    padding: 16px 10px;
    color: #555;
    background: #000;
    cursor: pointer;
    z-index: 1;
    transition: all 0.3s;
    &::after {
      transition: all 0.3s;
      position: absolute;
      content: "";
      width: 100%;
      bottom: 0;
      left: 0;
    }
    &:hover::after {
      border-bottom: 1px solid #555;
    }
    &:hover {
      color: #fff;
      border-bottom: 1px solid #fff;
    }
  }
`;

export const ChefsView = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  padding-bottom: 0;
  padding: 100px 60px 0px;
  .mySwiper {
    width: 100%;
    height: 76vh;
    padding: 0 60px;
    .slide {
      width: 100%;
      height: 690px;
      display: flex;
      justify-content: center;
      background: rgba(255, 255, 255, 0.1);
      padding: 26px;
      border-radius: 8px;
    }
    .swiper-button-prev,
    .swiper-button-next {
      color: #000;
      scale: 0.5;
      background: rgba(255, 255, 255, 0.8);
      padding: 40px;
      border-radius: 50%;
      transition: all 0.3s;
      &:hover.swiper-button-next {
        background: #fff;
        transform: translateX(10px);
      }
      &:hover.swiper-button-prev {
        background: #fff;
        transform: translateX(-10px);
      }
    }
    .swiper-pagination {
      bottom: 0px;
    }
    .swiper-pagination-bullet {
      scale: 1.2;
      background: #fff;
    }
  }
`;
export const WhiteChefsImage = styled.img`
  width: 100%;
  border-radius: 4px;
`;
export const BlackChefsImage = styled.img`
  width: 380px;
  height: 260px;
  border-radius: 4px;
  object-fit: cover;
  object-position: top;
`;

export const ChefsName = styled.article`
  font-size: 24px;
  span {
    color: #999;
  }
`;
export const ChefsDesc = styled.article`
  width: 100%;
  font-size: 16px;
  line-height: 180%;
  letter-spacing: -1px;
  word-wrap: break-word;
  white-space: break-spaces;
  color: #999;
`;
export const WhiteChefsView = styled.article`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const ChefsAddressView = styled.article`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const ChefsAddress = styled.article`
  display: flex;
  flex-direction: column;
  gap: 10px;
  cursor: pointer;
  b {
    font-size: 18px;
    color: #fff;
    transition: all 0.3s;
  }
  div {
    color: #999;
    transition: all 0.3s;
  }
  &:hover b,
  &:hover div {
    color: #fff;
  }
`;
export const ChefsMap = styled.article``;
