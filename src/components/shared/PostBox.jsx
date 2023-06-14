import Image from 'next/image';
// props: image,title,desc
const PostBox = () => {

    return (
        // overflow-hidden: so that nothing can get out of the defined radius
        <div className="relative flex flex-col gap-2 w-64 h-[350px] rounded-2xl bg-white shadow-md overflow-hidden" >
            <div className="relative w-full aspect-square isolate">
                <Image 
                    src="/assets/images/event2.png" 
                    alt="image not found" 
                    className="absolute inset-0 -z-20 object-cover" //object-cover so that it'd fit the first relative parent
                    fill
                />
            </div>
            <div className=" px-5 flex items-center justify-between ">
                <p className="text-xl">Title me ^^</p>
                <div className="relative isolate w-7 h-6">
                    <Image
                        src="/assets/images/heart.png" 
                        alt="heart not found" 
                        className="absolute inset-0 z-20 object-cover"
                        fill 
                    />
                </div>
            </div>
            <p className="px-5 text-lg text-text-gray overflow-hidden overflow-ellipsis whitespace-nowrap" > 
                A long description that needs to be limited with ellipsis if it exceeds the width of the container
            </p>
        </div>
    )
}  

export default PostBox;
