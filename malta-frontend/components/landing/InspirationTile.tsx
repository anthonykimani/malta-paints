"use client"

import { Interior } from "@/constants/img";
import { colorCollection } from "@/helpers/colorCollection";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React, { useState } from "react";

const InspirationTile = () => {
    const [selectedColor, setSelectedColor ] = useState("#fff");
  return (
    <div className="bg-white w-full">
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 w-full">
        <div className=" lg:px-8 lg:py-40 w-full">
          <div className="lg:px-0 lg:pt-4 w-full">
            <div className="flex justify-between items-center w-full p-5 md:py-10 md:px-20">
              <h2 className="text-black text-center text-3xl xsm:text-[40px] font-bold my-2">
                Color Collection
              </h2>
              <button className="text-black text-center text-base xsm:text-lg md:text-xl bg-gray-100 p-4 font-semibold">
                Go to Catalogue
              </button>
            </div>
            <div className=" flex flex-col lg:flex-row w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 w-full lg:w-1/2">
                {colorCollection.map((element) => {
                  return (
                    <div
                      key={element.colorCode}
                      className="p-3 border  flex justify-center items-center"
                      style={{ backgroundColor: element.colorCode }}
                    >
                      <h4 className="text-white">{element.colorName}</h4>
                    </div>
                  );
                })}
              </div>
              <div className="w-full lg:w-1/2">
                <svg

                  viewBox="0 0 1200 800"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full"
                >
                  <path d="M133.3 0H0V133.3H133.3V0Z" fill="#EEEEEE" />
                  <path
                    d="M0 133.3C0 59.7 59.7 0 133.3 0V133.3H0Z"
                    fill="#262626"
                  />
                  <path d="M400 0H133.3V266.7H400V0Z" fill="#EEEEEE" />
                  <path
                    d="M133.3 133.3C133.3 59.7 193 0 266.7 0C340.4 0 400 59.7 400 133.3C400 206.9 340.3 266.6 266.7 266.6C193.1 266.6 133.3 207 133.3 133.3Z"
                    fill="#F0F0F2"
                  />
                  <path d="M533.3 0H400V133.3H533.3V0Z" fill="#9B9B9B" />
                  <path
                    d="M433.3 66.7C433.3 48.3 448.2 33.4 466.6 33.4C485 33.4 500 48.3 500 66.7C500 85.1 485.1 100 466.7 100C448.3 100 433.3 85.1 433.3 66.7Z"
                    fill="#EEEEEE"
                  />
                  <path d="M666.6 0H533.3V133.3H666.6V0Z" fill="#EEEEEE" />
                  <path
                    d="M533.3 133.3C533.3 59.7 593 0 666.7 0V133.3H533.3Z"
                    fill="#D2D6D9"
                  />
                  <path d="M800 0H666.7V133.3H800V0Z" fill="#D2D6D9" />
                  <path
                    d="M666.7 66.7C666.7 29.9 696.5 0 733.4 0C770.3 0 800 29.8 800 66.7C800 103.6 770.2 133.4 733.3 133.4C696.4 133.4 666.7 103.5 666.7 66.7Z"
                    fill="#F0F0F2"
                  />
                  <path d="M133.3 133.3H0V266.6H133.3V133.3Z" fill="#9B9B9B" />
                  <path
                    d="M33.3 200C33.3 181.6 48.2 166.7 66.6 166.7C85 166.7 100 181.6 100 200C100 218.4 85.1 233.3 66.7 233.3C48.3 233.3 33.3 218.4 33.3 200Z"
                    fill="#262626"
                  />
                  <path
                    d="M533.3 133.3H400V266.6H533.3V133.3Z"
                    fill="#D2D6D9"
                  />
                  <path
                    d="M400 266.7C400 193.1 459.7 133.4 533.3 133.4V266.7H400Z"
                    fill="#262626"
                  />
                  <path
                    d="M666.6 133.3H533.3V266.6H666.6V133.3Z"
                    fill="#9B9B9B"
                  />
                  <path
                    d="M666.7 266.7C593.1 266.7 533.4 207 533.4 133.4H666.7V266.7Z"
                    fill="#F0F0F2"
                  />
                  <path d="M800 133.3H666.7V266.6H800V133.3Z" fill="#F0F0F2" />
                  <path
                    d="M666.7 266.7C666.7 193.1 726.4 133.4 800 133.4V266.7H666.7Z"
                    fill="#F0F0F2"
                  />
                  <path d="M133.3 266.7H0V400H133.3V266.7Z" fill="#9B9B9B" />
                  <path
                    d="M0 266.7C73.6 266.7 133.3 326.4 133.3 400H0V266.7Z"
                    fill="#262626"
                  />
                  <path
                    d="M266.6 266.7H133.3V400H266.6V266.7Z"
                    fill="#9B9B9B"
                  />
                  <path
                    d="M133.3 333.3C133.3 296.5 163.1 266.6 200 266.6C236.9 266.6 266.7 296.4 266.7 333.3C266.7 370.2 236.8 400 200 400C163.2 400 133.3 370.2 133.3 333.3Z"
                    fill="#F0F0F2"
                  />
                  <path d="M400 266.7H266.7V400H400V266.7Z" fill="#F0F0F2" />
                  <path
                    d="M266.7 333.3C266.7 296.5 296.5 266.6 333.4 266.6C370.3 266.6 400.1 296.4 400.1 333.3C400.1 370.2 370.2 400 333.3 400C296.4 400 266.7 370.2 266.7 333.3Z"
                    fill="#9B9B9B"
                  />
                  <path d="M533.3 266.7H400V400H533.3V266.7Z" fill="#EEEEEE" />
                  <path
                    d="M533.3 266.7C533.3 340.3 473.6 400 400 400V266.7H533.3Z"
                    fill="#262626"
                  />
                  <path
                    d="M666.6 266.7H533.3V400H666.6V266.7Z"
                    fill="#EEEEEE"
                  />
                  <path
                    d="M666.7 400C593.1 400 533.4 340.3 533.4 266.7H666.7V400Z"
                    fill="#9B9B9B"
                  />
                  <path d="M800 266.7H666.7V400H800V266.7Z" fill="#D2D6D9" />
                  <path
                    d="M700 333.3C700 314.9 714.9 300 733.3 300C751.7 300 766.6 314.9 766.6 333.3C766.6 351.7 751.7 366.6 733.3 366.6C714.9 366.7 700 351.7 700 333.3Z"
                    fill="#9B9B9B"
                  />
                  <path d="M133.3 400H0V533.3H133.3V400Z" fill="#EEEEEE" />
                  <path
                    d="M133.3 400C133.3 473.6 73.6 533.3 0 533.3V400H133.3Z"
                    fill="#D2D6D9"
                  />
                  <path d="M266.6 400H133.3V533.3H266.6V400Z" fill="#EEEEEE" />
                  <path
                    d="M133.3 466.7C133.3 429.9 163.1 400 200 400C236.9 400 266.7 429.8 266.7 466.7C266.7 503.6 236.9 533.4 200 533.4C163.1 533.4 133.3 503.5 133.3 466.7Z"
                    fill="#D2D6D9"
                  />
                  <path d="M400 400H266.7V533.3H400V400Z" fill="#F0F0F2" />
                  <path
                    d="M300 466.7C300 448.3 314.9 433.4 333.3 433.4C351.7 433.4 366.6 448.3 366.6 466.7C366.6 485.1 351.7 500 333.3 500C314.9 500 300 485.1 300 466.7Z"
                    fill="#D2D6D9"
                  />
                  <path d="M533.3 400H400V533.3H533.3V400Z" fill="#262626" />
                  <path
                    d="M400 466.7C400 429.9 429.8 400 466.7 400C503.6 400 533.4 429.8 533.4 466.7C533.4 503.6 503.6 533.4 466.7 533.4C429.8 533.4 400 503.5 400 466.7Z"
                    fill="#F0F0F2"
                  />
                  <path d="M666.6 400H533.3V533.3H666.6V400Z" fill="#EEEEEE" />
                  <path
                    d="M566.7 466.7C566.7 448.3 581.6 433.4 600 433.4C618.4 433.4 633.3 448.3 633.3 466.7C633.3 485.1 618.4 500 600 500C581.6 500 566.7 485.1 566.7 466.7Z"
                    fill="#9B9B9B"
                  />
                  <path d="M800 400H666.7V533.3H800V400Z" fill="#262626" />
                  <path
                    d="M800 400C800 473.6 740.3 533.3 666.7 533.3V400H800Z"
                    fill="#D2D6D9"
                  />
                  <path d="M133.3 533.3H0V666.6H133.3V533.3Z" fill="#D2D6D9" />
                  <path
                    d="M0 600C0 563.2 29.8 533.3 66.7 533.3C103.6 533.3 133.4 563.1 133.4 600C133.4 636.9 103.6 666.7 66.7 666.7C29.8 666.7 0 636.8 0 600Z"
                    fill="#EEEEEE"
                  />
                  <path
                    d="M266.6 533.3H133.3V666.6H266.6V533.3Z"
                    fill="#EEEEEE"
                  />
                  <path
                    d="M133.3 600C133.3 563.2 163.1 533.3 200 533.3C236.9 533.3 266.7 563.1 266.7 600C266.7 636.9 236.9 666.7 200 666.7C163.1 666.7 133.3 636.8 133.3 600Z"
                    fill="#262626"
                  />
                  <path
                    d="M166.7 600C166.7 581.6 181.6 566.7 200 566.7C218.4 566.7 233.3 581.6 233.3 600C233.3 618.4 218.4 633.3 200 633.3C181.6 633.3 166.7 618.4 166.7 600Z"
                    fill="#EEEEEE"
                  />
                  <path
                    d="M666.6 533.3H533.3V666.6H666.6V533.3Z"
                    fill="#D2D6D9"
                  />
                  <path
                    d="M666.7 533.3C666.7 606.9 607 666.6 533.4 666.6V533.3H666.7Z"
                    fill="#EEEEEE"
                  />
                  <path d="M800 533.3H666.7V666.6H800V533.3Z" fill="#EEEEEE" />
                  <path
                    d="M666.7 666.7C666.7 593.1 726.4 533.4 800 533.4V666.7H666.7Z"
                    fill="#9B9B9B"
                  />
                  <path d="M133.3 666.7H0V800H133.3V666.7Z" fill="#9B9B9B" />
                  <path
                    d="M33.3 733.3C33.3 714.9 48.2 700 66.6 700C85 700 99.9001 714.9 99.9001 733.3C99.9001 751.7 85 766.6 66.6 766.6C48.2 766.6 33.3 751.7 33.3 733.3Z"
                    fill="#D2D6D9"
                  />
                  <path
                    d="M266.6 666.7H133.3V800H266.6V666.7Z"
                    fill="#262626"
                  />
                  <path
                    d="M266.7 666.7C266.7 740.3 207 800 133.4 800V666.7H266.7Z"
                    fill="#9B9B9B"
                  />
                  <path
                    d="M533.4 533.3H266.7V800H533.4V533.3Z"
                    fill="#D2D6D9"
                  />
                  <path
                    d="M533.3 800C386 800 266.6 680.6 266.6 533.3H533.3V800Z"
                    fill="#EEEEEE"
                  />
                  <path d="M1200 666.7H1066.7V800H1200V666.7Z" fill="#EEEEEE" />
                  <path
                    d="M1200 733.3C1200 770.1 1170.2 800 1133.3 800C1096.4 800 1066.6 770.2 1066.6 733.3C1066.6 696.5 1096.4 666.6 1133.3 666.6C1170.2 666.6 1200 696.5 1200 733.3Z"
                    fill="#F0F0F2"
                  />
                  <path
                    d="M1066.6 666.7H933.3V800H1066.6V666.7Z"
                    fill="#262626"
                  />
                  <path
                    d="M1066.7 800C993.1 800 933.4 740.3 933.4 666.7H1066.7V800Z"
                    fill="#EEEEEE"
                  />
                  <path d="M933.3 666.7H800V800H933.3V666.7Z" fill="#9B9B9B" />
                  <path
                    d="M900 733.3C900 751.7 885.1 766.6 866.7 766.6C848.3 766.6 833.4 751.7 833.4 733.3C833.4 714.9 848.3 700 866.7 700C885.1 700 900 714.9 900 733.3Z"
                    fill="#EEEEEE"
                  />
                  <path
                    d="M1200 533.3H1066.7V666.6H1200V533.3Z"
                    fill="#262626"
                  />
                  <path
                    d="M1066.7 666.7C1066.7 593.1 1126.4 533.4 1200 533.4V666.7H1066.7Z"
                    fill="#D2D6D9"
                  />
                  <path
                    d="M1066.6 533.3H933.3V666.6H1066.6V533.3Z"
                    fill="#F0F0F2"
                  />
                  <path
                    d="M1066.7 533.3C1066.7 606.9 1007 666.6 933.4 666.6V533.3H1066.7Z"
                    fill="#EEEEEE"
                  />
                  <path
                    d="M933.3 533.3H800V666.6H933.3V533.3Z"
                    fill="#D2D6D9"
                  />
                  <path
                    d="M933.3 533.3C933.3 606.9 873.6 666.6 800 666.6V533.3H933.3Z"
                    fill="#262626"
                  />
                  <path d="M933.3 400H800V533.3H933.3V400Z" fill="#EEEEEE" />
                  <path
                    d="M800 533.3C800 459.7 859.7 400 933.3 400V533.3H800Z"
                    fill="#262626"
                  />
                  <path
                    d="M1200 266.7H933.3V533.4H1200V266.7Z"
                    fill="#EEEEEE"
                  />
                  <path
                    d="M1133.3 400C1133.3 436.8 1103.5 466.7 1066.6 466.7C1029.7 466.7 1000 436.8 1000 400C1000 363.2 1029.8 333.3 1066.7 333.3C1103.6 333.3 1133.3 363.2 1133.3 400Z"
                    fill="#9B9B9B"
                  />
                  <path d="M933.3 266.7H800V400H933.3V266.7Z" fill="#262626" />
                  <path
                    d="M933.3 333.3C933.3 370.1 903.5 400 866.6 400C829.7 400 800 370.2 800 333.3C800 296.4 829.8 266.6 866.7 266.6C903.6 266.6 933.3 296.5 933.3 333.3Z"
                    fill="#F0F0F2"
                  />
                  <path
                    d="M1200 133.3H1066.7V266.6H1200V133.3Z"
                    fill="#EEEEEE"
                  />
                  <path
                    d="M1200 200C1200 236.8 1170.2 266.7 1133.3 266.7C1096.4 266.7 1066.6 236.9 1066.6 200C1066.6 163.1 1096.4 133.3 1133.3 133.3C1170.2 133.3 1200 163.2 1200 200Z"
                    fill="#9B9B9B"
                  />
                  <path
                    d="M1066.6 133.3H933.3V266.6H1066.6V133.3Z"
                    fill="#9B9B9B"
                  />
                  <path
                    d="M1033.3 200C1033.3 218.4 1018.4 233.3 1000 233.3C981.6 233.3 966.7 218.4 966.7 200C966.7 181.6 981.6 166.7 1000 166.7C1018.4 166.7 1033.3 181.6 1033.3 200Z"
                    fill="#D2D6D9"
                  />
                  <path
                    d="M933.3 133.3H800V266.6H933.3V133.3Z"
                    fill="#D2D6D9"
                  />
                  <path
                    d="M933.3 200C933.3 236.8 903.5 266.7 866.6 266.7C829.7 266.7 800 236.8 800 200C800 163.2 829.8 133.3 866.7 133.3C903.6 133.3 933.3 163.2 933.3 200Z"
                    fill="#EEEEEE"
                  />
                  <path d="M1200 0H1066.7V133.3H1200V0Z" fill="#F0F0F2" />
                  <path
                    d="M1066.7 133.3C1066.7 59.7 1126.4 0 1200 0V133.3H1066.7Z"
                    fill="#262626"
                  />
                  <path d="M1066.6 0H933.3V133.3H1066.6V0Z" fill="#F0F0F2" />
                  <path
                    d="M1033.3 66.7C1033.3 85.1 1018.4 100 1000 100C981.6 100 966.7 85.1 966.7 66.7C966.7 48.3 981.6 33.4 1000 33.4C1018.4 33.4 1033.3 48.3 1033.3 66.7Z"
                    fill="#9B9B9B"
                  />
                  <path d="M933.3 0H800V133.3H933.3V0Z" fill="#D2D6D9" />
                  <path
                    d="M800 0C873.6 0 933.3 59.7 933.3 133.3H800V0Z"
                    fill="#EEEEEE"
                  />
                  <path
                    d="M666.6 666.7H533.3V800H666.6V666.7Z"
                    fill="#F0F0F2"
                  />
                  <path d="M800 666.7H666.7V800H800V666.7Z" fill="#F0F0F2" />
                  <path
                    d="M800 666.7C800 740.3 740.3 800 666.7 800V666.7H800Z"
                    fill="#9B9B9B"
                  />
                  <path
                    d="M666.7 733.3C666.7 770.1 636.9 800 600 800C563.1 800 533.3 770.2 533.3 733.3C533.3 696.5 563.1 666.6 600 666.6C636.9 666.6 666.7 696.5 666.7 733.3Z"
                    fill="#262626"
                  />
                  <path
                    d="M166.7 333.3C166.7 314.9 181.6 300 200 300C218.4 300 233.3 314.9 233.3 333.3C233.3 351.7 218.4 366.6 200 366.6C181.6 366.6 166.7 351.7 166.7 333.3Z"
                    fill="#262626"
                  />
                  <path
                    d="M200 133.3C200 96.5 229.8 66.6 266.7 66.6C303.6 66.6 333.4 96.4 333.4 133.3C333.4 170.2 303.5 200 266.7 200C229.9 200 200 170.2 200 133.3Z"
                    fill="#262626"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>
    </div>
  );
};

export default InspirationTile;
