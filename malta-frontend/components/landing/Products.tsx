import { productSource } from "@/helpers/productSource";
import Image from "next/image";
import React from "react";

const Products = () => {
  return (
    <section className="flex flex-col items-center font-jakarta">
      <h3 className="text-aqua font-semibold text-xl">WHY USE MALTA</h3>
      <h2 className="text-black text-center text-3xl xsm:text-[40px] font-bold my-2">
        Easy, Simple, Affordable
      </h2>
      <h4 className="text-[#596780ab] text-center text-base xsm:text-lg md:text-xl"></h4>
      <div className="flex flex-col md:flex-row items-center w-full p-5 md:py-10 md:px-20">
        <article className="text-black grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 sm:flex-row justify-around md:justify-around  w-full">
          {productSource.map((element, index) => {
            return (
              <div
                key={index}
                className={`flex flex-col justify-center items-center m-4 p-4 bg-gray-500 bg-opacity-10`}
              >
                <Image src={element.imageSource} alt="" width={0} height={0} />
                <span className="px-0 xsm:px-5 flex justify-between w-full items-center">
                  <h3 className="text-black font-semibold text-xl xsm:text-2xl">
                    {element.text}
                  </h3>
                </span>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
};

export default Products;
