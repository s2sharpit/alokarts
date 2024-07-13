"use client"
import { Section } from "./ui";
import productData from "@/data/productData";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

export default function Slider() {
  return (
    <Section>
      <Swiper
        className="h-full"
        loop={true}
        modules={[Autoplay, Navigation, Pagination, A11y]}
        spaceBetween={24}
        slidesPerView={1}
        slidesPerGroup={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        breakpoints={{
          512: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
            slidesPerGroup: 2,
          },
          769: {
            slidesPerView: 4,
            slidesPerGroup: 2,
          },
          1024: {
            slidesPerView: 5,
            slidesPerGroup: 2,
          },
          1280: {
            slidesPerView: 6,
            slidesPerGroup: 2,
          },
        }}
      >
        {productData.map((data: any, index: number) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center">
              <div className="h-48 w-44 grid place-items-center bg-secondary p-2">
                <Image
                  src={`/${index < 7 ? 1 : 2}.jpg`}
                  alt=""
                  width={120}
                  height={120}
                  className=""
                />
              </div>
              <span className="text-center">
                {data.name}
                <br />
                <span className="text-sm text-gray-500">₹{data.price}</span>
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
}
