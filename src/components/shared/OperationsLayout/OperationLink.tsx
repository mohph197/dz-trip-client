import { FunctionComponent } from "react";
import Link from 'next/link';

type OperationLinkProps = {
    name: string;
    url: string;
    active?: boolean;
}
 
const OperationLink: FunctionComponent<OperationLinkProps> = ({ name, url, active }) => {
    return (
        <Link
            href={url}
            className={`font-bold text-lg md:text-xl lg:text-2xl py-2 ${active ? 'text-primary border-b-4 border-primary' : 'text-text-blackGray hover:text-black' }`}
        >
            {name}
        </Link>
    );
}
 
export default OperationLink;