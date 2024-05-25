import { MaltaHero } from "@/constants/img";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-app-bg bg-no-repeat bg-cover h-screen flex flex-col md:flex-row items-end justify-center text-center p-2 md:py-10 md:px-20">
      <article className="text-black flex flex-col justify-around md:justify-center h-[500px] items-center">
        <h1 className="text-white font-clashDisplay text-5xl lg:text-6xl font-bold md:my-[20px]">
          Malta Paints
        </h1>
        <h2 className="md:my-[20px] text-white text-3xl">
          A Fresh Coat for a Fresh Start
        </h2>
        <button className=" py-3 px-6 w-[200px] rounded-lg bg-[#A33DFF] text-white font-semibold hover:bg-white hover:text-black hover:border-aqua hover:cursor-pointer">
          See All Products
        </button>
        <Image
          src={MaltaHero}
          width={0}
          height={0}
          alt=""
          className=""
        />
      </article>
    </div>
  );
};

export default HeroSection;
