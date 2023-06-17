import PageSection from "@/components/shared/PageSection";
import { NextPage } from "next";
import Image from "next/image";
import BackgroundImage from "@/assets/images/connection.png";
import OperationsLayout from "@/components/shared/OperationsLayout";
import Photos from "@/sections/EventDetails/Photos";
import Description from "@/sections/EventDetails/Description";
import DropDown from "@/components/shared/DropDown";
import { wilayas } from "@/config/consts";
import LeafletMap from "@/components/shared/map";


//import Map from "@/components/shared/map";

const AddPlace: NextPage = () => {
  return (
    <PageSection name="connection" className="h-[max(150vh,24rem)]">
      <div className="flex flex-row gap-14 w-full h-16 justify-end  px-4 pb-4">
        <p className="font-montserrat font-normal text-xl leading-6 text-gray-800 text-center pt-2.5">
          User Name
        </p>
        <Image
          src="/assets/images/setting.png"
          alt=""
          height={40}
          width={40}
          className="object-cover"
        />
      </div>
      <div className="relative h-full w-full flex flex-row gap-4 py-4 px-20 justify-center items-center isolate">
        <Image
          src={BackgroundImage}
          alt="Connection Background"
          placeholder="blur"
          fill
          className="absolute inset-0 -z-10"
        />

        <article className="flex flex-col gap-2 rounded-2xl pl-10 py-8 pr-24 bg-white w-3/6 ">
          <div className="flex flex-col justify-center items-center ">
            <h3 className="font-montserrat font-bold text-2xl md:text-lg lg:text-xl xl:text-2xl text-black pl-8">
              Ajoutez un nouveau lieu
            </h3>
          </div>
          <p className="font-montserrat font-normal text-base leading-6 text-black pt-10">
            Nom du lieu
          </p>

          <div
            className={`flex gap-2 py-1 px-2   bg-white rounded-lg overflow-hidden border border-gray-400`}
          >
            <input
              type="text"
              name=""
              id=""
              placeholder="Entrer Nom..."
              className="bg-transparent outline-none w-full text-sm "
            />
          </div>
          <p className="font-montserrat font-normal text-base leading-6 text-black pt-6">
            Description
          </p>
          <div
            className={`flex gap-2 py-1 px-2 h-28   bg-white rounded-lg overflow-hidden border border-gray-400`}
          >
            <input
              type="text"
              name=""
              id=""
              placeholder="Decription..."
              className="bg-transparent outline-none w-full text-sm pb-16"
            />
          </div>
          <p className="font-montserrat font-normal text-base leading-6 text-black pt-6">
            Horaires d’acces
          </p>
          <div
            className={`flex gap-2 py-1 px-2  bg-white rounded-lg overflow-hidden border border-gray-400`}
          >
            <input
              type="time"
              name=""
              id=""
              placeholder="Entrer..."
              className="bg-transparent outline-none w-full text-sm"
            />
          </div>
          <p className="font-montserrat font-normal text-base leading-6 text-black pt-8">
            Moyens de transport
          </p>

          <div className="flex flex-row gap-6 pt-2">
            <button className="w-[147px] h-[35px] relative overflow-hidden rounded-[10px] bg-[#60b896] text-white hover:bg-[#57a484]">
              Train
            </button>
            <button className="w-[147px] h-[35px] relative overflow-hidden rounded-[10px] bg-[#2faacc] text-white hover:bg-[#2794b7]">
              Bus
            </button>
            <button className="relative px-6 py-3 hover:bg-gray-200">
              <Image
                src="/assets/images/add-circle.png"
                alt="add"
                fill
                className="object-contain"
              />
            </button>
          </div>
        </article>

        <article className="flex flex-col gap-8 rounded-2xl px-8 py-8 w-3/6 bg-white backdrop-blur justify-center items-center">
          <div className="flex flex-col items-center">
            <h3 className="font-montserrat font-bold text-2xl md:text-lg lg:text-xl xl:text-2xl text-black">
              Spécifier l’endroit sur la carte
            </h3>
            <div className="w-full h-full flex justify-center items-center">
              <LeafletMap/>
              <DropDown title="Wilaya" items={wilayas} />
            </div>
          </div>
          <button className="w-[150px] h-[43px] relative overflow-hidden rounded-[10px] bg-[#833b8f] text-white text-lg hover:bg-[#5a2563]">
            Ajouter
          </button>
        </article>
      </div>
    </PageSection>
  );
};

export default AddPlace;
