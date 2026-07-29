import { Outlet } from "react-router-dom";
import Sidebar from "../../components/_sidebar";


export default function LogedLayout(){
    return(
        <>  

        <div className="flex bg-primary">
            <Sidebar/>
            
            <div className="content flex flex-col flex-auto p-4 gap-2">
                <Outlet/>
            </div>    
        </div>
        
        </>
    )
}