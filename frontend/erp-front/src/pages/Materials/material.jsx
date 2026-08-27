import React, { useState, useEffect } from "react";
import { RiSearchLine,RiAddLine, RiImageAddFill   } from "@remixicon/react";
import { useNavigate } from "react-router-dom";
import authApi from "../../services/api";


function Material(){
    const navigate = useNavigate()
    const [supplier, setSupplier] = useState({})

    useEffect(
        () => {
            const fetchSuppliers = async () => {
               try{
                    const response = await authApi.get(`materials/supplier/`);
                    setSupplier(response.data)
               }catch(err){
                console.log(err)
               }
            };
            fetchSuppliers();
        },[]
    )

    console.log(supplier)


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
                            <input type="text" className="bg-primary outline-none border border-primary focus:border-b-gray-300" placeholder="IFD123"/>
                            </div>
                            <div className="flex flex-col gap-1">
                            supplier
                            <select className="bg-primary outline-none border border-primary focus:border-b-gray-300" >
                                {supplier.map((item) => (
                                    <option key={item.id} value={item.id}>{item.name}</option>
                                ))}
                            </select>
                            </div>
                            
                        </div>
                        <div className="flex flex-col gap-1 flex-wrap">
                            Description
                            <textarea  className="bg-primary outline-none border border-primary focus:border-b-gray-300" placeholder="Write the description of Material here....."></textarea>
                        </div>

                        <div name='value' className="flex gap-2 flex-wrap">
                        <div className="flex flex-col gap-1">
                            Pack Quantity
                            <input type="number" className="bg-primary outline-none border border-primary focus:border-b-gray-300" placeholder="1.000"/>
                        </div>

                        </div>
                        <div className="flex justify-end  gap-2 pt-5">
                                <button className="bg-green-500 py-2 px-5 rounded-full hover:bg-primary cursor-pointer" onClick={() => console.log("salvo")}>Save</button>
                                <button className="bg-red-500 py-2 px-5 rounded-full hover:bg-primary cursor-pointer" onClick={()=> navigate(-1)}>Return</button>
                        </div>

                    </div>



                    </div>
                </div>
        
        </>
    )
}

export default Material


