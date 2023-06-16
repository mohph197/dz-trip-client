import DetailSectionTitle from "@/components/Place/details/DetailSectionTitle";
import PageSection from "@/components/shared/PageSection";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";
import PostBox from "@/components/shared/PostBox";
const PlaceActivities: FunctionComponent = () => {
  return (
    <PageSection
      name="PLaceActivities"
      className=" "
    >
      <div className="flex flex-col justify-between gap-8">
        <div className=" items-start left px-20 ">
          <DetailSectionTitle title="Activitées relatives" />
        </div>

        <div className=" no-scrollbar overflow-x-auto  flex gap-10  p-4 px-20 ">
          <PostBox ></PostBox>
          <PostBox ></PostBox>
          <PostBox ></PostBox>
          
          
        </div>
      </div>
    </PageSection>
  );
};

export default PlaceActivities;
