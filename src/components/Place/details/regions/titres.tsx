import { FunctionComponent } from "react";

type DetailsTitleProps = {
  title1: string;
  title2: String;
  color: string;
};

const Titre: FunctionComponent<DetailsTitleProps> = ({
  title1,
  title2,
  color,
}) => {
  return (
    <div className="relative h-full w-full px-8 inset-x-0  flex flex-col  mx-1 ">
      <div className="flex place-items-start">
        <p className=" left-[19px] top-[-36px] text-[34px] font-bold text-center">
          <span
            className={`w-[602px] h-[72.89px] text-[34px] font-bold text-center text-[#${color}]`}
          >
            {title1}
          </span>
          {(color=="2FAACC")&&(<span className={`w-[602px] h-[72.89px] text-[34px] font-bold text-center text-[#2FAACC]`}></span>)}
          {" "}
          <span
            className={`w-[602px] h-[72.89px] text-[34px] font-bold text-center text-[#484848]`}
          >
            {title2}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Titre;
