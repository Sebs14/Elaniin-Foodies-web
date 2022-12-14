import axios from "axios";

const getMyDish = async (page, category, query ) => {
    const categoryParam = category ? `&categories[]=${category}` : ""
    try{
        const response = await axios.get( import.meta.env.VITE_BASE_URL + `/dishes?page=${page}&limit=15&q=${query}${categoryParam}` )
        
        return response.data.data
    }
    catch(error){
        
    }
}

export default getMyDish