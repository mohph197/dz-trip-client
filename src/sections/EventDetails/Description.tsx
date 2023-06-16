import FAQLine from "@/components/Home/FAQLine";
import PageSection from "@/components/shared/PageSection";
import { faq } from "@/config/consts";
import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";

const Description: FunctionComponent = () => {
  return (
    <div className="px-36 ">
      <PageSection name="descript" title="" className="gap-8">
        <div className="relative  justify-center items-center w-full">
          <div className="grid grid-cols-3 grid-rows-1 gap-16">
            <div className="relative bg-gray-50 shadow-md rounded-3xl justify-center items-center px-8 py-8 w-485 h-581">
              <h2 className="font-montserrat font-bold text-lg leading-6 text-gray-800  mb-5 text-center">
                Information
              </h2>
              <div className="relative w-full mb-10">
                <div className="h-px bg-gray-300 absolute left-0 right-0 bottom-0"></div>
              </div>
              <div className="flex items-center mb-3">
                <div className="ml-3">
                  <Image
                    src="/assets/images/pointer.png"
                    alt="Events"
                    height={15}
                    width={15}
                    className="object-cover"
                  />
                </div>
                <p className="text-gray-600 ml-3 text-sm">P85P+Q6W, Oran</p>
              </div>
              <div className="flex items-center mb-3">
                <div className="ml-3">
                  <Image
                    src="/assets/images/clock.png"
                    alt="Events"
                    height={17}
                    width={17}
                    className="object-cover"
                  />
                </div>
                <p className="text-gray-600 ml-3 text-sm">Date: 15/05/2023</p>
              </div>
              <div className="flex items-center mb-5">
                <div className="ml-3">
                  <Image
                    src="/assets/images/clock.png"
                    alt="Events"
                    height={17}
                    width={17}
                    className="object-cover"
                  />
                </div>
                <p className="text-gray-600 ml-3 text-sm">Durée: 2 jours</p>
              </div>
              <div className="flex items-center mb-3">
                <div className="ml-3">
                  <Image
                    src="/assets/images/cash.png"
                    alt="Events"
                    height={13}
                    width={13}
                    className="object-cover"
                  />
                </div>
                <p className="text-gray-600 ml-3 text-sm">Prix: DZD 200</p>
              </div>
              <div className="flex  justify-center items-center mt-9">
                <Link
                  href=""
                  className="bg-primary py-2 px-20 rounded-full text-white text-center w-600 h-10 hover:bg-[#57a484]"
                >
                  Participer
                </Link>
              </div>
              <div className=" flex justify-center items-center mt-5">
                <div className=" ">
                  <Image
                    src="/assets/images/phone.png"
                    alt="Events"
                    height={13}
                    width={13}
                    className="object-cover"
                  />
                </div>
                <div className="text-center">
                  <Link
                    href=""
                    className="font-montserrat font-medium leading-5 text-gray-800  ml-3 text-xs"
                  >
                    Contacter l’organisateur
                  </Link>
                </div>
              </div>
            </div>

            <div className=" w-full h-full col-start-2 col-end-4 row-span-1 rounded-lg justify-between items-center p-4 w-485 h-581">
              <div className="relative grid grid-cols-6  ">
                <div className=" col-start-1 col-end-2">
                  <h2 className="font-montserrat font-bold text-3xl md:text-xl lg:text-2xl xl:text-3xl leading-tight text-gray-800 text-left">
                    Description
                  </h2>
                </div>
                <div className=" col-start-6 col-end-6">
                  <button className="relative px-6 py-3">
                    <Image
                    src="/assets/images/heart.png"
                    alt="Events"
                    height={43}
                    width={32}
                    className="object-cover"
                  />
                  </button>
                </div>
                
              </div>

              <p className="font-montserrat font-normal text-base leading-7 md:text-sm lg:text-base xl:text-lg text-justify text-gray-600 mt-7">
                Une activitée maritine , ui vad durer 2 jour à partir du 18/05 ,
                dans la plage de , cette dernière contiendera plusieur activités
                TQ : Une activitée maritine , ui vad durer 2 jour à partir du
                18/05 , dans la plage de , cette dernière contiendera plusieur
                activités TQ :Une activitée maritine , ui vad durer 2 jour à
                partir du 18/05 , dans la plage de , cette dernière contiendera
                plusieur activités TQ :Une activitée maritine , ui vad durer 2
                jour à partir du 18/05 , dans la plage de , cette dernière
                contiendera plusieur activités TQ :Une activitée maritine , ui
                vad durer 2 jour à partir du 18/05 , dans la plage de , cette
                dernière contiendera plusieur activités TQ :
              </p>
            </div>
          </div>
        </div>
      </PageSection>
    </div>
  );
};

export default Description;
