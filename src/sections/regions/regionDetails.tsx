import PageSection from "@/components/shared/PageSection";

import { FunctionComponent } from "react";
import Titre from "@/components/Place/details/regions/titres";
import { useState  , useEffect } from "react";

const Regions: FunctionComponent = () => {
    // id de la region 
    const[idRegion,setIdRegion]=useState(0);
    const[region,setRegion]=useState({});
    function getRegion( ){
        // get nom de  la région 
    };

    // nombre des wilayas par regions 
    const[nbW,setNbW]=useState(30);
    function getNbrWilayas( ){
        // avoir le nombre des wilaya par region 

    }

    // nombre des lieux d'interet par region
    const [nbLieux,setNbLieux]=useState(367);
    function getNbrLieux( ){
        // recuperer le nombre des lieux par region 
    }

    const[wilayas,setWilayas]=useState([]);
    const[nomRegion,setNomRegion]=useState("");
    const[description,setdescription]=useState("");

  return (
    <PageSection
      name="Regions"
      className=" "
    >
        <div className="px-10">
        <Titre title1="Regions" title2="D'algerie" color="2FAACC"/>
        <div className="flex gap-8 text-[#484848] pl-4">
            <p className="text-[#60B896]">  Région  {nomRegion} </p>
            <div className=" flex justify-between items-center"> 
                <p className="font-bold px-2"> .</p>  
                <p className=""> {nbW} wilayas </p>
            </div>
            <div className=" flex justify-between items-center"> 
                <p className="font-bold px-2"> .</p>  
                <p className=""> {nbLieux} Lieux </p>
            </div>

        </div>
        <div className="Text-10  pt-8 px-10 font-medium text-[#484848]">
            {description}
        </div>
        </div>
     
    </PageSection>
  );
};

export default Regions;
