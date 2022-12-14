import axios from "axios";

const getMyDish = async (page, category ) => {
    try{
        const response = await axios.get( import.meta.env.VITE_BASE_URL + `/dishes?page=${page}&limit=15&categories[]=${category}`)
        console.log(response.data)
        return response.data.data
    }
    catch(error){
        
    }
}

export default getMyDish