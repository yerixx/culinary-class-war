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
  ChefsViewContainer,
  ChefsAddressView,
  WhiteChefsImage,
  BlackChefsImage,
  SearchInput,
  ChefsAddressMap,
  ChefsAddress,
  MapIcon,
  AddressListIcon,
} from "./Chefs.style";
import { blackChefs, whiteChefs } from "./ChefsClassData";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";

const Chefs = () => {
  const [selectedValue, setSelectedValue] = useState("백수저");
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const selectRef = useRef<HTMLDivElement | null>(null);

  // 셀렉트 값 변경 처리
  const handleSelect = (value: string) => {
    setSelectedValue(value);
    setOpen((prev) => !prev);
    setSearchTerm("");
  };

  // 외부 클릭 시 드롭다운 닫기
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

  const filteredChefs =
    selectedValue === "백수저"
      ? whiteChefs.filter((chef) =>
          chef.name.toLocaleLowerCase().includes(searchTerm.toLowerCase())
        )
      : blackChefs.filter((chef) =>
          chef.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
        );

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
          <SearchInput
            type="text"
            placeholder="찾고싶은 요리사를 입력해주세요"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
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
          slidesPerView={1.1}
          breakpoints={{
            768: {
              slidesPerView: 3,
            },
          }}
          navigation
          spaceBetween={20}
          pagination={{ clickable: true }}
        >
          {filteredChefs.map((it) => (
            <SwiperSlide key={it.id} className="slide">
              <ChefsViewContainer key={it.id}>
                {selectedValue === "백수저" ? (
                  <WhiteChefsImage src={it.img} />
                ) : (
                  <BlackChefsImage src={it.img} />
                )}
                <div>
                  <ChefsName>
                    <b>{it.name}</b>
                  </ChefsName>
                  <ChefsDesc>{it.career}</ChefsDesc>
                </div>
                <ChefsAddressView>
                  <ChefsAddressMap>
                    <ChefsAddress>
                      <b>{it.restaurants.restaurantA}</b>
                      <AddressListIcon>
                        <div>{it.address.addressA}</div>
                        {it.mapId.mapIdA && (
                          <MapIcon>
                            <a
                              href={`https://place.map.kakao.com/${it.mapId.mapIdA}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FaMapMarkerAlt />
                            </a>
                          </MapIcon>
                        )}
                      </AddressListIcon>
                    </ChefsAddress>
                    <ChefsAddress>
                      <b>{it.restaurants.restaurantB}</b>
                      <AddressListIcon>
                        <div>{it.address.addressB}</div>
                        {it.mapId.mapIdB && (
                          <MapIcon>
                            <a
                              href={`https://place.map.kakao.com/${it.mapId.mapIdB}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FaMapMarkerAlt />
                            </a>
                          </MapIcon>
                        )}
                      </AddressListIcon>
                    </ChefsAddress>
                    <ChefsAddress>
                      <b>{it.restaurants.restaurantC}</b>
                      <AddressListIcon>
                        <div>{it.address.addressC}</div>
                        {it.mapId.mapIdC && (
                          <MapIcon>
                            <a
                              href={`https://place.map.kakao.com/${it.mapId.mapIdC}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FaMapMarkerAlt />
                            </a>
                          </MapIcon>
                        )}
                      </AddressListIcon>
                    </ChefsAddress>
                  </ChefsAddressMap>
                </ChefsAddressView>
              </ChefsViewContainer>
            </SwiperSlide>
          ))}
        </Swiper>
      </ChefsView>
    </Wrapper>
  );
};

export default Chefs;
