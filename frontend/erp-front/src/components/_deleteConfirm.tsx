import { useState } from "react";
import { useNavigate } from "react-router-dom";
import authApi from "../services/api";

function DeleteConfirm({url, isOpen, setIsDeleteConfirmOpen}) {
    const navigate = useNavigate();

    console.log(isOpen)
    const handleDelete = async () => {
        try {
            const response = await authApi.delete(`${url}`);
            if (response.status === 200) {
                console.log("Product deleted successfully");
                navigate(-1);
            } else {
                console.error("Failed to delete product");
            }
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    }

    if (!isOpen) {
        return null;
    }else{
        return(
        <>
            <div className="w-full h-full flex items-center justify-center fixed bg-black/50 ">
                <div className="w-1/2 h-auto bg-secondary rounded-2xl flex flex-col items-center justify-center gap-5 p-8">
                    <h1 className="text-white text-2xl">Are you sure you want to delete this product?</h1>
                    <div className="w-full h-1/4 flex items-center justify-around">
                        <button className="bg-red-500 w-1/4 h-full rounded-lg text-white hover:bg-red-700" onClick={handleDelete}>Yes</button>
                        <button className="bg-green-500 w-1/4 h-full rounded-lg text-white hover:bg-green-700" onClick={()=> setIsDeleteConfirmOpen(!isOpen)} >No</button>
                    </div>
                </div>
            </div>
        </>
    )
    }
}


export default DeleteConfirm;