import axios from "axios";


const getMyLocations = async (type, query) => {

    

    try{
        const response = await axios.get( import.meta.env.VITE_BASE_URL + `/locations?type=${type}&q=${query}`)
        return response.data.data 
        
    }
    catch(error){
        
    }
    
}


export default getMyLocations
