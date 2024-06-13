import { BluePaint, Interior } from "@/constants/img";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

export default function About() {
  return (
    <div className="bg-white w-full">
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 w-full">
        <div className=" lg:px-8 lg:py-10 w-full">
          <div className="lg:px-0 lg:pt-4 w-full">
            <div className=" flex flex-col lg:flex-row w-full">
              <div className="w-full p-5">
                {/* <Image
                  className="h-11"
                  width={0}
                  height={0}
                  src={BluePaint}
                  alt="Your Company"
                /> */}
                <div className="mt-24 sm:mt-32 lg:mt-16">
                  <a href="#" className="inline-flex space-x-6">
                    <span className="rounded-full bg-indigo-600/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-600/10">
                      What&apos;s new
                    </span>
                    <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
                      <span>New shipments in stock</span>
                      <ChevronRightIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </a>
                </div>
                <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Bring your Home to Life
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Visit your Local Hardwares, Industrial Parks to find our products in stock
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="#"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Purchase Stock
                  </a>
                  <a
                    href="#"
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    Contact our Agents <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
              <div>
                <Image
                  className="h-full w-full"
                  width={0}
                  height={0}
                  src={Interior}
                  alt="Your Company"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>
    </div>
  );
}
