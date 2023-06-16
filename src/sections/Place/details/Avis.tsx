import PageSection from "@/components/shared/PageSection";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";
import DetailSectionTitle from "@/components/Place/details/DetailSectionTitle";


const Avis: FunctionComponent = () => {
    
  return (
    <PageSection
      name=" Avis et commentaires"
      className=""
    >
      <div className="bg-white flex flex-col gap-4 pt-8 justify-between w-full ">
        <div className=" items-start left px-32 py-8">
          <DetailSectionTitle title="Avis et commentaires " />
        </div>
        <div className="flex row gap-8 px-8 ">
          <div className=" w-1/3 H-24 flex flex-col px-4 gap-8 py-4 items-center  ">
            <div
              className="W-4/5 h-full relative overflow-hidden  rounded-[18px] bg-[#edf0ec] p-6 flex flex-col gap-4 justify-items-start  w-11/12  place-content-center my-6 px-4"
              style={{ boxShadow: "0px 4px 21px 0 rgba(0,0,0,0.25)" }}
            >
              <div className="text-[30px] flex justify-left top-2 bottom-3 items-center">
                <div>
                  <div className="flex items-center">
                    <p className="font-bold text-["> 4.7</p>
                    <svg
                      aria-hidden="true"
                      className="w-10 h-10 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>First star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      className="w-10 h-10 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Second star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      className="w-10 h-10 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Third star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      className="w-10 h-10 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Fourth star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      className="w-10 h-10 text-gray-300 dark:text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Fifth star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </div>
                </div>
                <p className="text-[20px] text-left text-[#5a5a5f]/[0.76] ml-4">
                  124 Avis
                </p>
              </div>
              <div className="flex">
                <div className="flex flex-col gap-3">
                  <div className="text-[24px] flex justify-left items-center ">
                    <div className="font-medium">Excellent</div>
                  </div>
                  <div className="text-[24px] flex justify-left items-center">
                    <div className="font-medium">Bon</div>
                  </div>
                  <div className="text-[24px] flex justify-left items-center">
                    <div className="font-medium">Moyen</div>
                  </div>
                  <div className="text-[24px]  justify-left inline-flex items-center ">
                    <div className="font-medium">Excellent</div>
                  </div>
                </div>
                <div className=" flex flex-col gap-6 top-4 pt-2 px-2  ">
                  <div className="flex justify-left items-center gap-2">
                    <div className=" w-[180px] h-[16px] rounded-[21px] bg-[#60b896]" />
                    <div>48</div>
                  </div>
                  <div className="flex justify-left items-center gap-2">
                    <div className=" w-[100px] h-[16px] rounded-[21px] bg-[#60b896]" />
                    <div>48</div>
                  </div>
                  <div className="flex justify-left items-center gap-2">
                    <div className=" w-[50px] h-[16px] rounded-[21px] bg-[#60b896]" />
                    <div>48</div>
                  </div>
                  <div className="flex justify-left items-center gap-2 ">
                    <div className=" w-[18px] h-[16px] rounded-[21px] bg-[#60b896]" />
                    <div>48</div>
                  </div>
                </div>
              </div>
            </div>
            <button
              className=" h-[70px] relative w-2/3 bg-[#2FAACC] rounded-lg place-content-center my-6 "
              style={{ filter: "drop-shadow(0px 4px 4px rgba(0,0,0,0.25))" }}
            >
              <div>
                <p className="text-white font-bold "> Donner votre avis</p>
              </div>
            </button>
          </div>

          <div className=" w-0.5  bg-[#60B896]"> </div>
          <div className=" w-2/3 no-scrollbar overflow-y-auto  flex flex-col gap-10 h-[496px]">
            {/* here the comments */ }
            
            <div className=" flex flex-col gap 8 ">
              <div className="flex gap-2">
                <svg
                  width={60}
                  height={60}
                  viewBox="0 0 62 69"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <ellipse cx="30" cy="30" rx="30" ry="30" fill="#E94847" />
                </svg>
                <div>
                  <p className=" text-3xl font-semibold text-left text-[#292d32]">
                    Nom prénom
                  </p>
                  <p className=" text-1.8xl text-left text-[#5a5a5f]">
                    28, Join 2023
                  </p>
                </div>
              </div>
              <div className="flex justify-between px-4 ">
                <svg
                  width={140}
                  height={30}
                  viewBox="0 0 200 55"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[187.64px] h-[49px]"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M17.4633 10.7055C18.2312 7.8003 22.3547 7.8003 23.1226 10.7055L24.1917 14.7502C24.5311 16.0345 25.6929 16.9291 27.0213 16.9291L31.577 16.9291C34.2649 16.9291 35.5314 20.2484 33.5266 22.0389L28.8718 26.1962C28.0504 26.9298 27.7103 28.0624 27.9918 29.1271L29.5168 34.8968C30.2586 37.7033 26.9025 39.7613 24.7375 37.8277L22.2426 35.5994C21.132 34.6076 19.4539 34.6076 18.3433 35.5994L15.8484 37.8277C13.6834 39.7613 10.3273 37.7033 11.0691 34.8968L12.5941 29.1271C12.8756 28.0624 12.5355 26.9298 11.7141 26.1962L7.05926 22.0389C5.05454 20.2484 6.32102 16.9291 9.00889 16.9291L13.5646 16.9291C14.893 16.9291 16.0548 16.0345 16.3942 14.7502L17.4633 10.7055Z"
                    fill="#FFC73A"
                  />
                  <path
                    d="M54.4074 10.7055C55.1753 7.8003 59.2988 7.8003 60.0667 10.7055L61.1358 14.7502C61.4752 16.0345 62.637 16.9291 63.9654 16.9291L68.5211 16.9291C71.209 16.9291 72.4755 20.2484 70.4707 22.0389L65.8159 26.1962C64.9945 26.9298 64.6544 28.0624 64.9358 29.1271L66.4609 34.8968C67.2027 37.7033 63.8466 39.7613 61.6816 37.8277L59.1867 35.5994C58.0761 34.6076 56.3979 34.6076 55.2874 35.5994L52.7925 37.8277C50.6275 39.7613 47.2714 37.7033 48.0132 34.8968L49.5382 29.1271C49.8197 28.0624 49.4796 26.9298 48.6582 26.1962L44.0034 22.0389C41.9986 20.2484 43.2651 16.9291 45.953 16.9291L50.5087 16.9291C51.837 16.9291 52.9989 16.0345 53.3383 14.7502L54.4074 10.7055Z"
                    fill="#FFC73A"
                  />
                  <path
                    d="M91.3517 10.7055C92.1196 7.8003 96.2431 7.8003 97.011 10.7055L98.0801 14.7502C98.4196 16.0345 99.5814 16.9291 100.91 16.9291L105.465 16.9291C108.153 16.9291 109.42 20.2484 107.415 22.0389L102.76 26.1962C101.939 26.9298 101.599 28.0624 101.88 29.1271L103.405 34.8968C104.147 37.7033 100.791 39.7613 98.6259 37.8277L96.131 35.5994C95.0205 34.6076 93.3423 34.6076 92.2317 35.5994L89.7368 37.8277C87.5718 39.7613 84.2157 37.7033 84.9575 34.8968L86.4826 29.1271C86.764 28.0624 86.4239 26.9298 85.6026 26.1962L80.9477 22.0389C78.943 20.2484 80.2094 16.9291 82.8973 16.9291L87.453 16.9291C88.7814 16.9291 89.9432 16.0345 90.2826 14.7502L91.3517 10.7055Z"
                    fill="#FFC73A"
                  />
                  <path
                    d="M128.296 10.7055C129.064 7.8003 133.187 7.8003 133.955 10.7055L135.024 14.7502C135.364 16.0345 136.525 16.9291 137.854 16.9291L142.41 16.9291C145.097 16.9291 146.364 20.2484 144.359 22.0389L139.704 26.1962C138.883 26.9298 138.543 28.0624 138.824 29.1271L140.349 34.8968C141.091 37.7033 137.735 39.7613 135.57 37.8277L133.075 35.5994C131.965 34.6076 130.286 34.6076 129.176 35.5994L126.681 37.8277C124.516 39.7613 121.16 37.7033 121.902 34.8968L123.427 29.1271C123.708 28.0624 123.368 26.9298 122.547 26.1962L117.892 22.0389C115.887 20.2484 117.154 16.9291 119.841 16.9291L124.397 16.9291C125.725 16.9291 126.887 16.0345 127.227 14.7502L128.296 10.7055Z"
                    fill="#FFC73A"
                  />
                  <path
                    d="M170.192 10.8925L171.261 14.9372C171.685 16.5425 173.137 17.6608 174.798 17.6608H179.354C181.37 17.6608 182.319 20.1503 180.816 21.4931L176.161 25.6505C175.134 26.5675 174.709 27.9832 175.061 29.3141L176.586 35.0838C177.142 37.1886 174.625 38.7322 173.002 37.282L170.507 35.0537C169.118 33.8139 167.021 33.8139 165.633 35.0537L163.138 37.282C161.514 38.7322 158.997 37.1886 159.553 35.0838L161.078 29.3141C161.43 27.9832 161.005 26.5675 159.978 25.6505L155.323 21.4931C153.82 20.1503 154.77 17.6608 156.786 17.6608H161.341C163.002 17.6608 164.454 16.5425 164.878 14.9372L165.947 10.8925C166.523 8.71359 169.616 8.71359 170.192 10.8925Z"
                    stroke="#959595"
                    stroke-width="1.46341"
                  />
                </svg>
                <Image
                  src="/assets/images/like.png"
                  alt="like"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{
                    height: "70%",
                    width: "5%",
                    opacity: "10",
                  }}
                />
              </div>
              <div className=" text-[20px] px-4 font-medium text-[#292D32] opacity-90 pb-6">
                hey here i the comment 

              </div>
              <div className=" text-[16px] px-4 font-normal text-[#292D32] opacity-80 pb-8">
              Cet avis est l'opinion subjective d'un membre de DZTrip et non l'avis de DZTrip  . Les avis sont soumis à des vérifications de la part de DZTrip.
              </div>
              <div className="  relative pr-8">
              <p className="underline absolute bottom-0 right-6"> signaler l'avis</p>
              </div>
            </div>
            
        
           
          </div>
        </div>
      </div>
    </PageSection>
  );
};

export default Avis;
