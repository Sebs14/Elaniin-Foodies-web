import axios from "axios";

const getCategories = async () => {
    try{
        const response = await axios.get( import.meta.env.VITE_BASE_URL + `/categories`)
        return response.data.data
    }
    catch(error){
        
    }
}

export default getCategories