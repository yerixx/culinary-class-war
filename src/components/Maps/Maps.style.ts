import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  padding: 30px 120px 60px;
  @media (max-width: 768px) {
    padding: 30px 20px 60px;
  }
`;
export const AddressTop = styled.section``;

export const AddressTitle = styled.article`
  border-bottom: 0.8px solid #fff;
  padding: 8px 0;
  font-size: 38px;
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;
export const AddressSubTitle = styled.article`
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  font-size: 14px;
`;
export const AddressList = styled.ul`
  display: flex;
  align-items: center;
  overflow-x: scroll;
  width: 100%;
  height: 100px;
  margin: 16px 0 10px;
  font-size: 16px;
  flex-shrink: 0;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
  * {
    transition: all 0.3s;
    cursor: pointer;
    display: flex;
    padding: 10px 18px;
    border-radius: 12px;
    @media (max-width: 768px) {
      font-size: 13px;
      padding: 8px;
    }
  }
  .active {
    background: #333;
  }
`;
export const Location = styled.article`
  display: flex;
  justify-content: space-between;
  gap: 6px;
  cursor: pointer;
`;

export const AddressBottom = styled.section`
  position: relative;
  #map {
    width: 100%;
    height: 65vh;
    border-radius: 10px;
    margin-bottom: 10%;
  }
  .map_wrap {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  #wrapA {
    position: absolute;
    top: 0;
    right: 0px;
    width: 100%;
    height: 100%;
    transition: all 0.3s ease;
    &.activeMenu {
      right: -300px;
      @media (max-width: 768px) {
        right: -240px;
      }
    }
    #menu_button {
      position: absolute;
      top: 7%;
      right: 300px;
      width: 40px;
      display: flex;
      align-items: center;
      height: 40px;
      z-index: 999;
      font-size: 24px;
      color: #000;
      background: rgba(0, 0, 0, 0.1);
      border: none;
      cursor: pointer;
      padding: 8px;
      border-radius: 4px 0 0 4px;
      @media (max-width: 768px) {
        right: 240px;
      }
    }

    #menu_wrap {
      position: absolute;
      top: 5%;
      right: 0;
      z-index: 999;
      background: rgba(0, 0, 0, 0.1);
      padding: 10px;
      border-radius: 8px;
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
      width: 300px;
      height: 80vh;
      max-height: 370px;
      overflow-y: scroll;
      @media (max-width: 768px) {
        width: 240px;
        height: 70vh;
        max-height: 420px;
      }
      #placesList {
        color: #000;
        display: flex;
        flex-direction: column;
        gap: 8px;
        div {
          padding: 10px;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 8px;
          font-size: 12px;
          cursor: pointer;
          transition: all 0.2s;

          &:hover {
            background: rgba(255, 255, 255, 1);
            transform: translateY(-2px);
          }

          strong {
            font-size: 16px;
          }
        }
      }
    }
  }
`;
