import { RiSearchLine } from "@remixicon/react";
import Sidebar from "../components/_sidebar";

function Products(){
    return (
        <>
            <div className="flex bg-primary">
                <Sidebar/>
                <div className="content flex flex-col flex-auto gap-4 p-4">
                    <div className="w-full h-2/12 text-white flex flex-col gap-3">
                        <h1 className="text-3xl ">Products</h1>
                        <div className="flex ">
                            <input type="text" placeholder="Cheese-cake" className="w-11/12 p-2 outline-none bg-secondary rounded-l-full" />
                            <button className=" w-1/12 flex items-center justify-center hover:bg-primary bg-secondary rounded-r-full"><RiSearchLine color="rgba(255,255,255,1) " /></button>
                        </div>
                    </div>
                    <div className="w-full h-full bg-secondary rounded-2xl p-2">
                        <div className="flex items-end justify-end">
                            <RiSearchLine/>
                            <RiSearchLine/>
                        </div>
                        <div className="w-full">
                            <table className="w-full">
                            <tr className=" ">
                                <th>ID</th>
                                <th>NAME</th>
                                <th>DESCRIPTION</th>
                                <th>VALUE</th>
                                <th>ACTIONS</th>
                            </tr>

                            <tr className="text-center">
                                <td>x</td>
                                <td>y</td>
                                <td>z</td>
                                <td>z</td>
                                <td>z</td>
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