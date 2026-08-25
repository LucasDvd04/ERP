import authApi from "./api";

async function refreshAccess(token) {
    try {
        const refresh = {
            refresh: token
        };

        const response = await authApi.post(
            "accounts/token/refresh/",
            refresh
        );

        const res = response.data;

        localStorage.setItem("@access", res.access);

        return res;

    } catch (error) {
        throw error;
        //criar função para retornar modal de login
    }
}

export default refreshAccess;