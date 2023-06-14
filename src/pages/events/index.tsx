import OperationsLayout from "@/components/shared/OperationsLayout";
import { NextPage } from "next";
import PostBox from "@/components/shared/PostBox";

const Events: NextPage = () => {
    return (
        <OperationsLayout pageName="events">
            <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] justify-items-center gap-x-10 gap-y-16 my-11 mx-24 ">
                <PostBox></PostBox>
                <PostBox></PostBox>
                <PostBox></PostBox>
                <PostBox></PostBox>
                <PostBox></PostBox>
                <PostBox></PostBox>
                <PostBox></PostBox>
                <PostBox></PostBox>
                <PostBox></PostBox>
                <PostBox></PostBox>
                <PostBox></PostBox>
                <PostBox></PostBox>
            </div>
        </OperationsLayout>
    );
}
 
export default Events;