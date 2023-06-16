import FAQLine from "@/components/Home/FAQLine";
import PageSection from "@/components/shared/PageSection";
import { faq } from "@/config/consts";
import ServiceTitle from "@/components/Home/ServiceTitle";
import { useWindowSize } from "@/hooks/WindowSize";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent, useEffect, useState } from "react";

const Photos: FunctionComponent = () => {
  return (
    <div className="px-36 ">
      <PageSection name="photo" title="" className="gap-3">
        <div className="relative flex flex-col gap-5 justify-between w-full">
          <button className="">
            <Image
              src="/assets/images/arrow-left.png"
              alt="Events"
              height={40}
              width={40}
              className="object-cover"
            />
          </button>
          <h3 className="font-montserrat font-semibold text-xl md:text-xl lg:text-3xl xl:text-4xl  text-text-blackGray text-left">
            Photos des événements précédents
          </h3>

          <div className="relative flex ">
            <div className="grid grid-cols-4 grid-rows-2  gap-4">
              <div className="relative row-span-2 col-span-2 rounded-xl overflow-hidden">
                <Image
                  src="/assets/images/sea.png"
                  alt="Events"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative w-full h-full col-start-3 col-end-5 row-span-1 rounded-xl overflow-hidden">
                <Image
                  src="/assets/images/jetski.png"
                  alt="Events"
                  fill
                  className="object-cover"
                />
              </div>

              <div className=" relative col-start-3 col-end-4 rounded-xl overflow-hidden">
                <Image
                  src="/assets/images/beach.png"
                  alt="Events"
                  fill
                  className="object-cover"
                />
              </div>
              <div className=" group col-start-4 col-end-5 relative items-center justify-center rounded-xl overflow-hidden">
                <Image
                  src="/assets/images/swimmer.png"
                  alt="Events"
                  height={335}
                  width={335}
                  className="object-cover opacity-60 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
                />
                <div className="absolute top-0 left-0 w-full h-full  flex flex-row items-center justify-center z-10">
                  <div className="">
                    <Link
                      href=""
                      className="text-white font-bold text-4xl md:text-lg lg:text-2xl xl:text-4xl"
                    >
                      +2
                    </Link>
                  </div>
                  <div className="flex flex-col mt-5 ml-6">
                    <Link href=""
                    className="text-white text-lg md:text-sm lg:text-base xl:text-lg">
                      More
                    </Link>
                    <Link href=""
                     className="text-white text-lg md:text-sm lg:text-base xl:text-lg font-semibold">
                      Photos
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className='relative flex flex-col md:flex-row gap-5 md:gap-0 justify-between items-center w-[min(1024px,80vw)]'>
      <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-text-blackGray text-left">Photos des evenement précédants</h3>
            <div className="flex  w-3/4 md:w-2/6 aspect-square">            
                <Image
                    src="/assets/images/sea.png"
                    alt="Events"
                    fill
                    className="object-contain"
                />           
        </div>  
  </div> */}
      </PageSection>
    </div>
  );
};

export default Photos;
