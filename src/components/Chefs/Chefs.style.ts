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
  gap: 10px;
  z-index: 999;
`;

export const SelectTitle = styled.article`
  width: 100%;
  font-size: 38px;
  font-weight: bold;
`;

export const SelectWrapper = styled.article`
  width: 100%;
  position: absolute;
  top: 125%;
  left: 120px;
`;

export const Selected = styled.article`
  position: relative;
  width: 300px;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  color: #fff;
  border-bottom: 1px solid #fff;
  cursor: pointer;
`;
export const SelectedOption = styled.ul`
  width: 300px;
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

export const SearchInput = styled.input`
  position: absolute;
  top: 0;
  right: 180px;
  width: 220px;
  height: 40px;
  padding: 5px 10px;
  margin-left: 10px;
  border: 1px solid #333;
  background: none;
  border-radius: 5px;
  font-size: 14px;
  outline: none;
  color: #fff;
  &::placeholder {
    opacity: 1;
    transition: all 0.3s;
  }
  &:hover::placeholder {
    opacity: 0;
  }
`;

export const ChefsView = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  padding-bottom: 0;
  padding: 80px 60px 0px;
  .mySwiper {
    width: 100%;
    height: 76vh;
    padding: 0 60px;
    .slide {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      background: rgba(255, 255, 255, 0.1);
      padding: 16px 18px;
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
      display: none;
      /* bottom: 0px; */
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
  aspect-ratio: 16 / 9;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  object-fit: cover;
  object-position: top;
`;

export const ChefsName = styled.article`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 24px;
  span {
    color: #d2d2d2;
    font-size: 14px;
  }
`;
export const ChefsDesc = styled.article`
  width: 100%;
  min-height: 130px;
  overflow-y: scroll;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -1px;
  word-wrap: break-word;
  white-space: break-spaces;
  color: #999;
  padding-bottom: 6px;
  border-bottom: 1px solid #999;
`;
export const ChefsViewContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const ChefsAddressView = styled.article`
  display: flex;
  flex-direction: column;
  height: 120px;
  overflow-y: scroll;
  gap: 16px;
`;
export const ChefsAddressMap = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const ChefsAddress = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  b {
    flex: 0.7;
    font-size: 14px;
    color: #fff;
    transition: all 0.3s;
  }
  div {
    flex: 2;
    color: #999;
    font-size: 13px;
    transition: all 0.3s;
  }
`;

export const MapIcon = styled.article`
  flex: 0.2;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  cursor: pointer;
`;
export const ChefsMap = styled.article``;
