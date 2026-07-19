import React, { useState } from "react";
import { RiSearchLine,RiAddLine, RiImageAddFill,RiDeleteBinFill,RiPencilFill   } from "@remixicon/react";
import Sidebar from "../../components/_sidebar";


function Sheet(){
    return (
        <>
            <div className="flex flex-auto bg-primary">
                <Sidebar/>
                <div className="content flex flex-col flex-auto p-4">
                    <div className="w-full  text-white flex flex-col ">
                        <h1 className="text-3xl ">Technical Sheet</h1>
                        <div className="flex flex-1">
                            <select placeholder="Cheese-cake" className=" flex-auto p-2 outline-none bg-secondary border border-primary focus:border-b-gray-300 rounded-tl-2xl">
                            <option>dasdljaklsdjklasjdklajsdklajsdkas</option>
                            <option>dasdljaklsdjklasjdklajsdklajsdkas</option>
                            <option>dasdljaklsdjklasjdklajsdklajsdkas</option>
                            </select>
                        <button className="  flex min-w-xs items-center justify-center hover:bg-secondary bg-green-500 rounded-tr-full cursor-pointer"><RiSearchLine color="rgba(255,255,255,1) " /></button>

                        </div>
                    </div>
                    <div className="w-full h-full flex flex-wrap gap-2 bg-secondary rounded-b-2xl p-10 text-white">
                        
                       
                        <div className="flex flex-col flex-auto justify-center gap-2">
                        
                        <div className="flex gap-2 ">
                            
                        <div className="flex flex-col flex-4 gap-1">
                            Material
                            <select className="bg-primary outline-none border border-primary focus:border-b-gray-300" >
                                <option>material 1</option>
                                <option>material 2</option>
                                <option>material 3</option>
                            </select>
                            </div>

                        <div className="flex flex-col flex-1 gap-1">
                            Used Quantity
                            <input type="number" className=" bg-primary outline-none border border-primary focus:border-b-gray-300" placeholder="1.000"/>
                        </div>
                        <div className="flex flex-col flex-1 gap-1">
                            <br />
                            <button className=" flex items-center justify-center hover:bg-primary bg-green-500 rounded-full cursor-pointer">Insert</button>
                        </div>
                        

                        </div>
                        <div className="w-full h-full bg-primary flex flex-col">
                            <table className="w-full text-center h-1/12">
                                <tr className="border-2 border-primary bg-secondary">
                                    <th>Material</th>
                                    <th>Quantity</th>
                                    <th>Coust</th>
                                    <th>Actions</th>
                                </tr>
                                <tr className="border-b border-b-secondary ">
                                    <td>Material 1</td>
                                    <td>0.800</td>
                                    <td>10.00</td>
                                    <td className="flex justify-center gap-2">
                                            <button className="cursor-pointer"><RiPencilFill color="rgba(159,207,248,1)" /></button>
                                            <button className="cursor-pointer"><RiDeleteBinFill color="rgba(233,10,10,1)" /></button>
                                    </td>
                                </tr>
                                 <tr className="border-b border-b-secondary">
                                    <td>Material 2</td>
                                    <td>10.00</td>
                                    <td>0.800</td>
                                    <td className="flex justify-center gap-2">
                                        <button className="cursor-pointer"><RiPencilFill color="rgba(159,207,248,1)" /></button>
                                        <button className="cursor-pointer"><RiDeleteBinFill color="rgba(233,10,10,1)" /></button>
                                    </td>
                                </tr>
                                
                            </table>
                        </div>
                            <div className="flex justify-end gap-5">
                                <div>
                                    Coust Total: 10
                                </div>
                                <div>
                                    CMV: 10%
                                </div>
                                <div>
                                    CMV External: 10%
                                </div>

                            </div>

                        <div className="flex justify-end  gap-2 pt-5">
                                <button className="bg-green-500 py-2 px-5 rounded-full hover:bg-primary cursor-pointer">Salvar</button>
                                <button className="bg-red-500 py-2 px-5 rounded-full hover:bg-primary cursor-pointer">Voltar</button>
                        </div>

                    </div>



                    </div>
                </div>
            </div>
        </>
    )
}

export default Sheet


