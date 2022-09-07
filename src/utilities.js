import axios from "axios";

export const baseURL="https://international-studies-apis.herokuapp.com";

export const getData=async (url)=>{
    const response=await axios.get(`${baseURL}${url}`)
    if(response.statusText==="OK"){
        return {result : response.data}
    }
    else{
       return {error : response} 
    }
}