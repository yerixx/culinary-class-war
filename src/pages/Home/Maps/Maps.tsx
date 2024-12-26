import { useEffect } from "react";
import { AddressTitle, Wrapper } from "./Maps.style";

declare global {
  interface Window {
    kakao: any;
  }
}

const Maps = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://dapi.kakao.com/v2/maps/sdk.js?appkey=2802a3db757c2fadd12567a1ac69c901&autoload=false";
    script.async = true;
    script.onload = () => {
      if (window.kakao) {
        window.kakao.maps.load(() => {
          const container = document.getElementById("map");
          if (container) {
            const options = {
              center: new window.kakao.maps.LatLng(33.450701, 126.570667),
              level: 3,
            };
            const map = new window.kakao.maps.Map(container, options);
            if (map) {
              console.log("Map loaded successfully.");
            } else {
              console.error("Map failed to load.");
            }
          }
        });
      } else {
        console.error("Kakao Maps is not loaded.");
      }
    };
    script.onerror = () => {
      console.error("Failed to load Kakao Maps SDK script.");
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <Wrapper>
      <AddressTitle>Chefs Address</AddressTitle>
      <div id="map">여기에 지도가 나와야 합니다.</div>
    </Wrapper>
  );
};

export default Maps;
