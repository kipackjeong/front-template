"use client";
import { Card, Typography } from "@mui/material";
import VFlex from "client/core/ui/layouts/flexes/VFlex";
import React from "react";
import TextTyper from "../../core/ui/atoms/TextTyper";
import HFlex from "client/core/ui/layouts/flexes/HFlex";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

import "./swiper.css";

type HomeProps = {};

function Home({}: HomeProps) {
  return (
    <VFlex fullHeight fullWidth>
      <VFlex height={48} />
      <TextTyper />
      <VFlex height={48} />
      <Swiper
        style={{
          width: "100%",
          padding: 16,
          display: "flex",
          alignItems: "center",
        }}
        modules={[EffectFade, Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        centeredSlides={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000 }}
        loop
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <SwiperSlide
            key={i}
            style={{
              width: "fit-content",
              height: "fit-content",
              marginLeft: 4,
            }}
          >
            <Card sx={{ height: 400, p: 8, boxShadow: 4, borderRadius: 4 }}>
              <VFlex></VFlex>
            </Card>
          </SwiperSlide>
        ))}
        {/* <SwiperSlide>
            <Typography>Slide 1</Typography>
          </SwiperSlide>
          <SwiperSlide>
            <Typography>Slide 1</Typography>
          </SwiperSlide>
          <SwiperSlide>
            <Typography>Slide 1</Typography>
          </SwiperSlide> */}
        ...
      </Swiper>
    </VFlex>
  );
}

export default Home;
