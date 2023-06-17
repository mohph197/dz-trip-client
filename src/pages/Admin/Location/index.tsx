import OperationsLayout from "@/components/shared/OperationsLayout";
import { NextPage } from "next";
import SidebarAdmin from "@/components/shared/SidebarAdmin";
import LocBox from "@/components/Admin/Location/LocBox";
import HeaderAdmin from "@/components/Admin/Location/Header";
import Image from "next/image";
import { useEffect, useState } from "react";
import getListLieux from "@/services/Lieux.service.js";

const locationAdmin: NextPage = () => {
  const [listLieux, setListLieux] = useState<any>(null);
  useEffect(()=>{
    const fetchListLieu = async ()=>{
      const Lieux = await getListLieux();
      setListLieux(Lieux);
    }
    fetchListLieu();
  },[]);

  return (
    <OperationsLayout pageName="main" className="h-screen overflow-hidden">
      <div className="flex flex-row h-screen">
        <SidebarAdmin></SidebarAdmin>
        <div className="px-8 pt-4 grow h-full flex flex-col gap-2">
          
          <HeaderAdmin></HeaderAdmin>

          <div>The navigation bar</div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] justify-items-center gap-y-7 ">
            {listLieux.map((lieu:any)=>{
                return <LocBox props={lieu}></LocBox>;
            })}
            
          </div>
        </div>
      </div>
    </OperationsLayout>
  );
};

export default locationAdmin;
