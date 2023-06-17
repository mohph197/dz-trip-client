
import DetailSectionTitle from "@/components/Place/details/DetailSectionTitle";
import PageSection from "@/components/shared/PageSection";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";

const Tramway: FunctionComponent = ({  }) => {
  return (
   
 




<div
            className="flex-grow-0 flex-col  w-[363px] h-[382.62px] relative overflow-hidden rounded-[13.08px] bg-white"
            style={{
              boxShadow: "0px 3px 35px 0 rgba(0,0,0,0.25)",
            }}
          >
            <div className="w-full h-3/4  top-0 overflow-hidden">
              <img
                src="/assets/images/transport/tramway.png"
                className="w-full h-full   top-0 object-cover"
              />
            </div>

            <p className="absolute left-[22.07px] top-[298.41px] text-[19.62162208557129px] font-medium text-left text-black">
              tramway
            </p>
            <p className="absolute left-[22.07px] top-[334.39px] text-[17.986486434936523px] font-medium text-left text-[#959595]">
              De Alger à la c’est une descritpion
            </p>
            
          </div>
  );
};

export default Tramway;







