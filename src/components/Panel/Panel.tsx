import {
  Birth,
  Desc,
  Img,
  ImgBox,
  Name,
  PanelTitle,
  PanelView,
  SwiperView,
  Text,
  Title,
  Wrapper,
} from "./Panel.style";
import { Panels } from "./Panels";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Swiper 스타일
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Panel: React.FC = () => {
  return (
    <Wrapper>
      <PanelView>
        <PanelTitle>심사위원</PanelTitle>
        <div>
          요리의 대가 두 명의 심사위원, 미슐랭 스타 경험과 창의적 미식을
          선도하는 전문가들.
        </div>
      </PanelView>
      <SwiperView>
        <Swiper
          className="mySwiper"
          modules={[Pagination, Navigation, Autoplay]}
          slidesPerView={2}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
        >
          {Panels.map((it, index) => (
            <SwiperSlide key={index} className="slide">
              <ImgBox>
                <Img src={it.img} />
                <Text>
                  <Title>{it.title}</Title>
                  <Name>{it.name}</Name>
                  <Birth>{it.birth}</Birth>
                  <Desc>{it.desc}</Desc>
                  {/* <Desc>식당 보러가기</Desc> */}
                </Text>
              </ImgBox>
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperView>
    </Wrapper>
  );
};

export default Panel;
