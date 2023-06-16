import Image from "next/image";
import { FunctionComponent } from "react";

type DetailsTitleProps = {
    title: string;
 
}
 
const DetailSectionTitle: FunctionComponent<DetailsTitleProps> = ({ title }) => {
    return (
        <div className="w-full flex justify-center md:justify-start items-center gap-4">
            <p className=" relative left-2  text-[40px] font-bold text-left text-[#484848]">
            {title}
          </p>
        </div>
    );
}
 
export default DetailSectionTitle;