import { ColorChart } from "@/constants/img";
import { colorCollection } from "@/helpers/colorCollection";
import { RadioGroup } from "@headlessui/react";
import Image from "next/image";
import React from "react";

const ColorCollection = () => {
  return (
    <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-32 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-base font-semibold leading-7 text-indigo-600">
          Color Chart
        </h1>
        <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Find a Color that’s just right
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
        From our collection of hundreds of different shades, styles
      </p>
      <Image src={ColorChart} alt="" className="my-10" />
    </div>
  );
};

export default ColorCollection;
