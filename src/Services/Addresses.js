import axios from "axios";
import { BASE_URL } from "./Service.constant";


const getMyLocations = async (type, query) => {
    try{
        const response = await axios.get(`${BASE_URL}/locations?type=${type}&q=${query}`)
        return response.data.data 
    }
    catch(error){
        
    }
    
}


export default getMyLocations
