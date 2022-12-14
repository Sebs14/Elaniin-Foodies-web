import axios from "axios";

const getMyDish = async (page, category ) => {
    try{
        const response = await axios.get( import.meta.env.VITE_BASE_URL + `/dishes?page=1&limit=15`)
        console.log(response.data)
        return response.data.data
    }
    catch(error){
        
    }
}

export default getMyDish