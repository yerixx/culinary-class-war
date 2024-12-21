import {
  Birth,
  Desc,
  Img,
  Name,
  PanelTitle,
  PanelView,
  SwiperView,
  Text,
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
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
          dolorem ut quibusdam debitis nostrum quos officiis mollitia neque
          corporis, et rerum placeat odit quisquam assumenda modi, fugit non
          velit cupiditate?
        </div>
      </PanelView>
      <SwiperView>
        <Swiper
          className="mySwiper"
          modules={[Pagination, Navigation, Autoplay]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
        >
          {Panels.map((it, index) => (
            <SwiperSlide key={index} className="slide">
              <Img src={it.img} />
              <Text>
                <Name>{it.name}</Name>
                <Birth>{it.birth}</Birth>
                <Desc>{it.desc}</Desc>
                <Desc>식당 보러가기</Desc>
              </Text>
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperView>
    </Wrapper>
  );
};

export default Panel;
