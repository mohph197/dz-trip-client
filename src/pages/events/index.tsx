import OperationsLayout from "@/components/shared/OperationsLayout";
import { NextPage } from "next";
import PostBox from "@/components/shared/PostBox";
import axios from "@/config/axios";
import { useEffect, useState } from "react";
import getListEvents from "@/services/events.service.js"


const Events: NextPage = () => {
   
    const [listEvent, setListEvent]= useState<any>(null); 
    
    useEffect(() => {
        const fetchListevent = async () => {
            const events = await getListEvents();
            setListEvent(events);
        } 
        fetchListevent();
    }, [])
    return (
        <OperationsLayout pageName="events">
            <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] justify-items-center gap-x-10 gap-y-16 my-11 mx-24 ">
                
                {listEvent.map((event: any)=>{
            
                    return <PostBox image={event.chemin} title={event.titre} desc={event.description}></PostBox>
                })}

            </div>
        </OperationsLayout>
    );
}

export default Events;