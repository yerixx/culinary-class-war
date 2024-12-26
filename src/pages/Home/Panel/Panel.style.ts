import styled from "styled-components";

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding: 60px 120px;
  margin-bottom: 100px;
`;
export const SwiperView = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  .mySwiper {
    width: 100%;
    display: flex;
    padding: 30px 0;
    .slide {
      display: flex;
      flex-direction: column;
      padding-right: 50px;
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
  gap: 20px;
`;

export const PanelTitle = styled.article`
  font-size: 38px;
  font-weight: bold;
`;

export const Text = styled.article`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
`;
export const Img = styled.img`
  width: 100%;
  height: 580px;
  object-position: top;
  margin: 0 auto;
  border-radius: 8px;
  object-fit: cover;
`;
export const Name = styled.h1`
  width: 100%;
  font-size: 30px;
  word-wrap: break-word;
  white-space: break-spaces;
`;
export const Birth = styled.p`
  width: 100%;
  color: #999;
  font-size: 15px;
  word-wrap: break-word;
  white-space: break-spaces;
`;
export const Desc = styled.p`
  width: 100%;
  font-size: 17px;
  line-height: 170%;
  word-wrap: break-word;
  white-space: break-spaces;
  /* padding: 30px; */
`;
