import { useEffect, useRef, useState } from "react";
import {
  SelectWrapper,
  SelectView,
  Wrapper,
  Selected,
  SelectedOption,
  ChefsView,
  ChefsName,
  ChefsDesc,
  SelectTitle,
  ChefsAddress,
  WhiteChefsView,
  ChefsAddressView,
  WhiteChefsImage,
  BlackChefsImage,
} from "./Chefs.style";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { blackChefs, whiteChefs } from "./ChefsClass";

const Chefs = () => {
  const [selectedValue, setSelectedValue] = useState("백수저");
  const [open, setOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement | null>(null);

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Wrapper>
      <SelectView>
        <SelectTitle>흑백요리사</SelectTitle>
        <div>
          흑백요리사들의 특별한 식당 이야기. 독창적인 요리를 직접 경험해보세요.
        </div>
        <SelectWrapper ref={selectRef}>
          <Selected onClick={() => handleSelect(selectedValue)}>
            <article>{selectedValue === "all" ? "All" : selectedValue}</article>
            <article>{open ? <IoIosArrowUp /> : <IoIosArrowDown />}</article>
          </Selected>
          {open && (
            <SelectedOption>
              <li onClick={() => handleSelect("백수저")}>백수저</li>
              <li onClick={() => handleSelect("흑수저")}>흑수저</li>
            </SelectedOption>
          )}
        </SelectWrapper>
      </SelectView>
      <ChefsView>
        <Swiper
          className="mySwiper"
          modules={[Pagination, Navigation, Autoplay]}
          slidesPerView={3}
          navigation
          spaceBetween={20}
          pagination={{ clickable: true }}
        >
          {selectedValue === "백수저" &&
            whiteChefs.map((it) => (
              <SwiperSlide key={it.id} className="slide">
                <WhiteChefsView key={it.id}>
                  <WhiteChefsImage src={it.img} />
                  <ChefsName>
                    <b>{it.name}</b> / <span>{it.class}</span>
                  </ChefsName>
                  <ChefsDesc>{it.career}</ChefsDesc>
                  <ChefsAddressView>
                    <ChefsAddress>
                      <b>{it.restaurants.restaurantA}</b>
                      <div>{it.addresses.addressA}</div>
                    </ChefsAddress>
                    <ChefsAddress>
                      <b>{it.restaurants.restaurantB}</b>
                      <div>{it.addresses.addressB}</div>
                    </ChefsAddress>
                    <ChefsAddress>
                      <b>{it.restaurants.restaurantC}</b>
                      <div>{it.addresses.addressC}</div>
                    </ChefsAddress>
                  </ChefsAddressView>
                </WhiteChefsView>
              </SwiperSlide>
            ))}
          {selectedValue === "흑수저" &&
            blackChefs.map((it) => (
              <SwiperSlide key={it.id} className="slide">
                <WhiteChefsView key={it.id}>
                  <BlackChefsImage src={it.img}></BlackChefsImage>
                  <ChefsName>
                    <b>{it.name}</b> / <span>{it.class}</span>
                  </ChefsName>
                  <ChefsDesc>{it.career}</ChefsDesc>
                  <ChefsAddressView>
                    <ChefsAddress>
                      <b>{it.restaurants.restaurantA}</b>
                      <div>{it.addresses.addressA}</div>
                    </ChefsAddress>
                    <ChefsAddress>
                      <b>{it.restaurants.restaurantB}</b>
                      <div>{it.addresses.addressB}</div>
                    </ChefsAddress>
                    <ChefsAddress>
                      <b>{it.restaurants.restaurantC}</b>
                      <div>{it.addresses.addressC}</div>
                    </ChefsAddress>
                  </ChefsAddressView>
                </WhiteChefsView>
              </SwiperSlide>
            ))}
        </Swiper>
      </ChefsView>
    </Wrapper>
  );
};

export default Chefs;
