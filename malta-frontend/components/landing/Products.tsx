import { productSource } from "@/helpers/productSource";
import Image from "next/image";
import React from "react";

const Products = () => {
  return (
    <section className="flex flex-col items-center font-jakarta" id="products">
      <div className="flex justify-between items-center w-full p-5 md:py-10 md:px-20">
        <h2 className="text-black text-center text-3xl xsm:text-[40px] font-bold my-2">
          Popular Product
        </h2>
        {/* <button className="text-black text-center text-base xsm:text-lg md:text-xl bg-gray-100 p-4 font-semibold">
          Go to Catalogue
        </button> */}
      </div>
      <div className="flex flex-col md:flex-row items-center w-full p-5 md:py-10 md:px-20">
        <article className="text-black grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center  w-full">
          {productSource.map((element, index) => {
            return (
              <div
                key={index}
                className={`flex flex-col justify-center items-center m-4 p-4 bg-gray-500 bg-opacity-10`}
              >
                <Image src={element.imageSource} alt="" width={0} height={0} />
                <span className="px-0 xsm:px-5 flex justify-between w-full items-center my-2">
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
