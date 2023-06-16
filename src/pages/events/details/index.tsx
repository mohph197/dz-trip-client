import PageSection from "@/components/shared/PageSection";
import { NextPage } from "next";
import Image from "next/image";
import BackgroundImage from "@/assets/images/connection.png";
import OperationsLayout from "@/components/shared/OperationsLayout";
import Photos from "@/sections/EventDetails/Photos";
import Description from "@/sections/EventDetails/Description";

const eventDetails: NextPage = () => {
  return (
    <OperationsLayout pageName="main">
      <div className="w-full pb-20 md:pb-24">
        <Photos />
        <Description />
      </div>
    </OperationsLayout>
  );
};

export default eventDetails;
