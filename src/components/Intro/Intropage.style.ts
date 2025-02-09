import styled from "styled-components";

export const Wrapper = styled.main`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  @media (max-width: 768px) {
    height: 100%;
  }
`;
export const Video = styled.video`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  @media (max-width: 768px) {
    object-fit: contain;
    height: 100%;
  }
`;
