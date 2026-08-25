import React, { useState, useEffect } from "react";
import { RiSearchLine,RiAddLine   } from "@remixicon/react";
import authApi from "../../services/api";
import { useNavigate } from "react-router-dom";

function Materials(){
    const [search, setSearch] = useState({
        arg: "",
        
    });
    const navigate = useNavigate()

    const [materials, setMaterials] = useState([]);
    const [listMaterials , setlistMaterials] = useState([])

    useEffect(() => {
        const fetchMaterials = async () => {
            try {
                const response = await authApi.get('materials/list/');
                setMaterials(response.data);
            } catch (err) {
                   refreshAccess(localStorage.getItem("@refresh"));
                   fetchProducts()
        }
        
    };

    fetchMaterials();
    }, []);

    console.log(materials)
    return (
        <>
                    <div className="w-full h-2/12 text-white flex flex-col gap-3">
                        <h1 className="text-3xl ">Materials</h1>
                        <div className="flex ">
                            <input type="text" placeholder="Cheese-cake" className="w-10/12 p-2 outline-none bg-secondary rounded-l-full" onChange={
                                (e) => setSearch(
                                    {
                                        ...search,
                                        arg: e.target.value
                                        
                                    }
                                )
                            } />
                            <button className=" flex-auto flex items-center justify-center hover:bg-primary bg-secondary rounded-r-full cursor-pointer"><RiSearchLine color="rgba(255,255,255,1) " /></button>
                            <div className="flex flex-auto rounded-full items-center justify-center ml-1 p-2 bg-green-500 cursor-pointer hover:bg-green-200" onClick={()=> navigate('/materials/new')}>+Novo</div>
                        
                        </div>
                    </div>
                    <div className="w-full h-full bg-secondary rounded-2xl p-2 text-white scroll-auto">

                        <div className="w-full">
                            <table className="w-full">
                            <thead>
                                <tr className="" >
                                <th>ID</th>
                                <th>NAME</th>
                                <th>DESCRIPTION</th>
                                <th>PACKAGE</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                materials.map((product, index) => (
                                    <tr className={`text-center cursor-pointer  hover:border-b hover:border-amber-50 ${index % 2 === 0 ? 'bg-primary' : 'bg-secondary'}`} 
                                        key={product.id}  onClick={
                                    () => console.log("apertado")
                                    } >
                                        <td>{product.id}</td>
                                        <td>{product.name}</td>
                                         <td>
                                            {product.description.length > 30
                                            ? `${product.description.slice(0, 30)}...`
                                            : product.description}
                                        </td>
                                        <td>{product.pack_quantity}</td>                                    
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                        </div>
                    </div>

        </>
    )
}

export default Materials;