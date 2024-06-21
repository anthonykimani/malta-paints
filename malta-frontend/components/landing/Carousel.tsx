"use client";

import { BuildingFive, BuildingOne, BuildingThree } from "@/constants/img";
import "@splidejs/react-splide/css";
import Image from "next/image";
import { Splide, SplideSlide } from "react-splide-ts";


import React from "react";

const Carousel = () => {
  return (
    <Splide
      options={{
        rewind: true,
        gap: "1rem",
      }}
      aria-label="My Favorite Images"
    >
      <SplideSlide className="flex justify-center">
        <Image
          src={BuildingFive}
          alt=""
          className="w-[90%] h-[400px] object-cover m-10 rounded-md"
        />
      </SplideSlide>
      <SplideSlide className="flex justify-center">
        <Image
          src={BuildingOne}
          alt=""
          className="w-[90%] h-[400px] object-cover m-10 rounded-md"
        />
      </SplideSlide>
      <SplideSlide className="flex justify-center">
        <Image
          src={BuildingThree}
          alt=""
          className="w-[90%] h-[400px] object-cover m-10 rounded-md"
        />
      </SplideSlide>
    </Splide>
  );
};

export default Carousel;
