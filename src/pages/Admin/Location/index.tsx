import OperationsLayout from "@/components/shared/OperationsLayout";
import { NextPage } from "next";
import SidebarAdmin from "@/components/shared/SidebarAdmin";
import LocBox from "@/components/Admin/Location/LocBox"
import Image from "next/image";


const locationAdmin: NextPage = () => {
    return (
      <OperationsLayout pageName="main" className="h-screen overflow-hidden">
        <div className="flex flex-row h-screen">
          <SidebarAdmin></SidebarAdmin>
          <div className="px-8 pt-4 grow h-full flex flex-col gap-2">
            
            <div className="flex flex-row justify-end gap-x-10 px-3">
              <div className="relative isolate w-8 aspect-square">
                <Image
                  src="/assets/images/parametre.png"
                  alt="parametre not found"
                  className="absolute inset-0 z-20 "
                  fill
                />
              </div>
              <p className="text-2xl self-center">Administrateur</p>
            </div>
            
            <div>The navigation bar</div>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] justify-items-center gap-y-7 ">
              <LocBox></LocBox>
              <LocBox></LocBox>
              <LocBox></LocBox>
              <LocBox></LocBox>
              <LocBox></LocBox>
              <LocBox></LocBox>
            </div>
          </div>
        </div>
      </OperationsLayout>
    );
}
 
export default locationAdmin;