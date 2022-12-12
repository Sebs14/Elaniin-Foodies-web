import axios from "axios";


const postMyExperience = async (name, email, message) => {
    
    try {
        const response = await axios.post(import.meta.env.VITE_BASE_URL + `/forms/contact/submissions`, {name: name, email: email, message: message})
        console.log(response.data)
    } catch (error){
        console.error(error.response)
    }

}

export default postMyExperience