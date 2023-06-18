import DetailSectionTitle from "@/components/Place/details/DetailSectionTitle";
import Metro from "@/components/Place/details/metro";
import Tramway from "@/components/Place/details/tramway";
import PageSection from "@/components/shared/PageSection";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";

type PlaceProps = {
	lieu: any;
};

const PlaceTransport: FunctionComponent<PlaceProps> = ({lieu}) => {
  return (
    <PageSection name="PLaceTransport" className=" m-10   ">
      <div className="flex flex-col justify-between gap-8">
        <div className=" items-start left px-20 ">
          <DetailSectionTitle title="Moyens de transport " />
        </div>

        <div className=" flex justify-left gap-8 overflow-x-auto  relative h-full w-full  flex-row px-10 py-4">
          {/* tramway */}

          <Metro />
          <Tramway/>
          
        </div>
      </div>
    </PageSection>
  );
};

export default PlaceTransport;
