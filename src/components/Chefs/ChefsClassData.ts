export interface ChefsClass {
  id: number;
  name: string;
  img: string;
  class: string;
  career: string;
  restaurants: {
    restaurantA: string;
    restaurantB?: string;
    restaurantC?: string;
  };
  address: {
    addressA: string;
    addressB?: string;
    addressC?: string;
  };
  keyword: {
    keywordA?: string;
    keywordB?: string;
    keywordC?: string;
  };
  coordsA?: {
    lat?: string;
    lng?: string;
  };
  coordsB?: {
    lat?: string;
    lng?: string;
  };
  coordsC?: {
    lat?: string;
    lng?: string;
  };
  mapId: {
    mapIdA?: string;
    mapIdB?: string;
    mapIdC?: string;
  };
}

export const whiteChefs: ChefsClass[] = [
  {
    id: 1,
    name: "최현석",
    img: "/images/image-b60132c7-be2f-4f09-b1af-7546d75fa222.png",
    class: "백수저",
    career:
      "라미드호텔직업전문학교 학과장 \n서울현대직업전문학교 전임교수 \n前 엘본 더 테이블총괄 셰프 \n前 쵸이닷 오너 셰프 \n주식회사일구공 셰프 / 비노스테이션 / 달리아 다이닝 / 중앙감속기 운영",
    restaurants: {
      restaurantA: "쵸이닷",
      restaurantB: "달리아다이닝",
      restaurantC: "중앙감속기",
    },
    address: {
      addressA: "서울특별시 강남구 도산대로 457 3층 ",
      addressB: "서울특별시 강남구 도산대로45길 14 2층",
      addressC: "서울특별시 성동구 성수일로6길 7-1 1층",
    },
    keyword: {
      keywordA: "강남",
      keywordB: "강남",
      keywordC: "건대/성수/왕십리",
    },
    coordsA: {
      lat: "37.5244162",
      lng: "127.0465576",
    },
    coordsB: {
      lat: "37.5232387",
      lng: "127.0358025",
    },
    coordsC: {
      lat: "37.5455719",
      lng: "127.0510934",
    },
    mapId: {
      mapIdA: "1565367501",
      mapIdB: "345398543",
      mapIdC: "138978252",
    },
  },
  {
    id: 2,
    name: "최강록",
    img: "/images/image-c839fcdd-0eba-4d67-853b-2fd78e90fe5e.png",
    class: "백수저",
    career:
      "2013년 마스터셰프 코리아 2 우승\n오마카세 일식 주점 식당네오 운영. 현재는 closed",
    restaurants: {
      restaurantA: "",
    },
    address: {
      addressA: "",
    },
    keyword: {
      keywordA: "",
    },
    coordsA: {
      lat: undefined,
      lng: undefined,
    },
    mapId: {
      mapIdA: "",
    },
  },
  {
    id: 3,
    name: "정지선",
    img: "/images/image-63abde99-cd66-4ce5-8b10-09a4f3f02ccf.png",
    class: "백수저",
    career: "한국 최초 여성 중식 스타 셰프!\n딤섬의 여왕 티엔미미 오너셰프",
    restaurants: {
      restaurantA: "티엔미미 강남",
      restaurantB: "티엔미미 홍대",
    },
    address: {
      addressA: "서울 서초구 사임당로 143 Cross143 104-1호",
      addressB: "서울 마포구 양화로 144 머큐어 앰배서더 4층",
    },
    keyword: {
      keywordA: "강남",
      keywordB: "홍대/합정/마포",
    },
    coordsA: {
      lat: "37.49185",
      lng: "127.025198",
    },
    coordsB: {
      lat: "37.5553209",
      lng: "126.922401",
    },

    mapId: {
      mapIdA: "1124063279",
      mapIdB: "1940227088",
    },
  },
  {
    id: 4,
    name: "여경래",
    img: "/images/image-813e0074-a1c4-421f-af1b-1991096bc678.png",
    class: "백수저",
    career:
      "중식 그랜드 마스터 홍보각 총괄오너세프\n경기대학교 관광교육권 교수\n세계 중국요리협회 부회장 겸 한국 중식연맹회장",
    restaurants: {
      restaurantA: "홍보각",
    },
    address: {
      addressA: "서울특별시 강남구 봉은사로 130 노보텔 앰배서더 강남 LL층",
    },
    keyword: {
      keywordA: "강남",
    },
    coordsA: {
      lat: "37.5053029",
      lng: "127.0288672",
    },

    mapId: {
      mapIdA: "735898829",
    },
  },
  {
    id: 5,
    name: "파브리",
    img: "/images/image-7974759d-afb4-4486-bc02-e99260240d51.png",
    class: "백수저",
    career:
      "15년 연속 이탈리아 미슐랭 1스타 오너 셰프\n前 우송대학교 글로벌조리학과 교수\n前 세종대학교 컬리널리스쿨 강사\n現 충남도립 대학교 호텔조리제빵학과 교수\n이탈리아에서 15년간 미슐랭 원 스타를 유지한 Al Porticciolo 84를 \n운영하는 오너 셰프",
    restaurants: {
      restaurantA: "파브리키친",
    },
    address: {
      addressA: "서울특별시 용산구 한강대로15길 23-6 1층",
    },
    keyword: {
      keywordA: "용산/이태원/한남",
    },
    coordsA: {
      lat: "37.5261486",
      lng: "126.9627509",
    },

    mapId: {
      mapIdA: "1781966174",
    },
  },
  {
    id: 6,
    name: "이영숙",
    img: "/images/image-bf793077-0961-4a11-aec9-f680021cb143.png",
    class: "백수저",
    career:
      "한식대첩2 최종 우승자 (충남팀)\n공주 갑사 인근 수정식당 40년 운영\n산채비빔밥, 닭도리탕, 각종 부침개, 백숙등을 전문으로 취급\n충남 부여에서 버섯 정식 전문 나경버섯농가 운영.",
    restaurants: {
      restaurantA: "나경버섯농가",
    },
    address: {
      addressA: "충청남도 부여군 석성면 비당로109번길 100",
    },
    keyword: {
      keywordA: "충청",
    },
    coordsA: {
      lat: "36.2182303",
      lng: "127.0061294",
    },

    mapId: {
      mapIdA: "19277972",
    },
  },
  {
    id: 7,
    name: "오세득",
    img: "/images/image-e69ac754-3691-4308-ad30-8b89e131413b.png",
    class: "백수저",
    career:
      "하이브리드 스타 셰프 세러데이브런치 대표\n백석문화대학교 외식산업학부 초빙교수\n친밀 오너셰프\n제주 오팬파이어 운영 ",
    restaurants: {
      restaurantA: "오팬파이어",
    },
    address: {
      addressA: "제주특별자치도 제주시 조천읍 남조로 1781",
    },
    keyword: {
      keywordA: "제주",
    },
    coordsA: {
      lat: "33.4287647",
      lng: "126.6744441",
    },

    mapId: {
      mapIdA: "534840856",
    },
  },
  {
    id: 8,
    name: "김도윤",
    img: "/images/image-3a0e001c-ca6a-4e68-98eb-21415bf0841f.png",
    class: "백수저",
    career: "현 미슐랭 1스타 오너 셰프!\n윤서울 운영 오너셰프\n면서울 운영",
    restaurants: {
      restaurantA: "윤서울",
      restaurantB: "면서울",
    },
    address: {
      addressA: "서울 강남구 선릉로 805 W빌딩 1층",
      addressB: "서울 강남구 선릉로 805 W빌딩 1층",
    },
    keyword: {
      keywordA: "강남",
      keywordB: "강남",
    },
    coordsA: {
      lat: "37.5241239",
      lng: "127.0390364",
    },
    coordsB: {
      lat: "37.5241658",
      lng: "127.0390675",
    },

    mapId: {
      mapIdA: "312810588",
      mapIdB: "2114917980",
    },
  },
  {
    id: 9,
    name: "조셉 리저우드 ",
    img: "/images/image-332e7686-7c7d-48ed-9158-bd99aff17d85.png",
    class: "백수저",
    career: "2020년, 2021 미쉐린 영 셰프 상\n에빗 셰프",
    restaurants: {
      restaurantA: "에빗 EVETT",
    },
    address: {
      addressA: "서울 강남구 도산대로45길 10-5 LS빌딩 101호",
    },
    keyword: {
      keywordA: "강남",
    },
    coordsA: {
      lat: "37.5233493",
      lng: "127.0362087",
    },

    mapId: {
      mapIdA: "384592680",
    },
  },
  {
    id: 10,
    name: "황진선",
    img: "/images/image-4987e11d-9308-4a9a-b9cd-a43c09c9d502.png",
    class: "백수저",
    career: "2017-2019 미슐랭 1스타 오너 셰프!\n진진 오너셰프",
    restaurants: {
      restaurantA: "진진",
    },
    address: {
      addressA: "서울특별시 마포구 월드컵북로1길 60 1층",
    },
    keyword: {
      keywordA: "홍대/합정/마포",
    },
    coordsA: {
      lat: "37.5538",
      lng: "126.918437",
    },

    mapId: {
      mapIdA: "1767349854",
    },
  },
  {
    id: 11,
    name: "방기수",
    img: "/images/image-8a42faad-9b0b-4ae8-8433-8058f09fe77f.png",
    class: "백수저",
    career:
      "국내 첫 미슐랭 1스타 前 총괄 셰프!\n2014~ 2018 비채나 총괄 셰프\n2018~ 깃든 조리 사장",
    restaurants: {
      restaurantA: "비채나",
      restaurantB: "깃든",
    },
    address: {
      addressA: "서울특별시 송파구 올림픽로 300 롯데월드타워 81층",
      addressB: "서울특별시 강북구 월계로7나길 46-5 1층",
    },
    keyword: {
      keywordA: "잠실/송파/강동",
      keywordB: "성북/노원/중량",
    },
    coordsA: {
      lat: "37.5126072",
      lng: "127.1025386",
    },
    coordsB: {
      lat: "37.6132676",
      lng: "127.0316579",
    },

    mapId: {
      mapIdA: "18313843",
      mapIdB: "1800902441",
    },
  },
  {
    id: 12,
    name: "박준우",
    img: "/images/image-a6ad05cc-09b9-4ad8-af52-efadce7a8eb0.png",
    class: "백수저",
    career:
      "마스터셰프 코리아 1 준우승!\n기자(푸드 칼럼니스트)\n 2014 디저트 카페 ‘오쁘띠베르’ 운영\n2015 오그랑베르 운영\n2017년 오트뤼,알테르에고 운영\n2022년 오쁘띠베르 운영 중 ",
    restaurants: {
      restaurantA: "오쁘띠베르",
    },
    address: {
      addressA: "서울특별시 종로구 자하문로 47-1",
    },
    keyword: {
      keywordA: "종로/중구",
    },
    coordsA: {
      lat: "37.5802195",
      lng: "126.9709642",
    },

    mapId: {
      mapIdA: "1832182578",
    },
  },
  {
    id: 13,
    name: "김승민",
    img: "/images/image-901379a9-94a7-4338-a620-c84eec782a7c.png",
    class: "백수저",
    career:
      "마스터셰프 코리아 1 우승자\n어드밴스드 퀴진  셰프 에이전시 소속\n애월 모리노아루요 운영",
    restaurants: {
      restaurantA: "모리노아루요",
    },
    address: {
      addressA: "제주특별자치도 제주시 애월읍 하소로 769-58",
    },
    keyword: {
      keywordA: "제주",
    },
    coordsA: {
      lat: "33.4194165",
      lng: "126.4018927",
    },

    mapId: {
      mapIdA: "27321409",
    },
  },
  {
    id: 14,
    name: "조은주",
    img: "/images/image-0be50ff4-43df-439e-8e66-591a7a64d659.png",
    class: "백수저",
    career:
      "세계 3대 요리 대회 2관왕\n63스퀘어 터치더스카이 총괄 셰프\n세계 3대 요리대회 여성 최초 2관왕\n2018년 평창 동계 올림픽 성황 봉송자",
    restaurants: {
      restaurantA: "터치더스카이",
    },
    address: {
      addressA: "서울 영등포구 63로 50 63빌딩 58층",
    },
    keyword: {
      keywordA: "영등포/여의도/강서",
    },
    coordsA: {
      lat: "37.5198228",
      lng: "126.9402224",
    },

    mapId: {
      mapIdA: "11232276",
    },
  },
  {
    id: 15,
    name: "선경 롱기스트 ",
    img: "/images/image-8e50a34d-ad8e-4110-8981-35a83162fee6.png",
    class: "백수저",
    career: "레스토랑 익스프레스 우승자!\n유튜버",
    restaurants: {
      restaurantA: "",
    },
    address: {
      addressA: "",
    },
    keyword: {
      keywordA: "",
    },
    coordsA: {
      lat: "",
      lng: "",
    },
    mapId: {
      mapIdA: "",
    },
  },
  {
    id: 16,
    name: "남정석 ",
    img: "/images/image-2efa8130-ab88-432f-8309-5af22074b2e6.png",
    class: "백수저",
    career:
      "국내 채소 요리 1인자!\n 어드밴스드 퀴진 소속\n강릉 그린볼, 로컬릿 오너셰프\n2023년 한국관광공사 주관 서울미식 100선 베스트 채식 레스토랑 선정",
    restaurants: {
      restaurantA: "로컬릿",
      restaurantB: "그린볼",
    },
    address: {
      addressA: "서울특별시 성동구 한림말길 33 2층",
      addressB: "강원특별자치도 강릉시 산양큰길22번길 30 1층 ",
    },
    keyword: {
      keywordA: "종로/중구",
      keywordB: "강원",
    },
    coordsA: {
      lat: "37.5409203",
      lng: "127.0147439",
    },
    coordsB: {
      lat: "37.7787527",
      lng: "128.9174777",
    },

    mapId: {
      mapIdA: "412460362",
      mapIdB: "279012480",
    },
  },
  {
    id: 17,
    name: "안유성",
    img: "/images/image-eb125875-4cf2-40b3-81b6-45dcbb829581.png",
    class: "백수저",
    career:
      "대한민국 16대 조리 명장!\n가매, 광주옥1947, 장수나주곰탕 오너셰프\n한국 바다 셰프 협회 회장\n광주 가매일식,  대한민국 16대 조리 명장\n“밥알이 몇개고”주인공.",
    restaurants: {
      restaurantA: "가매일식",
    },
    address: {
      addressA: "광주광역시 서구 상무대로 1104-26 ",
    },
    keyword: {
      keywordA: "광주",
    },
    coordsA: {
      lat: "35.1524988",
      lng: "126.8838341",
    },
    mapId: {
      mapIdA: "10115439",
    },
  },
  {
    id: 18,
    name: "장호준",
    img: "/images/image-d1d04a01-a74b-49e4-91ab-885362a80b4c.png",
    class: "백수저",
    career: "현 미슐랭 1스타 오너 셰프!\n윤서울 운영 오너셰프\n면서울 운영",
    restaurants: {
      restaurantA: "네기스키야키",
      restaurantB: "네기라이브",
      restaurantC: "네기다이닝라운지",
    },
    address: {
      addressA: "서울특별시 강남구 논현로 854 지하1층",
      addressB: "서울특별시 성동구 성수이로 97 5층",
      addressC: "서울특별시 강남구 도산대로15길 18 4층",
    },
    keyword: {
      keywordA: "강남",
      keywordB: "건대/성수/왕십리",
      keywordC: "강남",
    },
    coordsA: {
      lat: "37.5253311",
      lng: "127.0288828",
    },
    coordsB: {
      lat: "37.5436226",
      lng: "127.0565745",
    },
    coordsC: {
      lat: "37.5195017",
      lng: "127.0240624",
    },
    mapId: {
      mapIdA: "1612273141",
      mapIdB: "1427899355",
      mapIdC: "544200314",
    },
  },
  {
    id: 19,
    name: "최지형",
    img: "/images/image-a8aded4e-b99d-4b5b-8422-da7ea5f194c9.png",
    class: "백수저",
    career:
      "세계가 인정한 이북 요리 전문가!\n매니멀 트라이브(이사)\n리북방 마포(오너 쉐프)\n2024.05~ 벤디또 R&D 쉐프\n2022.08~ Hunnit R&D 쉐프\n2020.06~ 모터시티 R&D 쉐프",
    restaurants: {
      restaurantA: "리북방마포",
    },
    address: {
      addressA: "서울 마포구 마포대로1길 16 A&D빌딩 2층",
    },
    keyword: {
      keywordA: "홍대/합정/마포",
    },
    coordsA: {
      lat: "37.5396867",
      lng: "126.9431899",
    },

    mapId: {
      mapIdA: "420523795",
    },
  },
  {
    id: 20,
    name: "에드워드 리",
    img: "/images/image-d75a3947-523a-4a4e-bf5b-4d478f13e65c.png",
    class: "백수저",
    career:
      "2010 아이언 셰프 우승자! 미국의 스타 셰프\n작가\n2023년 4월 백악관에서 열리는 한미동맹 70주년 기념\n국빈 만찬의 셰프로 초청",
    restaurants: {
      restaurantA: "",
    },
    address: {
      addressA: "",
    },
    keyword: {
      keywordA: "",
    },
    coordsA: {
      lat: "",
      lng: "",
    },

    mapId: {
      mapIdA: "",
    },
  },
];

export const blackChefs: ChefsClass[] = [
  {
    id: 1,
    name: "간귀",
    img: "https://www.elle.co.kr/resources/online/online_image/2024/10/04/fe2c7a62-d551-4aa2-8442-619da7f27085.jpg",
    class: "흑수저",
    career:
      "간을 귀신같이 맞추는 미슐랭 2스타\n‘정식당’, ‘DOTZ’ 출신\n현 ‘키보 에다마메’ 오너 셰프",
    restaurants: {
      restaurantA: "키보 에다마메",
    },
    address: {
      addressA: "서울특별시 용산구 한강대로76길 11-40 1층",
    },
    keyword: {
      keywordA: "용산/이태원/한남",
    },
    coordsA: {
      lat: "37.5424357",
      lng: "126.9737229",
    },

    mapId: {
      mapIdA: "1441285389",
    },
  },
  {
    id: 2,
    name: "고기깡패",
    img: "https://blog.kakaocdn.net/dn/oXx8U/btsJPDOkTVi/ceKiKkUKTKkAkvRnoGI3bK/img.png",
    class: "흑수저",
    career:
      "고기요리 전문 셰프\n‘Spotted pig’, ‘Picholine’ 등 뉴욕 미슐랭 레스토랑 근무\n전 S-food 컨설턴트\n현 ‘군몽’ 오너 셰프",
    restaurants: {
      restaurantA: "군몽",
    },
    address: {
      addressA: "서울특별시 용산구 한남대로27가길 15 2층",
    },
    keyword: {
      keywordA: "용산/이태원/한남",
    },
    coordsA: {
      lat: "37.5373596",
      lng: "127.0028956",
    },

    mapId: {
      mapIdA: "539316041",
    },
  },
  {
    id: 3,
    name: "급식대가",
    img: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FQyvF4%2FbtsJRzx6clw%2FFuNhWZGStpNzK3kC0NXsR0%2Fimg.png",
    class: "흑수저",
    career: "15년 경력의 前 경남 양산 하북초등학교 급식 조리사",
    restaurants: {
      restaurantA: "",
    },
    address: {
      addressA: "",
    },
    keyword: {
      keywordA: "",
    },
    coordsA: {
      lat: "",
      lng: "",
    },
    mapId: {
      mapIdA: "",
    },
  },
  {
    id: 4,
    name: "나폴리 맛피아",
    img: "https://www.idaegu.co.kr/news/photo/202410/477489_166027_5749.jpeg",
    class: "흑수저",
    career:
      "이탈리아 본토 느낌을 최대한 살린 핫한 생면 파스타바\n‘비아톨레도’ 오너 셰프",
    restaurants: {
      restaurantA: "비아톨레도 파스타바",
    },
    address: {
      addressA: "서울특별시 용산구 원효로83길 7-2 1층",
    },
    keyword: {
      keywordA: "용산/이태원/한남",
    },
    coordsA: {
      lat: "37.5400533",
      lng: "126.9677589",
    },
    mapId: {
      mapIdA: "1959097508",
    },
  },
  {
    id: 5,
    name: "만찢남",
    img: "https://www.elle.co.kr/resources/online/online_image/2024/10/04/b3532f2f-1a7a-4298-bb64-9ded3dcf615d.jpg",
    class: "흑수저",
    career:
      "만화책에서 영감을 얻어 요리를 시작한 비전공자\n현 ‘조광201’ 오너 셰프",
    restaurants: {
      restaurantA: "조광 101(휴업중)",
    },
    address: {
      addressA: "서울특별시 송파구 새말로10길 8",
    },
    keyword: {
      keywordA: "잠실/송파/강동",
    },
    coordsA: {
      lat: "",
      lng: "",
    },
    mapId: {
      mapIdA: "2138572501",
    },
  },
  {
    id: 6,
    name: "반찬셰프",
    img: "https://www.elle.co.kr/resources/online/online_image/2024/10/04/b4a09c73-8c6c-4f6c-a211-e136108704e2.jpg",
    class: "흑수저",
    career: "스페인 미슐랭 출신의 핫한 반찬 외식 브랜드 ‘마마리마켓’ 오너셰프",
    restaurants: {
      restaurantA: "마마리마켓 (휴업중)",
    },
    address: {
      addressA: "서울특별시 성동구 연무장18길 16 1층",
    },
    keyword: {
      keywordA: "건대/성수/왕십리",
    },
    coordsA: {
      lat: "",
      lng: "",
    },
    mapId: {
      mapIdA: "650958198",
    },
  },
  {
    id: 7,
    name: "불꽃남자",
    img: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcPLos3%2FbtsJSP7lfkJ%2FnUHbSpSueK0lzUxGB6xrAK%2Fimg.png",
    class: "흑수저",
    career: "1인 이탈리안 레스토랑 ‘비스트로 스파크’ 오너 셰프",
    restaurants: {
      restaurantA: "",
    },
    address: {
      addressA: "",
    },
    keyword: {
      keywordA: "",
    },
    coordsA: {
      lat: "",
      lng: "",
    },
    mapId: {
      mapIdA: "",
    },
  },
  {
    id: 8,
    name: "셀럽의 셰프",
    img: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdMALXj%2FbtsJSry0Lhf%2FjUFy5Pd0FB6ddAe6oAKrHk%2Fimg.png",
    class: "흑수저",
    career: "셀러브리티들의 핫한 맛집으로 유명한 ‘Buto’ 오너 셰프",
    restaurants: {
      restaurantA: "부토",
    },
    address: {
      addressA: "서울특별시 용산구 한남대로27가길 32 B2층",
    },
    keyword: {
      keywordA: "용산/이태원/한남",
    },
    coordsA: {
      lat: "37.5380894",
      lng: "127.0025315",
    },

    mapId: {
      mapIdA: "1200072541",
    },
  },
  {
    id: 9,
    name: "승우아빠",
    img: "https://blog.kakaocdn.net/dn/KZqeL/btsJSgYU8zu/lGiMNkXQXCcD3k2KHkFpd1/img.png",
    class: "흑수저",
    career: "138만 구독자 요리유튜버",
    restaurants: {
      restaurantA: "",
    },
    address: {
      addressA: "",
    },
    keyword: {
      keywordA: "",
    },
    coordsA: {
      lat: "",
      lng: "",
    },
    mapId: {
      mapIdA: "",
    },
  },
  {
    id: 10,
    name: "야키토리왕",
    img: "https://blog.kakaocdn.net/dn/b8Kiqz/btsJKLD5vd9/aGbq4sEfKQOJ42scBxRKI1/img.jpg",
    class: "흑수저",
    career: "미슐랭 가이드 선정 ‘야키토리묵’ 오너 셰프\n국내 야키토리 최강자",
    restaurants: {
      restaurantA: "야키토리묵",
    },
    address: {
      addressA: "서울특별시 마포구 성미산로 165-1 1층 우측",
    },
    keyword: {
      keywordA: "홍대/합정/마포",
    },
    coordsA: {
      lat: "37.5646654",
      lng: "126.9245756",
    },

    mapId: {
      mapIdA: "677911355",
    },
  },
  {
    id: 11,
    name: "영탉",
    img: "https://www.elle.co.kr/resources/online/online_image/2024/10/04/e5da425d-5dac-403b-911a-ec7b8cc1512f.jpg",
    class: "흑수저",
    career: "닭 요리 스페셜리스트이자 남영동 ‘남영탉’ 오너 셰프",
    restaurants: {
      restaurantA: "남영탉",
    },
    address: {
      addressA: "서울특별시 용산구 한강대로80길 12 1층",
    },
    keyword: {
      keywordA: "용산/이태원/한남",
    },
    coordsA: {
      lat: "37.5425371",
      lng: "126.9735146",
    },

    mapId: {
      mapIdA: "1645989615",
    },
  },
  {
    id: 12,
    name: "요리하는 돌아이",
    img: "https://www.nongaek.com/news/photo/202410/88429_38375_1810.png",
    class: "흑수저",
    career: "본업을 시작하는 순간 돌아이가 된다!\n현 다이닝바 ‘디핀’ 헤드 셰프",
    restaurants: {
      restaurantA: "디핀",
      restaurantB: "디핀 옥수",
    },
    address: {
      addressA: "서울특별시 중구 퇴계로 411 1층",
      addressB: "서울 성동구 독서당로 194 지하 1층",
    },
    keyword: {
      keywordA: "종로/중구",
      keywordB: "종로/중구",
    },
    coordsA: {
      lat: "37.5657562",
      lng: "127.0171998",
    },
    coordsB: {
      lat: "37.5426633",
      lng: "127.0126699",
    },
    mapId: {
      mapIdA: "1951275673",
      mapIdB: "188922946",
    },
  },
  {
    id: 13,
    name: "원투쓰리",
    img: "https://blog.kakaocdn.net/dn/5oTAJ/btsJRE62KGX/K6T2nJfULTmTCKWJnD8dBK/img.png",
    class: "흑수저",
    career:
      "미국 CIA 요리학교 졸업\n미슐랭 1,2,3스타 레스토랑 근무 경력\n현 ‘본연’ 헤드 셰프",
    restaurants: {
      restaurantA: "본연",
    },
    address: {
      addressA: "서울 강남구 논현로 742 파티오나인 7층",
    },
    keyword: {
      keywordA: "강남",
    },
    coordsA: {
      lat: "37.5182365",
      lng: "127.0292355",
    },
    mapId: {
      mapIdA: "143050534",
    },
  },
  {
    id: 14,
    name: "이모카세 1호",
    img: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FZCR5Q%2FbtsJRFdSdsK%2Fx7IrSDNOGhXzadw1gB7SB1%2Fimg.png",
    class: "흑수저",
    career:
      "“이모카세”로 유명한 ‘즐거운 술상’과 \n경동시장 대표 맛집 ‘안동집 손칼국시’ 운영",
    restaurants: {
      restaurantA: "즐거운술상",
      restaurantB: "안동집",
    },
    address: {
      addressA: "서울특별시 도봉구 노해로 341 117호 창동, 신원리베르텔",
      addressB: "서울특별시 동대문구 고산자로36길 3 신관 지하1층",
    },
    keyword: {
      keywordA: "성북/노원/중량",
      keywordB: "종로/중구",
    },
    coordsA: {
      lat: "37.651489",
      lng: "127.0458649",
    },
    coordsB: {
      lat: "37.5175515",
      lng: "127.1033943",
    },
    mapId: {
      mapIdA: "1602362477",
      mapIdB: "15629433",
    },
  },
  {
    id: 15,
    name: "장사천재 조사장",
    img: "https://blog.kakaocdn.net/dn/cqVG7F/btsJKKeid8Z/LKBu35xnLGkUhVMZDG83Sk/img.jpg",
    class: "흑수저",
    career: "을지로의 숨겨진 보석! \n한식 다이닝 ‘보석’ 운영",
    restaurants: {
      restaurantA: "을지로보석",
    },
    address: {
      addressA: "서울특별시 중구 마른내로 11-10 3층",
    },
    keyword: {
      keywordA: "종로/중구",
    },
    coordsA: {
      lat: "37.5651271",
      lng: "126.9892327",
    },
    mapId: {
      mapIdA: "539686431",
    },
  },
  {
    id: 16,
    name: "중식여신",
    img: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbKDrri%2FbtsJSjVw9VS%2FEgm5J3zevedIMJ0TPa49K0%2Fimg.png",
    class: "흑수저",
    career: "중식 대가 여경래 셰프의 수제자. \n전 ‘홍보각’ 셰프",
    restaurants: {
      restaurantA: "홍보각",
    },
    address: {
      addressA: "서울특별시 강남구 봉은사로 130 노보텔 앰배서더 강남 LL층 ",
    },
    keyword: {
      keywordA: "강남",
    },
    coordsA: {
      lat: "37.5053029",
      lng: "127.0288672",
    },
    mapId: {
      mapIdA: "735898829",
    },
  },
  {
    id: 17,
    name: "철가방 요리사",
    img: "https://www.elle.co.kr/resources/online/online_image/2024/10/04/c68f04e3-5e1e-4f80-9d39-7faf59562df3.jpg",
    class: "흑수저",
    career:
      "고등학교 1학년 철가방 배달부터 시작한 중식계의 강자. \n현 ‘도량’ 오너 셰프",
    restaurants: {
      restaurantA: "도량",
    },
    address: {
      addressA: "서울 종로구 자하문로6길 6 백송빌딩 2층",
    },
    keyword: {
      keywordA: "종로/중구",
    },
    coordsA: {
      lat: "37.5779717",
      lng: "126.9725066",
    },
    mapId: {
      mapIdA: "811744471",
    },
  },
  {
    id: 18,
    name: "키친 갱스터",
    img: "https://blog.kakaocdn.net/dn/eh7Zs9/btsJJTJUgUb/qpmkUJlKrqS2jcygNwCgxK/img.jpg",
    class: "흑수저",
    career: "비스트로 겸 와인바 ‘나우’의 오너 셰프",
    restaurants: {
      restaurantA: "나우 남영",
    },
    address: {
      addressA: "서울특별시 용산구 원효로89길 23 2층",
    },
    keyword: {
      keywordA: "용산/이태원/한남",
    },
    coordsA: {
      lat: "37.5406901",
      lng: "126.9677265",
    },
    mapId: {
      mapIdA: "2082917786",
    },
  },
  {
    id: 19,
    name: "트리플 스타",
    img: "https://img2.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202410/26/womansense/20241026000105425zeso.jpg",
    class: "흑수저",
    career:
      "미슐랭 3스타 레스토랑 ‘Benu’, ‘Atelier Crenn’, ‘모수’ 근무\n현 ‘트리드’ 오너 셰프",
    restaurants: {
      restaurantA: "트리드",
    },
    address: {
      addressA: "서울특별시 강남구 선릉로162길 16 2층",
    },
    keyword: {
      keywordA: "강남",
    },
    coordsA: {
      lat: "37.5266961",
      lng: "127.0416829",
    },
    mapId: {
      mapIdA: "744607127",
    },
  },
  {
    id: 20,
    name: "히든 천재",
    img: "https://img4.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202410/26/womansense/20241026000114577thss.jpg",
    class: "흑수저",
    career: "‘사부 서울’ 총괄 셰프 출신이자 현 ‘포노 부오노’ 오너 셰프",
    restaurants: {
      restaurantA: "사브서울",
      restaurantB: "포노부오노",
    },
    address: {
      addressA: "서울특별시 강남구 논현로175길 6 B1",
      addressB: "서울특별시 강남구 도산대로45길 8-7 2층",
    },
    keyword: {
      keywordA: "강남",
      keywordB: "강남",
    },
    coordsA: {
      lat: "37.526327",
      lng: "127.0279079",
    },
    coordsB: {
      lat: "37.5230466",
      lng: "127.0364008",
    },

    mapId: {
      mapIdA: "302504172",
      mapIdB: "1414077027",
    },
  },
];
