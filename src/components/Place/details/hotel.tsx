import DetailSectionTitle from "@/components/Place/details/DetailSectionTitle";
import PageSection from "@/components/shared/PageSection";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";

const Hotel: FunctionComponent = () => {
  return (
    <div
      className="flex-grow-0 flex-col  w-[350px] h-[400px] relative overflow-hidden rounded-[13.08px] bg-white"
      style={{
        boxShadow: "0px 3px 35px 0 rgba(0,0,0,0.25)",
      }}
    >
      <div className="w-full h-3/4  top-0 overflow-hidden">
        <img
          src="/assets/images/hotel.png"
          className="w-full h-full   top-0 object-cover"
        />
      </div>
      <div className="flex justify-between items-center">
        <p className=" px-3 py-2 text-[19.62162208557129px] font-medium text-left text-black">
          Ibis
        </p>
        <div className="flex px-4">
          4
          <svg
            aria-hidden="true"
            className="w-6 h-6 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>First star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        </div>
      </div>
      <p className=" my-2 absolute left-[22.07px] top-[334.39px] text-[16px] font-normal text-left text-[#959595]">
        De Alger à la c’est une descritpion
      </p>
    </div>
  );
};

export default Hotel;
