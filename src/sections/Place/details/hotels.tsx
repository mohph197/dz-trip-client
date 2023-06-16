import DetailSectionTitle from "@/components/Place/details/DetailSectionTitle";
import Hotel from "@/components/Place/details/hotel";
import PageSection from "@/components/shared/PageSection";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";

const PlaceHotels: FunctionComponent = () => {
  return (
    <PageSection
      name="PLaceHotels"
      className="  "
    >
      <div className="flex flex-col justify-between gap-8">
        <div className=" items-start left px-20 ">
          <DetailSectionTitle title="Hotels à proximitée" />
        </div>

        <div className=" flex justify-left gap-8 overflow-x-auto  relative h-full w-full  flex-row px-10 py-4">
          {/* hotels */}

         <Hotel/>
         <Hotel/>
         <Hotel/>
         <Hotel/>
        </div>
      </div>
    </PageSection>
  );
};

export default PlaceHotels;
