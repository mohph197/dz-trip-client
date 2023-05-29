import Image from "next/image";
import { FunctionComponent } from "react";

type ServiceTitleProps = {
    title: string;
    arrowColor: string;
}
 
const ServiceTitle: FunctionComponent<ServiceTitleProps> = ({ title, arrowColor }) => {
    return (
        <div className="w-full flex justify-center md:justify-start items-center gap-4">
            <div className="relative h-4 w-4 sm:h-6 sm:w-6">
                <Image src={`/assets/images/title-arrow-${arrowColor}.svg`} fill alt="Title Arrow" className="object-contain" />
            </div>
            <h4 className="text-lg sm:text-xl md:text-lg lg:text-2xl xl:text-3xl font-bold">{title}</h4>
        </div>
    );
}
 
export default ServiceTitle;