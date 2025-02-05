import { useEffect, useRef, useState } from "react";
import {
  AddressBottom,
  AddressList,
  AddressSubTitle,
  AddressTitle,
  AddressTop,
  Location,
  Wrapper,
} from "./Maps.style";

import { MdMyLocation } from "react-icons/md";
import { whiteChefs, blackChefs } from "../Chefs/ChefsClassData";

declare global {
  interface Window {
    kakao: any;
  }
}

// const chefsData = [
//   {
//     id: 1,
//     name: "셰프 A",
//     addresses: {
//       addressA: "서울 강남구 역삼동",
//       addressB: "서울 강남구 삼성동",
//     },
//     address: {
//       keyword: "강남",
//       mapId: "1565367501",
//     },
//   },
//   {
//     id: 2,
//     name: "셰프 B",
//     addresses: {
//       addressA: "서울 종로구 청진동",
//       addressB: "서울 종로구 관철동",
//     },
//     address: {
//       keyword: "종로",
//       mapId: "21359554",
//     },
//   },
// ];

const addressList = [
  "강남",
  "서초",
  "잠실/송파/강동",
  "영등포/여의도/강서",
  "건대/성수/왕십리",
  "종로/중구",
  "홍대/합정/마포",
  "성북/노원/중량",
  "용산/이태원/한남",
  "구로/관악/동작",
  "제주",
  "강원",
  "충남/충북",
  "광주",
];

const Maps = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isKakaoReady, setIsKakaoReady] = useState(false);
  const [map, setMap] = useState<any>(null);
  const [markers, setMarkers] = useState<any[]>([]);

  const chefsClassData = [...whiteChefs, ...blackChefs];

  useEffect(() => {
    const initializeMap = () => {
      if (window.kakao && window.kakao.maps) {
        const mapContainer = mapRef.current;
        if (mapContainer) {
          const options = {
            center: new window.kakao.maps.LatLng(37.5665, 126.978), // 서울시청 중심
            level: 7,
          };
          const newMap = new window.kakao.maps.Map(mapContainer, options);
          setMap(newMap);

          // Geocoder가 정상적으로 로드되었는지 확인하고 마커 추가
          if (window.kakao.maps.services) {
            addChefMarkers(newMap);
          } else {
            console.error("카카오 Geocoder 서비스가 로드되지 않았습니다.");
          }
        }
      } else {
        console.error("카카오 지도 API가 로드되지 않았습니다.");
      }
    };

    if (window.kakao && window.kakao.maps) {
      initializeMap();
    } else {
      const script = document.createElement("script");
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${
        import.meta.env.VITE_KAKAO_API_KEY
      }&libraries=services`;
      script.onload = initializeMap;
      document.head.appendChild(script);
    }
  }, []);

  // 쉐프 데이터의 주소로 마커 추가하는 함수
  const addChefMarkers = (map: any) => {
    // Geocoder 객체가 로드되었는지 확인
    if (!window.kakao || !window.kakao.maps.services) {
      console.error("카카오 Geocoder 서비스가 로드되지 않았습니다.");
      return;
    }

    const geocoder = new window.kakao.maps.services.Geocoder();

    chefsClassData.forEach((chef) => {
      // 쉐프 A, B의 두 주소에 대해 마커를 추가
      Object.values(chef.addresses).forEach((address) => {
        geocoder.addressSearch(address, (result: any, status: any) => {
          if (status === window.kakao.maps.services.Status.OK) {
            const coords = new window.kakao.maps.LatLng(
              result[0].y,
              result[0].x
            );
            const marker = new window.kakao.maps.Marker({
              position: coords,
              map: map,
            });

            setMarkers((prevMarkers) => [...prevMarkers, marker]);
          }
        });
      });
    });
  };

  const handleActive = (index: number) => {
    setActiveIndex(index);
    // 지도에 마커를 추가하기 전에 Geocoder가 준비되었는지 확인
    if (window.kakao && window.kakao.maps) {
      const geocoder = new window.kakao.maps.services.Geocoder();
      const newMarkers: any[] = [];

      const selectedArea = addressList[index];
      const selectedChefs = chefsClassData.filter((chef) =>
        Object.values(chef.addresses).some((address) =>
          address.includes(selectedArea)
        )
      );

      if (selectedChefs.length === 0) {
        alert("해당 지역에 등록된 쉐프가 없습니다.");
        return;
      }

      selectedChefs.forEach((chef: any) => {
        const keyword = chef.address.keyword;
        geocoder.addressSearch(keyword, (result: any, status: any) => {
          if (status === window.kakao.maps.services.Status.OK) {
            const coords = new window.kakao.maps.LatLng(
              result[0].y,
              result[0].x
            );
            const marker = new window.kakao.maps.Marker({
              position: coords,
              map: map,
            });

            newMarkers.push(marker);
            setMarkers((prevMarkers) => [...prevMarkers, marker]);
            map.setCenter(coords);
          }
        });
      });
    } else {
      console.error("카카오 Geocoder 서비스가 로드되지 않았습니다.");
    }
  };

  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;

          if (map) {
            const moveLatLon = new window.kakao.maps.LatLng(lat, lng);
            map.setCenter(moveLatLon);

            // 기존 마커 삭제 후 새 마커 추가
            removeMarkers();

            const marker = new window.kakao.maps.Marker({
              position: moveLatLon,
            });
            marker.setMap(map);

            setMarkers([marker]);
          }
        },
        () => alert("위치 정보를 가져올 수 없습니다.")
      );
    } else {
      alert("이 브라우저에서는 위치 정보를 지원하지 않습니다.");
    }
  };

  const removeMarkers = () => {
    markers.forEach((marker) => marker.setMap(null));
    setMarkers([]);
  };

  const searchPlaces = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const keyword = (document.getElementById("keyword") as HTMLInputElement)
      .value;
    console.log("입력된 키워드:", keyword);

    if (!keyword.trim()) {
      alert("검색어를 입력하세요!");
      return;
    }

    if (!isKakaoReady) {
      alert("카카오 맵이 로딩되지 않았습니다.");
      return;
    }

    const ps = new window.kakao.maps.services.Places();

    ps.keywordSearch(keyword, (data: any, status: any, pagination: any) => {
      if (status === window.kakao.maps.services.Status.OK) {
        const placesList = document.getElementById("placesList");
        placesList!.innerHTML = "";

        data.forEach((place: any) => {
          const li = document.createElement("li");
          li.textContent = place.place_name;
          placesList!.appendChild(li);

          const coords = new window.kakao.maps.LatLng(place.y, place.x);
          const marker = new window.kakao.maps.Marker({
            position: coords,
            map: map,
          });

          setMarkers((prevMarkers) => [...prevMarkers, marker]);
        });

        const paginationDiv = document.getElementById("pagination");
        paginationDiv!.innerHTML = "";

        if (pagination) {
          for (let i = 1; i <= pagination.last; i++) {
            const pageButton = document.createElement("button");
            pageButton.textContent = i.toString();
            pageButton.onclick = () => {
              pagination.gotoPage(i - 1);
            };
            paginationDiv!.appendChild(pageButton);
          }
        }
      } else {
        alert("검색 결과가 없습니다.");
      }
    });
  };

  return (
    <Wrapper>
      <AddressTop>
        <AddressTitle>흑백요리사 지도</AddressTitle>
        <AddressSubTitle>
          <p>나와 가까운 쉐프의 식당을 찾아보세요!</p>
          <Location onClick={handleLocation}>
            <MdMyLocation />
            <p> 현재 내 위치</p>
          </Location>
        </AddressSubTitle>
        <AddressList>
          {addressList.map((area, index) => (
            <li
              key={index}
              onClick={() => handleActive(index)}
              className={activeIndex === index ? "active" : ""}
            >
              {area}
            </li>
          ))}
        </AddressList>
      </AddressTop>
      <AddressBottom>
        <div className="map_wrap">
          <div ref={mapRef} id="map"></div>
          <div id="menu_wrap" className="bg_white">
            <div className="option">
              <div>
                <form>
                  <input
                    type="text"
                    id="keyword"
                    placeholder="지역을 입력하세요"
                  />
                  <button onClick={searchPlaces}>검색</button>
                </form>
              </div>
            </div>
            <ul id="placesList"></ul>
            <div id="pagination"></div>
          </div>
        </div>
      </AddressBottom>
    </Wrapper>
  );
};

export default Maps;
