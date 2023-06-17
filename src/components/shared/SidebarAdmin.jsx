import Link from "next/link";
import Image from "next/image";

const SidebarAdmin = () => {
    return(
        <div className=" px-4 pb-8 w-72 h-full bg-white shadow-md relative">
            <div className="absolute inset-0 -ml-4 shadow-lg" />

            <div className="flex flex-row pt-2 pb-10 px-4 gap-4">
                <div className="w-12 h-14">
                    <img src="/assets/images/logo.svg" />
                </div>
                <p className="self-center text-3xl font-semibold">Trip</p>
            </div>

                {/* List of navigable items in the sideBar */}
            <div className="flex flex-col justify-center px-4 gap-y-6">

                <div className="flex flex-row gap-x-4 items-center">
                    <div className="relative isolate w-8 aspect-square">
                        <Image
                        src="/assets/images/sb_presentation.png"
                        alt="Dashbord not found"
                        className="absolute inset-0 z-20 "
                        fill
                        />
                    </div>
                    <Link href="/main" className=" text-xl text-text-blackGray">
                        Dashbord
                    </Link>
                </div>

                <div className="flex flex-row gap-x-4 items-center">
                    <div className="relative isolate w-8 aspect-square">
                        <Image
                        src="/assets/images/sb_user.png"
                        alt="User not found"
                        className="absolute inset-0 z-20 "
                        fill
                        />
                    </div>
                    <Link href="#">
                        <h3 className=" text-xl text-text-blackGray">Utilisateurs</h3>
                    </Link>
                </div>

                <div className="flex flex-row gap-x-4 items-center">
                    <div className="relative isolate w-8 aspect-square">
                        <Image
                        src="/assets/images/sb_respo.png"
                        alt="respo not found"
                        className="absolute inset-0 z-20 "
                        fill
                        />
                    </div>
                    <Link href="#">
                        <h3 className=" text-xl text-text-blackGray">Responsable</h3>
                    </Link>
                </div>

                <div className="flex flex-row gap-x-4 items-center">
                    <div className="relative isolate w-8 aspect-square">
                        <Image
                        src="/assets/images/sb_location.png"
                        alt="lieux not found"
                        className="absolute inset-0 z-20 "
                        fill
                        />
                    </div>
                    <Link href="#">
                        <h3 className=" text-xl text-text-blackGray">Lieux</h3>
                    </Link>
                </div>

                <div className="flex flex-row gap-x-4 items-center">
                    <div className="relative isolate w-8 aspect-square">
                        <Image
                        src="/assets/images/sb_demande.png"
                        alt="demande not found"
                        className="absolute inset-0 z-20 "
                        fill
                        />
                    </div>
                    <Link href="#">
                        <h3 className=" text-xl text-text-blackGray">Demandes</h3>
                    </Link>
                </div>

                <div className="flex flex-row gap-x-4 items-center">
                    <div className="relative isolate w-8 aspect-square">
                        <Image
                        src="/assets/images/sb_alarm.png"
                        alt="alarme not found"
                        className="absolute inset-0 z-20 "
                        fill
                        />
                    </div>
                    <Link href="#">
                        <h3 className=" text-xl text-text-blackGray">Avis signalés</h3>
                    </Link>
                </div>

                <hr className="w-44 h-px border-0 bg-gray-300 my-4 self-center" />

                <div className="flex flex-row gap-x-4 items-center">
                    <div className="relative isolate w-8 aspect-square">
                        <Image
                        src="/assets/images/sb_SignOut.png"
                        alt="SignOut not found"
                        className="absolute inset-0 z-20 "
                        fill
                        />
                    </div>
                    <Link href="#">
                        <h3 className=" text-xl text-text-blackGray">Se déconnecter</h3>
                    </Link>
                </div>

            </div>
        </div>
    );
};
export default SidebarAdmin;