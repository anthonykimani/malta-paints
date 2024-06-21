"use client";

import { BuildingFive, BuildingOne, BuildingThree } from "@/constants/img";
import Image from "next/image";
import { Splide, SplideSlide } from "react-splide-ts";
import "react-splide-ts/css";

import React from "react";
import { imageSource } from "@/helpers/imageSource";

const Carousel = () => {
  return (
    <Splide
      options={{
        rewind: true,
        gap: "1rem",
      }}
      aria-label="My Favorite Images"
    >
      {imageSource.map((element, index) => {
        return (
          <SplideSlide key={index} className="flex justify-center">
            <Image
              src={element.image}
              alt=""
              className="w-[90%] h-[400px] md:h-[600px] object-cover m-10 rounded-md"
            />
          </SplideSlide>
        );
      })}
    </Splide>
  );
};

export default Carousel;
