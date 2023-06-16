import DetailSectionTitle from "@/components/Place/details/DetailSectionTitle";
import PageSection from "@/components/shared/PageSection";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";

type restoProps = {
    nom: string;
    description: string;
 
}

const Resto: FunctionComponent<restoProps> = ( {nom, description} ) => {
  return (
    <div
      className="flex-grow-0 flex-col  w-[300px] h-[400px] relative overflow-hidden rounded-[13.08px] bg-white"
      style={{
        boxShadow: "0px 3px 35px 0 rgba(0,0,0,0.25)",
      }}
    >
      <div className="w-full h-3/4  top-0 overflow-hidden">
        <img
          src="/assets/images/resto.png"
          className="w-full h-full   top-0 object-cover"
        />
      </div>
      <div className="flex justify-between items-center">
        <p className=" px-3 py-2 text-[19.62162208557129px] font-medium text-left text-black">
          {nom}
        </p>
      </div>
      <p className=" my-2 absolute left-[22.07px] top-[334.39px] text-[16px] font-normal text-left text-[#959595]">
        {description}
      </p>
    </div>
  );
};

export default Resto;
