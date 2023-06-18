import PageSection from "@/components/shared/PageSection";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";
import DetailSectionTitle from "@/components/Place/details/DetailSectionTitle";
import { useState, useEffect } from "react";
import Modal from "react-modal";
import React from "react";
import ReactStars from "react-stars";
import axios from '@/config/axios';

type PlaceProps = {
	lieu: any;
};

const Avis: FunctionComponent<PlaceProps> = ({lieu}) => {
  const [Avis, setAvis] = useState([]);
  const [MoyenNote, setMoyenNote] = useState(0);

  const [isOpen, setIsOpen] = useState(false);

  function getAvis(){
		axios.get(`/avis/${lieu.id}`).then((res:any) => {
		  setAvis(res.data);
		});
	  };

  useEffect(() => {
		getAvis();
	  },[]);
  


  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.6)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
    text: {
      font: "montserrat-bold",
    },
  };

  const [comment, setComment] = useState("");
  const [stars, setStars] = useState(0);

  // send a comment
  function sendComment() {
    console.log(comment);
  }

  const [close, setClose] = useState(false);

  useEffect(() => {
    setIsOpen(false);
    console.log(" closing");
    if (close == true) {
      setIsOpen(false);
      setClose(false);
    }
  }, [close]);

  function closePopup() {
    setIsOpen(false);
  }

  return (
    <PageSection name=" Avis et commentaires" className="">
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
              onClick={() => setIsOpen(true)}
            >
              <Modal
                id="popup"
                isOpen={isOpen}
                onRequestClose={() => setIsOpen(false)}
                style={customStyles}
              >
                <div className="w-full  h-100 flex gap-8 justify-between">
                  <div className="w-2/3">
                    <Image
                      src="/assets/images/avis.png"
                      alt="donner votre avis"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{
                        height: "100%",
                        width: "100%",
                      }}
                    />
                  </div>
                  <div className="flex flex-col gap-4 justify-center">
                    <div>
                      <h3 className="font-medium font-[montserrat] ">
                        Quelle note donneriez-vous à votre expérience ?
                      </h3>
                    </div>
                    <div className="flex gap-2  items-center  ">
                      <p className=" text-[#E94847] pt-2"> Horrible</p>
                      <div className="flex justify-start gap-4 items-end relative space-x-[-9px]">
                        {/* <svg
                          width={30}
                          height={30}
                          viewBox="0 0 41 41"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-grow-0 flex-shrink-0"
                          preserveAspectRatio="xMidYMid meet"
                        >
                          <path
                            d="M22.4329 3.154L24.9725 11.587C25.4721 13.246 26.9999 14.3815 28.7325 14.3815H37.3966C39.2276 14.3815 40.0263 16.6952 38.5853 17.8248L31.2029 23.6119C29.9299 24.6097 29.399 26.286 29.8654 27.8347L32.5936 36.8939C33.136 38.6952 31.0404 40.1266 29.5599 38.966L23.0105 33.832C21.5879 32.7168 19.5879 32.7168 18.1653 33.832L11.6159 38.966C10.1354 40.1266 8.03973 38.6952 8.58219 36.8939L11.3104 27.8347C11.7767 26.286 11.2458 24.6097 9.97292 23.6119L2.59043 17.8248C1.14944 16.6952 1.9482 14.3815 3.77916 14.3815H12.4433C14.1759 14.3815 15.7037 13.246 16.2033 11.587L18.7429 3.154C19.2935 1.32571 21.8823 1.32571 22.4329 3.154Z"
                            stroke="#959595"
                            stroke-width={2}
                          />
                        </svg>
                        <svg
                          width={35}
                          height={35}
                          viewBox="0 0 47 46"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-grow-0 flex-shrink-0"
                          preserveAspectRatio="xMidYMid meet"
                        >
                          <path
                            d="M25.019 2.41542L28.3228 13.2615C28.8264 14.9145 30.3513 16.0441 32.0793 16.0441H43.1528C44.9891 16.0441 45.7846 18.369 44.3331 19.4939L35.0563 26.6832C33.768 27.6817 33.2304 29.3722 33.7053 30.9314L37.171 42.3087C37.7185 44.1061 35.6326 45.5441 34.1475 44.3932L25.5812 37.7545C24.1653 36.6572 22.1863 36.6572 20.7704 37.7545L12.2041 44.3932C10.719 45.5441 8.63309 44.1061 9.18058 42.3087L12.6463 30.9314C13.1212 29.3722 12.5836 27.6817 11.2953 26.6832L2.01846 19.4939C0.566979 18.369 1.36242 16.0441 3.19876 16.0441H14.2723C16.0003 16.0441 17.5252 14.9145 18.0287 13.2615L21.3326 2.41541C21.8871 0.594929 24.4644 0.594926 25.019 2.41542Z"
                            stroke="#959595"
                            stroke-width={2}
                          />
                        </svg>
                        <svg
                          width={40}
                          height={40}
                          viewBox="0 0 52 52"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-grow-0 flex-shrink-0"
                          preserveAspectRatio="xMidYMid meet"
                        >
                          <path
                            d="M27.5205 2.50873L31.3871 15.3245C31.8874 16.9825 33.4147 18.117 35.1466 18.117L48.0948 18.117C49.9266 18.117 50.7248 20.4326 49.2821 21.5614L38.4427 30.0425C37.1672 31.0404 36.6353 32.719 37.103 34.2694L41.1539 47.6958C41.6972 49.4965 39.6032 50.9289 38.1219 49.7699L28.0956 41.925C26.6741 40.8128 24.6775 40.8128 23.256 41.925L13.2297 49.7699C11.7484 50.9289 9.65436 49.4965 10.1976 47.6958L14.2485 34.2694C14.7163 32.719 14.1843 31.0404 12.9089 30.0425L2.06942 21.5614C0.626716 20.4326 1.42494 18.117 3.25677 18.117L16.205 18.117C17.9368 18.117 19.4642 16.9825 19.9644 15.3245L23.8311 2.50873C24.3823 0.681714 26.9692 0.681716 27.5205 2.50873Z"
                            stroke="#959595"
                            stroke-width={2}
                          />
                        </svg>
                        <svg
                          width={35}
                          height={35}
                          viewBox="0 0 47 46"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-grow-0 flex-shrink-0"
                          preserveAspectRatio="xMidYMid meet"
                        >
                          <path
                            d="M25.019 2.41542L28.3228 13.2615C28.8264 14.9145 30.3513 16.0441 32.0793 16.0441H43.1528C44.9891 16.0441 45.7846 18.369 44.3331 19.4939L35.0563 26.6832C33.768 27.6817 33.2304 29.3722 33.7053 30.9314L37.171 42.3087C37.7185 44.1061 35.6326 45.5441 34.1475 44.3932L25.5812 37.7545C24.1653 36.6572 22.1863 36.6572 20.7704 37.7545L12.2041 44.3932C10.719 45.5441 8.63309 44.1061 9.18058 42.3087L12.6463 30.9314C13.1212 29.3722 12.5836 27.6817 11.2953 26.6832L2.01846 19.4939C0.566979 18.369 1.36242 16.0441 3.19876 16.0441H14.2723C16.0003 16.0441 17.5252 14.9145 18.0287 13.2615L21.3326 2.41541C21.8871 0.594929 24.4644 0.594926 25.019 2.41542Z"
                            stroke="#959595"
                            stroke-width={2}
                          />
                        </svg>
                        <svg
                          width={30}
                          height={30}
                          viewBox="0 0 40 41"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-grow-0 flex-shrink-0"
                          preserveAspectRatio="xMidYMid meet"
                        >
                          <path
                            d="M21.6087 3.154L24.1482 11.587C24.6479 13.246 26.1757 14.3815 27.9083 14.3815H36.5724C38.4034 14.3815 39.2021 16.6952 37.7611 17.8248L30.3786 23.6119C29.1057 24.6097 28.5748 26.286 29.0412 27.8347L31.7694 36.8939C32.3118 38.6952 30.2162 40.1266 28.7357 38.966L22.1863 33.832C20.7637 32.7168 18.7636 32.7168 17.3411 33.832L10.7917 38.966C9.31115 40.1266 7.21551 38.6952 7.75797 36.8939L10.4861 27.8347C10.9525 26.286 10.4216 24.6097 9.1487 23.6119L1.76621 17.8248C0.325221 16.6952 1.12398 14.3815 2.95494 14.3815H11.6191C13.3517 14.3815 14.8795 13.246 15.3791 11.587L17.9187 3.154C18.4693 1.32571 21.0581 1.32571 21.6087 3.154Z"
                            stroke="#959595"
                            stroke-width={2}
                          />
                        </svg> */}
                        <div>
                          <ReactStars
                            count={5}
                            size={30}
                            color2={"#ffd700"}
                            edit={true}
                          />
                        </div>
                      </div>
                      <p className=" text-[#60B896] pt-2"> Formidable</p>
                    </div>
                    <div>
                      <h3 className="font-medium "> Ajouter un commentaire </h3>
                    </div>
                    <div className=" bg-slate-300 rounded-[18px] h-20">
                      <input
                        className="h-full w-full stroke-black border rounded-md"
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Ecrivez vos commentaire "
                        defaultValue={""}
                      ></input>
                    </div>
                    <div>
                      <button 
                       
                        className=" h-8 m-auto w-2/3 bg-[#2FAACC] rounded-lg place-content-center text-white font-semibold "
                        style={{
                          filter: "drop-shadow(0px 4px 4px rgba(0,0,0,0.25))",
                        }}

                        onClick={() => sendComment()}
                      >
                        Envoyer
                      </button>
                    </div>
                  </div>
                  <div>
                    <button
                      className="font-sans font-bold font-montserrat "
                      onClick={() => {
                        setClose(true);
                      }}
                    >
                      X
                    </button>
                  </div>
                </div>
              </Modal>
              <div>
                <p className="text-white font-bold "> Donner votre avis</p>
              </div>
            </button>
          </div>

          <div className=" w-0.5  bg-[#60B896]"> </div>
          <div className=" w-2/3 no-scrollbar overflow-y-auto  flex flex-col gap-10 h-[496px]">
            {/* here the comments */}
            <>
            {Avis.map((avis) => (
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
                Cet avis est l'opinion subjective d'un membre de DZTrip et non
                l'avis de DZTrip . Les avis sont soumis à des vérifications de
                la part de DZTrip.
              </div>
              <div className="  relative pr-8">
                <p className="underline absolute bottom-0 right-6">
                  {" "}
                  signaler l'avis
                </p>
              </div>
            </div>))}
            </>
          </div>
        </div>
      </div>
    </PageSection>
  );
};

export default Avis;
