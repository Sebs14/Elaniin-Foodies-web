import axios from "axios";

const getText = async (type) => {
    try {
        const response = await axios.get( import.meta.env.VITE_STRAPI_URL + `/api/${type}?populate=*`)
        return response.data.data;
    }
    catch(error){
        console.error();
    }
}

export default getText;