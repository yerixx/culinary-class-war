import styled from "styled-components";

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding: 60px 120px;
  margin-bottom: 100px;
  @media (max-width: 768px) {
    padding: 20px;
    height: auto;
  }
`;
export const SwiperView = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  .mySwiper {
    display: flex;
    width: 100%;
    height: 80vh;
    padding: 32px 0px 0px;
    @media (max-width: 768px) {
      height: 60vh;
    }
    .slide {
      display: flex;
      flex-direction: column;
      padding-right: 32px;
      &:last-of-type {
        padding-right: 0px;
      }
    }
    .swiper-pagination {
      bottom: 0;
    }
    .swiper-pagination-bullet {
      scale: 1.2;
      background: #fff;
    }
  }
`;

export const PanelView = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const PanelTitle = styled.article`
  font-size: 38px;
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const Text = styled.article`
  position: absolute;
  left: 0;
  bottom: 0;
  opacity: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 20px;
  transition: opacity 0.3s ease-in-out;
`;
export const ImgBox = styled.article`
  position: relative;
  width: 100%;
  height: 100%;
  // height: 600px;
  border-radius: 8px;
  overflow: hidden;
  &::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    opacity: 0;
    width: 100%;
    height: 100%;
    transition: all 0.3s;
  }
  &:hover::before {
    opacity: 1;
    background: radial-gradient(
      circle,
      rgba(0, 0, 0, 0.4) 50%,
      rgba(0, 0, 0, 0.7) 100%
    );
  }

  &:hover ${Text} {
    opacity: 1;
  }
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;
  // height: 600px;
  object-position: top;
  margin: 0 auto;
  object-fit: cover;
`;
export const Title = styled.h1`
  width: 100%;
  font-size: 16px;
  font-weight: normal;
  word-wrap: break-word;
  white-space: break-spaces;
`;
export const Name = styled.h1`
  width: 100%;
  font-size: 30px;
  word-wrap: break-word;
  white-space: break-spaces;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;
export const Birth = styled.p`
  width: 100%;
  color: #d2d2d2;
  font-size: 15px;
  word-wrap: break-word;
  white-space: break-spaces;
`;
export const Desc = styled.p`
  width: 100%;
  font-size: 17px;
  line-height: 1.6;
  word-wrap: break-word;
  white-space: break-spaces;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
