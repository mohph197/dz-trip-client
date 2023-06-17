import axios from '@/config/axios';

const getLieux = async ()=>{
    try{
        const response = await axios.get("/lieux");
        return response.data;
    }
    catch(error){
        let message;
        if (!error?.response){
            message = "Server not responding";
        }
        else if (error?.response){
            message = error?.response.data.detail;
        } else {
            message= "Getting event list failed"; 
        }
    }
}

export default getLieux;