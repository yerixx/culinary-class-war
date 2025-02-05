import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  padding: 30px 120px 60px;
  #map {
    width: 100%;
    height: 490px;
    border-radius: 10px;
  }
  .map_wrap {
    position: relative;
    width: 100%;
    height: 500px; /* 지도 크기 조정 */
  }
  #menu_wrap {
    position: absolute;
    top: 10px;
    right: 10px;
    background: rgba(255, 255, 255, 0.9);
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 10; /* 지도보다 위에 배치 */
    width: 250px;
    height: 300px;
    max-height: 460px;
  }
`;
export const AddressTop = styled.section``;

export const AddressTitle = styled.article`
  border-bottom: 0.8px solid #fff;
  padding: 8px 0;
  font-size: 38px;
  font-weight: bold;
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
  * {
    transition: all 0.3s;
    cursor: pointer;
    display: flex;
    padding: 10px 18px;
    border-radius: 12px;
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

export const AddressBottom = styled.section``;

export const Maps = styled.article`
  font-size: 38px;
  padding-bottom: 30px;
`;
