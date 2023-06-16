import PageSection from "@/components/shared/PageSection";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";
import DetailSectionTitle from "@/components/Place/details/DetailSectionTitle";

const GeneralPhotos: FunctionComponent = () => {
  return (
    <PageSection
      name="generalPhotos"
      className="h-[max(100vh,768px)] md:h-resizable"
    >
      <div className="relative h-full w-full px-8 inset-x-0 sm:px-14 md:px-20 flex flex-col  mx-1 ">
        <DetailSectionTitle title="Nom lieu" />
        <div className="flex flex-row justify-between  w-full items-center gap-2 my-2">
          <div className="flex  justify-between gap-5 items-center ">
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0  relative gap-[5px]">
              <svg
                width={22}
                height={23}
                viewBox="0 0 22 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-[21.99px] h-[21.99px] relative"
                preserveAspectRatio="none"
              >
                <path
                  d="M5.49731 11.7988V9.35254C5.49731 6.3199 7.6504 5.07386 10.2799 6.59476L12.3963 7.82248L14.5128 9.05019C17.1423 10.5711 17.1423 13.054 14.5128 14.5749L12.3963 15.8026L10.2799 17.0303C7.6504 18.5238 5.49731 17.2869 5.49731 14.2451V11.7988Z"
                  stroke="#292D32"
                  stroke-width="1.37431"
                  stroke-miterlimit={10}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="flex-grow-0 flex-shrink-0  h-auto text-[16px] text-left text-[#878484]">
                Site Historique
              </p>
            </div>
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0  relative gap-[5px] pl-[0.00010267415927955881px] pr-[0.0000858306884765625px]">
              <svg
                width={23}
                height={23}
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-[21.99px] h-[21.99px] relative"
                preserveAspectRatio="none"
              >
                <path
                  d="M5.70532 11.7988V9.35254C5.70532 6.3199 7.85841 5.07386 10.4879 6.59476L12.6043 7.82248L14.7208 9.05019C17.3503 10.5711 17.3503 13.054 14.7208 14.5749L12.6043 15.8026L10.4879 17.0303C7.85841 18.5238 5.70532 17.2869 5.70532 14.2451V11.7988Z"
                  stroke="#292D32"
                  stroke-width="1.37431"
                  stroke-miterlimit={10}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 h-[25.59px] relative gap-[13px]">
                <svg
                  width={23}
                  height={26}
                  viewBox="0 0 23 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M22.7773 10.5408C22.7773 16.3605 11.4872 25.5943 11.4872 25.5943C11.4872 25.5943 0.197021 16.3605 0.197021 10.5408C0.197021 4.72109 5.2518 0.0032959 11.4872 0.0032959C17.7226 0.0032959 22.7773 4.72109 22.7773 10.5408Z"
                    fill="#60B896"
                  />
                </svg>
                <p className="flex-grow-0 flex-shrink-0  h-[24.09px] opacity-60 text-[16px] text-left text-black">
                  Alger , Adresse exacte{" "}
                </p>
              </div>
            </div>
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[5px] pl-[0.00009418230911251158px]">
              <svg
                width={23}
                height={23}
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-[21.99px] h-[21.99px] relative"
                preserveAspectRatio="none"
              >
                <path
                  d="M6.09595 11.7988V9.35254C6.09595 6.3199 8.24903 5.07386 10.8785 6.59476L12.995 7.82248L15.1114 9.05019C17.7409 10.5711 17.7409 13.054 15.1114 14.5749L12.995 15.8026L10.8785 17.0303C8.24903 18.5238 6.09595 17.2869 6.09595 14.2451V11.7988Z"
                  stroke="#292D32"
                  stroke-width="1.37431"
                  stroke-miterlimit={10}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="flex-grow-0 flex-shrink-0 text-[25.4932804107666px] text-left">
                <span className="flex-grow-0 flex-shrink-0 text-[16px] text-left text-[#60b896]">
                  Ouvert
                </span>
                <span className="flex-grow-0 flex-shrink-0 text-[16px] text-left text-black">
                  {" "}
                  De 10:00 à 18:00
                </span>
              </p>
            </div>
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0   relative gap-[5px] pl-[0.0000482491341244895px]">
              <svg
                width={23}
                height={23}
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-[21.99px] h-[21.99px] relative"
                preserveAspectRatio="none"
              >
                <path
                  d="M6.31934 11.7988V9.35254C6.31934 6.3199 8.47242 5.07386 11.1019 6.59476L13.2184 7.82248L15.3348 9.05019C17.9643 10.5711 17.9643 13.054 15.3348 14.5749L13.2184 15.8026L11.1019 17.0303C8.47242 18.5238 6.31934 17.2869 6.31934 14.2451V11.7988Z"
                  stroke="#292D32"
                  stroke-width="1.37431"
                  stroke-miterlimit={10}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="flex-grow-0 flex-shrink-0 text-[16px] text-left text-[#484848]">
                20 activitées{" "}
              </p>
            </div>
          </div>
          
            <div className=" relative px-[20px] py-[4.434779167175293px] rounded-[23.65px] bg-[#60b896] left-0 ">
              <p className="   flex-shrink-0  text-[16px] text-left text-black left-0">
                360 °
              </p>
            </div>
         
          
        </div>
        <div className="flex row justify-between gap-6 my-2 relative h-full w-full py-1 ">
            
          <Image
            src="/assets/images/Rectangle_7.png"
            alt="photo du lieux"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              height: "100%",
              width: "100%",
            }}
          />
          <div className="w-3/4 grid grid-cols-2 grid-rows-2 justify-items-center gap-6">
            <Image
              src="/assets/images/Rectangle_7.png"
              alt="photo du lieux"
              width={0}
              height={0}
              sizes="100vw"
              style={{
                height: "100%",
                width: "100%",
              }}
            />
            <Image
              src="/assets/images/Rectangle_7.png"
              alt="photo du lieux"
              width={0}
              height={0}
              sizes="100vw"
              style={{
                height: "100%",
                width: "100%",
              }}
            />
            <Image
              src="/assets/images/Rectangle_7.png"
              alt="photo du lieux"
              width={0}
              height={0}
              sizes="100vw"
              style={{
                height: "100%",
                width: "100%",
              }}
            />
            <div className="relative items-center ">
              <Image
                src="/assets/images/Rectangle_7.png"
                alt="photo du lieux"
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  height: "100%",
                  width: "100%",
                  opacity: "0.5",
                  
                }}
              />
              <div className=" z-20 absolute text-[20]  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="grid grid-rows-3 grid-flow-col gap-4">
                  <div className=" text-[40px] text-stone-600  font-bold row-span-3 top-1/2">
                    <p className="">+5 </p>
                  </div>
                  <div className=" text-[30px] text-stone-600 font-semibold col-span-2  ">
                    <h1>Voir</h1>
                  </div>
                  <div className=" text-[30px] text-stone-600  font-semibold row-span-2 col-span-2 ">
                    Plus
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <svg
            width={103}
            height={96}
            viewBox="0 0 103 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-[936.33px] top-[122.79px]"
            preserveAspectRatio="none"
          >
            <g filter="url(#filter0_d_399_3037)">
              <path
                d="M51.2782 33.577L37.0601 23.6427V62.6857L51.2782 52.7515L65.0301 43.1642L51.2782 33.577ZM51.2782 33.577L37.0601 23.6427V62.6857L51.2782 52.7515L65.0301 43.1642L51.2782 33.577ZM51.2782 33.577L37.0601 23.6427V62.6857L51.2782 52.7515L65.0301 43.1642L51.2782 33.577ZM41.7218 8.76299V0C32.3519 0.867623 23.8211 4.33811 16.9218 9.58723L23.5414 15.7907C28.7158 12.06 34.9158 9.54385 41.7218 8.76299ZM16.9684 21.9075L10.3023 15.7474C4.66166 22.1678 0.932331 30.1065 0 38.8261H9.41654C10.2556 32.4925 12.9594 26.7228 16.9684 21.9075ZM9.41654 47.5023H0C0.932331 56.222 4.66166 64.1607 10.3023 70.5811L16.9684 64.3776C12.9594 59.6057 10.2556 53.836 9.41654 47.5023ZM16.9218 76.7412C23.8211 81.9904 32.3985 85.4608 41.7218 86.3285V77.5655C34.9158 76.7846 28.7158 74.2685 23.5414 70.5377L16.9218 76.7412ZM93 43.1642C93 65.5489 74.7263 84.0293 51.2782 86.3285V77.5655C69.5519 75.3097 83.6767 60.7336 83.6767 43.1642C83.6767 25.5949 69.5519 11.0188 51.2782 8.76299V0C74.7263 2.2992 93 20.7796 93 43.1642Z"
                fill="black"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_399_3037"
                x={0}
                y={0}
                width="102.028"
                height="95.3564"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity={0} result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="5.0155" dy="5.0155" />
                <feGaussianBlur stdDeviation="2.0062" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_399_3037"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_399_3037"
                  result="shape"
                />
              </filter>
            </defs>
          </svg> */}
        </div>
      </div>
    </PageSection>
  )
}

export default GeneralPhotos;
