import DetailSectionTitle from "@/components/Place/details/DetailSectionTitle";
import Resto from "@/components/Place/details/resto";
import PageSection from "@/components/shared/PageSection";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";

type PlaceProps = {
	lieu: any;
};

const PlaceRestos: FunctionComponent<PlaceProps> = ({lieu}) => {
  return (
    <PageSection
      name="PLaceRestos"
      className="   "
    >
      <div className="flex flex-col justify-between gap-8">
        <div className=" items-start left px-20 ">
          <DetailSectionTitle title="Restaurants à proximitée" />
        </div>

        <div className=" flex justify-left gap-8 overflow-x-auto  relative h-full w-full  flex-row px-10 py-4">
          {/* Restaurants */}

         <Resto nom="DZDOOZ" description="description de restaurant "/>
         <Resto nom="Pizzeria" description="fastfood  "/>
         
        
        </div>
      </div>
    </PageSection>
  );
};

export default PlaceRestos;
