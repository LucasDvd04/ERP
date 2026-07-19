import React, { useState } from "react";
import { RiSearchLine,RiAddLine   } from "@remixicon/react";
import Sidebar from "../../components/_sidebar";

function Products(){
    const [search, SetSearch] = useState({
        arg: "",
        
    });
  console.log(search)
    return (
        <>
            <div className="flex bg-primary">
                <Sidebar/>
                <div className="content flex flex-col flex-auto gap-4 p-4">
                    <div className="w-full h-2/12 text-white flex flex-col gap-3">
                        <h1 className="text-3xl ">Products</h1>
                        <div className="flex ">
                            <input type="text" placeholder="Cheese-cake" className="w-10/12 p-2 outline-none bg-secondary rounded-l-full" onChange={
                                (e) => SetSearch(
                                    {
                                        ...search,
                                        arg: e.target.value
                                        
                                    }
                                )
                            } />
                            <button className=" flex-auto flex items-center justify-center hover:bg-primary bg-secondary rounded-r-full cursor-pointer"><RiSearchLine color="rgba(255,255,255,1) " /></button>
                            <div className="flex flex-auto rounded-full items-center justify-center ml-1 p-2 bg-green-500 cursor-pointer hover:bg-green-200">+Novo</div>
                        
                        </div>
                    </div>
                    <div className="w-full h-full bg-secondary rounded-2xl p-2 text-white">

                        <div className="w-full">
                            <table className="w-full">
                            <tr className="" >
                                <th>ID</th>
                                <th>NAME</th>
                                <th>DESCRIPTION</th>
                                <th>VALUE</th>
                                <th>ACTIONS</th>
                            </tr>

                            <tr className="text-center cursor-pointer" onClick={
                                () => console.log("apertado")
                        } >
                                <td>123456789</td>
                                <td>Batata de Frango com Rucula</td>
                                <td>ovo BatataBatataBatataBatataBatata</td>
                                <td>1.000,00</td>
                                <td>Bisteca / Maminha</td>
                            </tr>
                        </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products;