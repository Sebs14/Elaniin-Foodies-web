import axios from "axios";

const getMyDish = async (page, category, query) => {
    const limit = 8
    
    const categoryParam = category ? `&categories[]=${category}` : ""
    try{
        const response = await axios.get( import.meta.env.VITE_BASE_URL + `/dishes?page=${page}&limit=${limit}&q=${query}${categoryParam}` )
        

        return response.data
    }
    catch(error){
        
    }
}

export default getMyDish