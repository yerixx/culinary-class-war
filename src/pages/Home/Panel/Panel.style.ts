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
    padding: 50px 0;
    .slide {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 30px;
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
  font-size: 34px;
  font-weight: bold;
`;

export const Text = styled.article`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const Img = styled.img`
  width: 500px;
  margin: 0 auto;
  border-radius: 8px;
  object-fit: cover;
`;
export const Name = styled.h1`
  width: 100%;
  word-wrap: break-word;
  white-space: break-spaces;
  padding: 30px;
`;
export const Birth = styled.h3`
  width: 100%;
  word-wrap: break-word;
  white-space: break-spaces;
  padding: 30px;
`;
export const Desc = styled.p`
  width: 100%;
  word-wrap: break-word;
  white-space: break-spaces;
  padding: 30px;
`;
