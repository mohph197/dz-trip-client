import Image from "next/image";

const HeaderAdmin = ()=> {
    return(
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
    );
};

export default HeaderAdmin;