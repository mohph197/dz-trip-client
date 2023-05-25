import Image from "next/image";
import { FunctionComponent } from "react";

const Connection: FunctionComponent = () => {
    return (
        <main className="relative isolate flex min-h-screen flex-col justify-center items-center p-24">
            <Image src='/assets/images/connection.png' alt="Connection Background" fill className="absolute inset-0 -z-10" />
            <article className="flex flex-col gap-8 rounded-2xl p-8 from-[#a5a5a57a] to-[#ffffff7a] bg-gradient-to-b backdrop-blur">
                <div className="flex flex-col items-center">
                    <div className="relative w-16 aspect-square self-start">
                        <Image src='/assets/images/opening-quotes.svg' alt="Opening Quote" fill className="object-contain" />
                    </div>
                    <h3 className="text-xl w-72 text-center font-medium text-text-blackGray">The world is a book and those who do not travel read only one page</h3>
                    <div className="relative w-16 aspect-square self-end">
                        <Image src='/assets/images/closing-quotes.svg' alt="Closing Quote" fill className="object-contain" />
                    </div>
                </div>
                <button className="px-6 py-3 rounded-xl bg-white bg-opacity-50">Google</button>
            </article>
        </main>
    );
}
 
export default Connection;