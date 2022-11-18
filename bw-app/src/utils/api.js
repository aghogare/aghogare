import axios from "axios";

const BWApi = axios.create({
    baseURL: "https://vanillainstal1.wpengine.com/wp-json" 
});


const get = (url) => {
    return BWApi.get(url).then((response) => {
        return response.data;
    }).catch((error) => {
        console.log(error);
    });
    
}

const post = (url, data) => {
    return BWApi.post(url, data).then((response) => {
        return response.data;
    }).catch((error) => {
        console.log(error);
    });
    
}

export {get}