import { RiSearchLine,RiAddLine, RiImageAddFill   } from "@remixicon/react";
import authApi from "../../services/api";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';


function ProductDetails() {
    const {id} = useParams();

    const navigate = useNavigate();
    const [ product, setProduct] = useState({
        id_external:'',
        name_internal:'',
        name_external:'',
        description:'',
        sale_price_internal:'',
        sale_price_external:'',
    })


    useEffect(() => {
        const fetchDetail = async () => {
            try {
                const response = await authApi.get(`products/detail/${id}/`);
                setProduct(
                    {        
                        id_external: response.data.id_external,
                        name_internal:response.data.name_internal,
                        name_external:response.data.name_external,
                        description:response.data.description,
                        sale_price_internal:response.data.sale_price_internal,
                        sale_price_external:response.data.sale_price_external,
                    }
                );
            } catch (err) {
                console.log(err);
            }
        };
        fetchDetail();
    }, [])

    console.log(product)

    async function saveProduct(){
        try {
            const response = await authApi.post('products/create/', product)
            const res = response.data

            if(res){
                alert('Dados salvos com sucesso.')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
                
                    <div className="w-full h-1/12 text-white flex flex-col ">
                        <h1 className="text-3xl ">New Product</h1>
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
                            ID External
                            <input type="text" className="bg-primary outline-none border border-primary focus:border-b-gray-300" placeholder="IFD123" value={product.id_external}
                            onChange={(e)=> setProduct({ ...product, id_external: e.target.value })}
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            Name Internal
                            <input type="text" className="bg-primary outline-none border border-primary focus:border-b-gray-300" placeholder="PORK COMPLETE" value={product.name_internal}
                            onChange={(e) => setProduct({ ...product, name_internal: e.target.value})}
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            Name External
                            <input type="text" className="bg-primary outline-none border border-primary focus:border-b-gray-300" placeholder="PORK WITH FRIES" value={product.name_external}
                            onChange={(e)=> setProduct({
                                ...product, name_external: e.target.value
                            })}/>
                        </div>
                        </div>

                        <div className="flex flex-col gap-1 flex-wrap">
                            Description
                            <textarea  className="bg-primary outline-none border border-primary focus:border-b-gray-300" placeholder="Write the description of product here....." value={product.description}
                            onChange={(e) => setProduct({
                                ...product, description: e.target.value
                            })}
                            ></textarea>
                        </div>

                        <div name='value' className="flex gap-2 flex-wrap">
                        <div className="flex flex-col gap-1">
                            Sale Internal
                            <input type="number" className="bg-primary outline-none border border-primary focus:border-b-gray-300" placeholder="00.00" value={product.sale_price_internal}
                            onChange={(e) => setProduct({
                                ...product, sale_price_internal: e.target.value
                            })}/>
                        </div>
                        <div className="flex flex-col gap-1">
                            Sale External
                            <input type="number" className="bg-primary outline-none border border-primary focus:border-b-gray-300" placeholder="00.00" value={product.sale_price_external}
                            onChange={(e) => setProduct({
                                ...product, sale_price_external: e.target.value
                            })}
                            />
                        </div>

                        </div>
                        <div className="flex justify-end  gap-2 pt-5">
                                <button className="bg-green-500 py-2 px-5 rounded-full hover:bg-primary cursor-pointer" onClick={saveProduct}>Salvar</button>
                                <button className="bg-red-500 py-2 px-5 rounded-full hover:bg-primary cursor-pointer" onClick={()=> navigate(-1)}>Voltar</button>
                        </div>

                    </div>



                    </div>

        </>
    
)

}

export default ProductDetails;