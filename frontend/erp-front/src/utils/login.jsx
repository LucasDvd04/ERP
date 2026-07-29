import axios from "axios";

const urls = {
    new_token : 'accounts/token/',
    refresh_token : 'accounts/token/refresh/',
}

const authApi = axios.create({
    baseURL: "http://127.0.0.1:8000/",
});

async function api(url, credentials ){
    try{
        const response  = await authApi.post(url, credentials)
    }
    catch(err){

    }
}


function refreshAccess(token) {

    try {
        const refresh = {refresh:token}
        const response = await authApi.post("api/token/refresh/", refresh);
        const res = response.data;

        localStorage.setItem("@access", res.access);
        // localStorage.setItem("@refresh", res.refresh);

        console.log("Novo access");

        return res;
    } catch (error) {
        console.error(error);

        // localStorage.removeItem("@access");
        // localStorage.removeItem("@refresh");

        throw error;
    }
}