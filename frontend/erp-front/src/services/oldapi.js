import axios from "axios";

const urls = {
    new_token : 'accounts/token/',
    refresh_token : 'accounts/token/refresh/',
    product_list : 'products/list/',
    product_detail : 'detail/',
    product_new : 'products/token/',
    material_list : 'materials/token/',
    material_new : 'materials/token/',
    recipes_list : 'recipes/token/',
    recipes_new : 'recipes/token/',
    stock_list : 'recipes/token/',
    stock_new : 'recipes/token/',
    sheets_list : 'recipes/token/',
    sheets_new : 'recipes/token/',
}

function api(operation, ){

}

const authApi = axios.create({
    baseURL: "http://127.0.0.1:8000/",
});

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