import {RiImageAddFill, RiDeleteBin2Fill   } from "@remixicon/react";
import authApi from "../../services/api";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import refreshAccess from "../../services/refresh";
import DeleteConfirm from "../../components/_deleteConfirm";


function MaterialDetails() {
    const {id} = useParams();

    const navigate = useNavigate();
    const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);
    const [ material, setMaterial] = useState({
        id:'',
        name:'',
        pack_quantity:'',
        description:'',
        supplier:'',
    })


    useEffect(() => {
        const fetchDetail = async () => {
            try {
                const response = await authApi.get(`materials/detail/${id}/`);
                setMaterial(
                    {        
                        id: response.data.id,
                        name:response.data.name,
                        pack_quantity:response.data.pack_quantity,
                        description:response.data.description,
                        supplier:response.data.supplier,
                        
                    }
                );
            } catch (err) {
                console.log(err);
            }
        };
        fetchDetail();
    }, [])
 

    console.log(material)

    async function saveMaterial(){
        try {
            const response = await authApi.put(`materials/update/${id}/`, material)
            const res = response.data

            if(res){
                alert('Dados salvos com sucesso.')
            }
        } catch (error) {
            console.log(error)
            refreshAccess(localStorage.getItem("@refresh"));
            saveProduct()
        }
    }

    return (
         <>
        
                        <div className="content flex flex-col flex-auto p-4">
                            <div className="w-full h-1/12 text-white flex flex-col ">
                                <h1 className="text-3xl ">Materials</h1>
                            </div>
                            <div className="w-full h-full flex flex-wrap gap-2 bg-secondary rounded-2xl p-10 text-white">
                                
                                <div className="l_side flex flex-1 items-center justify-center ">
                                    <div className="bg-primary  flex items-center justify-center rounded-full p-8 hover:bg-green-300 cursor-pointer">
                                    <RiImageAddFill size={72} color="rgba(255,255,255,1)" />
                                    </div>
                                </div>
        
                                <div className="r_side flex flex-col flex-2 justify-center">
                                
                                <div className="flex gap-2 flex-wrap">
                                    <div className="flex flex-col gap-1">
                                    Name
                                    <input type="text" className="bg-primary outline-none border border-primary focus:border-b-gray-300" placeholder="IFD123" value={material.name}/>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                    supplier
                                    <select className="bg-primary outline-none border border-primary focus:border-b-gray-300" >
                                        <option>supplier 1</option>
                                        <option>supplier 2</option>
                                        <option>supplier 3</option>
                                    </select>
                                    </div>
                                    
                                </div>
                                <div className="flex flex-col gap-1 flex-wrap">
                                    Description
                                    <textarea  className="bg-primary outline-none border border-primary focus:border-b-gray-300" placeholder="Write the description of Material here....." value={material.description}></textarea>
                                </div>
        
                                <div name='value' className="flex gap-2 flex-wrap">
                                <div className="flex flex-col gap-1">
                                    Pack Quantity
                                    <input type="number" className="bg-primary outline-none border border-primary focus:border-b-gray-300" placeholder="1.000" value={material.pack_quantity}/>
                                </div>
        
                                </div>
                                <div className="flex justify-end  gap-2 pt-5">
                                       <button className="bg-green-500 py-2 px-5 rounded-full hover:bg-primary cursor-pointer" onClick={saveMaterial}>Save</button>
                                        <button className="bg-red-500 py-2 px-5 rounded-full hover:bg-primary cursor-pointer" onClick={()=> navigate(-1)}>Return</button>
                                </div>
        
                            </div>
        
        
        
                            </div>
                        </div>
                
                </>
    
)

}

export default MaterialDetails;