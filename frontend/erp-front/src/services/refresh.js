import authApi from "./login";

function refreshAccess(token) {

    async() => {
        try {
        const refresh = {refresh:token}
        const response = await authApi.post("accounts/token/refresh/", refresh);
        const res = response.data;

        localStorage.setItem("@access", res.access);
        // localStorage.setItem("@refresh", res.refresh);

        console.log("Novo access");

        return res;
    } catch (error) {
        console.error(error);
        throw error;
    }
    }
    
}

export default refreshAccess