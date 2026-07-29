import React, { useState, useEffect } from "react";
import { RiSearchLine,RiAddLine   } from "@remixicon/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Sheets(){
    const [search, setSearch] = useState({
        arg: "",
        
    });
    const navigate = useNavigate()

    const [products, setProducts] = useState([]);
    const [listProd , setListProd] = useState([])

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/products/list/")
            .then(response => setProducts(response.data))
            .catch(err => console.log("Erro ao buscar dados:", err));
    }, []);


    console.log(listProd)
    return (
        <>
                    <div className="w-full h-2/12 text-white flex flex-col gap-3">
                        <h1 className="text-3xl ">Technical Sheets</h1>
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
                            <div className="flex flex-auto rounded-full items-center justify-center ml-1 p-2 bg-green-500 cursor-pointer hover:bg-green-200" onClick={()=> navigate('/products/new')}>+Novo</div>
                        
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
                                <th>VALUE</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                products.map((product, index) => (
                                    <tr className={`text-center cursor-pointer  hover:border-b hover:border-amber-50 ${index % 2 === 0 ? 'bg-primary' : 'bg-secondary'}`} 
                                        key={product.id}  key={product.id} onClick={
                                    () => console.log("apertado")
                                    } >
                                        <td>{product.id}</td>
                                        <td>{product.name_internal}</td>
                                         <td>
                                            {product.description.length > 30
                                            ? `${product.description.slice(0, 30)}...`
                                            : product.description}
                                        </td>
                                        <td>R${product.sale_price_internal}</td>                                    
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

export default Sheets;