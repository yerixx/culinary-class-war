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

import { whiteChefs, blackChefs } from "../Chefs/ChefsClassData";
import { MdMyLocation } from "react-icons/md";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

declare global {
  interface Window {
    kakao: any;
  }
}

const addressList = [
  "전체보기",
  "강남",
  "잠실/송파/강동",
  "영등포/여의도/강서",
  "건대/성수/왕십리",
  "종로/중구",
  "홍대/합정/마포",
  "성북/노원/중량",
  "용산/이태원/한남",
  "제주",
  "강원",
  "충청",
  "광주",
];

const Maps = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [map, setMap] = useState<any>(null);
  const [markers, setMarkers] = useState<any[]>([]);
  const [myLocationOverlay, setMyLocationOverlay] = useState<any>(null);
  const [activeButton, setActiveButton] = useState(false);
  const chefsClassData = [...whiteChefs, ...blackChefs];

  // 마커 제거 함수
  const removeMarkers = () => {
    markers.forEach((marker) => {
      marker.setMap(null);
    });
    setMarkers([]);

    // 내 위치 오버레이는 유지
    if (myLocationOverlay) {
      myLocationOverlay.setMap(map);
    }
  };

  const addChefMarkers = (
    map: any,
    selectedChefs: any[],
    keywordFilter?: string
  ) => {
    // 기존 마커 제거
    removeMarkers();

    const placesList = document.getElementById("placesList");
    if (placesList) placesList.innerHTML = ""; // 기존 리스트 초기화

    let hasVisibleItems = false;

    selectedChefs.forEach((chef) => {
      ["A", "B", "C"].forEach((key) => {
        const coords = chef[`coords${key}`];
        const keyword = chef.keyword[`keyword${key}`];
        const restaurant = chef.restaurants[`restaurant${key}`];
        const address = chef.address[`address${key}`] || "주소 정보 없음";
        const mapId = chef.mapId[`mapId${key}`];

        // 키워드 필터링 적용
        if (
          keywordFilter &&
          keywordFilter !== "전체보기" &&
          keyword !== keywordFilter
        ) {
          return; // 해당 키워드가 아닐 경우 이 루프 건너뜀
        }

        if (coords?.lat && coords?.lng) {
          const lat = parseFloat(coords.lat);
          const lng = parseFloat(coords.lng);
          const position = new window.kakao.maps.LatLng(lat, lng);

          // 마커 생성
          const marker = new window.kakao.maps.Marker({
            position,
            map: map,
          });

          const infowindow = new window.kakao.maps.InfoWindow({
            content: `
            <div style="width:180px;padding:5px;font-size:12px;color:#000;">
              <strong>${restaurant || "식당 이름 없음"}</strong>
              <br>${address}
            </div>
          `,
          });

          // 마커 이벤트 추가
          window.kakao.maps.event.addListener(marker, "mouseover", () =>
            infowindow.open(map, marker)
          );
          window.kakao.maps.event.addListener(marker, "mouseout", () =>
            infowindow.close()
          );

          // 마커 클릭 이벤트 추가
          if (mapId) {
            window.kakao.maps.event.addListener(marker, "click", () => {
              window.open(
                `https://place.map.kakao.com/${mapId}`,
                "_blank",
                "noopener,noreferrer"
              );
            });
          }

          setMarkers((prev) => [...prev, marker]);

          // 첫 번째 마커일 경우 지도 중심 이동
          if (selectedChefs.indexOf(chef) === 0) {
            map.setCenter(position);
          }

          // 리스트 아이템 추가
          hasVisibleItems = true;
          const listItem = document.createElement("li");
          listItem.innerHTML = `
            <div class="list" style="cursor: pointer;">
              <strong>${restaurant}</strong>
              <br>${address}
            </div>
          `;
          // 리스트 아이템 클릭 이벤트 추가
          listItem.addEventListener("click", () => {
            // 지도 중심을 해당 마커 위치로 이동
            map.setCenter(position);
            map.setLevel(4); // 줌 레벨을 더 가깝게 설정

            // 해당 마커의 인포윈도우 표시
            infowindow.open(map, marker);

            // menu_wrap 닫기
            setActiveButton(false);

            // 3초 후 인포윈도우 닫기
            setTimeout(() => {
              infowindow.close();
            }, 3000);
          });

          placesList?.appendChild(listItem);
        }
      });
    });

    // 필터링된 결과가 없을 경우 메시지 표시
    if (!hasVisibleItems && keywordFilter && keywordFilter !== "전체보기") {
      const noResultsItem = document.createElement("li");
      noResultsItem.textContent = "해당 키워드에 맞는 식당이 없습니다.";
      placesList?.appendChild(noResultsItem);
    }
  };

  const handleActive = (index: number) => {
    setActiveIndex(index);

    if (window.kakao && window.kakao.maps) {
      const selectedArea = addressList[index];

      // "전체보기" 선택 시 모든 레스토랑 표시
      if (selectedArea === "전체보기") {
        addChefMarkers(map, chefsClassData, "전체보기");
        return;
      }

      const centerCoords = getCenterCoords(selectedArea);
      if (!centerCoords) {
        alert("해당 지역의 중심 좌표를 찾을 수 없습니다.");
        return;
      }

      // 지도 중심 이동
      map.setCenter(
        new window.kakao.maps.LatLng(centerCoords.lat, centerCoords.lng)
      );

      // 지역에 따른 줌 레벨 조정
      const zoomLevel = ["강원", "충청", "광주", "제주"].includes(selectedArea)
        ? 11
        : 7;
      map.setLevel(zoomLevel);

      // 선택된 지역의 쉐프 필터링
      const selectedChefs = chefsClassData.filter((chef) =>
        Object.entries(chef.keyword).some(([key, keyword]) => {
          if (keyword?.includes(selectedArea)) {
            const coordKey = `coords${key.slice(-1)}`;
            return (chef as any)[coordKey]?.lat && (chef as any)[coordKey]?.lng;
          }
          return false;
        })
      );

      if (selectedChefs.length === 0) {
        alert("해당 지역에 등록된 쉐프가 없습니다.");
        return;
      }

      // 🌟 지도 중심 이동 후 마커 추가
      addChefMarkers(map, selectedChefs, selectedArea);
    }
  };

  // 지역별 중심 좌표
  const getCenterCoords = (area: string) => {
    const centerPoints = {
      강남: { lat: 37.5254876, lng: 127.0289201 },
      서초: { lat: 37.4837121, lng: 127.0147614 },
      "잠실/송파/강동": { lat: 37.5145937, lng: 127.1040291 },
      "영등포/여의도/강서": { lat: 37.5263891, lng: 126.8959319 },
      "건대/성수/왕십리": { lat: 37.5411491, lng: 127.0710771 },
      "종로/중구": { lat: 37.5704164, lng: 126.9922121 },
      "홍대/합정/마포": { lat: 37.5565592, lng: 126.9219356 },
      "성북/노원/중량": { lat: 37.64, lng: 127.0375183 },
      "용산/이태원/한남": { lat: 37.5384843, lng: 126.9899608 },
      제주: { lat: 33.4996213, lng: 126.5311884 },
      강원: { lat: 37.8228, lng: 128.1555 },
      충청: { lat: 36.6372, lng: 127.4897 },
      광주: { lat: 35.1595, lng: 126.8526 },
    };

    return centerPoints[area as keyof typeof centerPoints];
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

            const marker = new window.kakao.maps.Marker({
              position: moveLatLon,
            });
            marker.setMap(map);

            // 기존 내 위치 오버레이 제거
            if (myLocationOverlay) {
              myLocationOverlay.setMap(null);
            }

            // CustomOverlay 생성
            const content = document.createElement("div");
            content.className = "customoverlay";
            content.innerHTML = `
              <div style="padding: 5px 10px; color:#000;background: white; border: 1px solid #333; font-size:12px;">
                내 위치
              </div>
            `;

            const customOverlay = new window.kakao.maps.CustomOverlay({
              position: moveLatLon,
              content: content,
              yAnchor: 2.5,
            });

            // 커스텀 오버레이를 지도에 표시
            customOverlay.setMap(map);

            // 오버레이 상태 저장
            setMyLocationOverlay(customOverlay);
            setMarkers([marker]);
          }
        },
        () => alert("위치 정보를 가져올 수 없습니다.")
      );
    } else {
      alert("이 브라우저에서는 위치 정보를 지원하지 않습니다.");
    }
  };

  useEffect(() => {
    if (mapRef.current && !map) {
      const mapOptions = {
        center: new window.kakao.maps.LatLng(37.5665, 126.978), // 기본 위치 서울
        level: 9, // 줌 레벨
      };
      const kakaoMap = new window.kakao.maps.Map(mapRef.current, mapOptions);
      setMap(kakaoMap);

      // 처음 마커 추가
      addChefMarkers(kakaoMap, chefsClassData);
    }
  }, [map, chefsClassData]);

  const handleMenuButtonClick = () => {
    setActiveButton((prev) => !prev);
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
          <button
            id="menu_button"
            className={activeButton ? "activeMenu" : ""}
            onClick={handleMenuButtonClick}
          >
            {activeButton ? <IoMdArrowDropleft /> : <IoMdArrowDropright />}
          </button>
          <div id="menu_wrap" className={activeButton ? "activeMenu" : ""}>
            <div id="menu_content">
              <ul id="placesList"></ul>
              <div id="pagination"></div>
            </div>
          </div>
        </div>
      </AddressBottom>
    </Wrapper>
  );
};

export default Maps;
