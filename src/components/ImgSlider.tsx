"use client";
import { Section } from "./ui";
import productData from "@/data/productData";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

export default function ImgSlider() {
  return (
    <Section>
      <Swiper
        className="h-full rounded-2xl overflow-hidden max-md:pt-8 md:w-4/5 border border-gray-400"
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
      >
        {[1, 2, 3].map((data: any, index: number) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center rounded-2xl overflow-hidden">
              <div className="h-48w-44 grid place-items-center">
                <Image
                  src={`/${index < 3 ? index + 1 : index % 3}.jpg`}
                  alt=""
                  width={1200}
                  height={1000}
                  className=""
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
}
