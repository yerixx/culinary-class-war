export interface panel {
  id: number;
  img: string;
  title: string;
  name: string;
  birth: string;
  desc: string;
}

export const Panels: panel[] = [
  {
    id: 1,
    img: "images/panel1.png",
    title: "외식업계의 왕",
    name: "백종원 [白種元]",
    birth: "1966년 9월 4일 충청남도 대전시",
    desc: "· 더본코리아 대표이사, 학교법인 예덕학원 이사장, 티엠씨엔터 대표 \n· 보유 식당 : 새마을식당, 미정국수, 홍콩반점, 역전우동, 한신포차,빽다방 등 \n· 2024년 기준 공 정거래위원회 등록 갯수 21개",
  },
  {
    id: 2,
    img: "images/panel2.png",
    title: "셰프들의 꿈",
    name: "안성재 [Anh Sung-jae]",
    birth:
      "1982년 대한민국 [국적 : 미국 / 13살에 가족을 따라 미국 캘리포니아 주로 이민]",
    desc: "· 2017년 샌프 란시스코에서 서울 한남동으로 모수를 이전, \n· 2023년 한국의 유일한 미쉐린 3스타 레스토랑으로 등극.\n· 모수 재오픈 일정 2025년 2월 예상",
  },
];
