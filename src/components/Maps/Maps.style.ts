import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  padding: 30px 120px 60px;
  @media (max-width: 768px) {
    padding: 30px 20px 60px;
  }
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
  }
  #menu_wrap {
    position: absolute;
    top: 10px;
    right: -990px;
    background: rgba(0, 0, 0, 0.1);
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 10;
    width: 300px;
    height: 80vh;
    max-height: 460px;
    overflow-y: scroll;
    transition: all 0.3s ease;

    &.activeMenu {
      right: 10px;
    }
    @media (max-width: 768px) {
      width: 240px;
      height: 70vh;
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

  #menu_button {
    position: absolute;
    display: flex;
    align-items: center;
    height: 40px;
    top: 40%;
    right: 0;
    z-index: 999;
    font-size: 24px;
    color: #000;
    background: rgba(0, 0, 0, 0.1);
    border: none;
    transition: all 0.3s ease;
    cursor: pointer;
    padding: 8px;
    border-radius: 4px;

    &.activeMenu {
      right: 310px;
      @media (max-width: 768px) {
        right: 250px;
      }
    }
  }
`;

export const Maps = styled.article`
  font-size: 38px;
  padding-bottom: 30px;
`;

export const MenuWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 250px;
  margin: 10px 0 30px 10px;
  padding: 5px;
  overflow-y: auto;
  background: rgba(255, 255, 255, 0.9);
  z-index: 1;
  font-size: 12px;
  border-radius: 10px;
  li {
    list-style: none;
    padding: 10px;
    border-bottom: 1px solid #ddd;
    strong {
      display: block;
      margin-bottom: 5px;
      font-size: 14px;
      color: #333;
    }

    p {
      margin: 3px 0;
      color: #666;
    }
  }
`;
