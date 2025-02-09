import styled from "styled-components";

export const Wrapper = styled.main`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  @media (max-width: 768px) {
    height: 60vh;
  }
`;
export const Video = styled.video`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  @media (max-width: 768px) {
    object-fit: cover;
    height: 60vh;
  }
`;
