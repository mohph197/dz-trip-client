import Image from "next/image";
import React from "react";

type HeaderProps = {
    title: string;
}
 
const Header: React.FC<HeaderProps> = ({title}) => {
    return (
        <header className="flex flex-col items-center">
            <h3>Hello, Welcome to</h3>
            <h1>{title}</h1>
            <Image src="/assets/images/logo.png" alt="ByteWise" width={300} height={300} className="object-contain" />
        </header>
    );
}
 
export default Header;