import { RiDatabase2Fill, RiDashboardFill,RiBox3Fill  , RiStackFill, RiClipboardFill, RiContractLeftFill,RiExpandRightFill          }  from '@remixicon/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Sidebar(){

    const [open, setOpen] = useState(false)
    const navigate = useNavigate()


    return(
        <>
        <div className={` ${!open? 'h-screen w-1/12 md:w-1/20 bg-secondary pt-30' : 'h-screen w-screen md:w-2/4 lg:w-1/4 bg-secondary pt-30 pl-5 relative cursor-pointer'}`}>
           <div className="flex flex-col items-center justify-start h-full gap-20 text-white">
             <div className="flex gap-1 ">
                <RiDatabase2Fill color="rgba(255,255,255,1)" /> 
                    {`${open?'Marca' :''}`}
            </div>
            <div className={`${!open? 'w-full h-50 flex flex-col gap-1' : 'w-full h-50 flex flex-col gap-1' }`}>
                <div title="Dashboard"  onClick={() => navigate('/home')} className="  hover:bg-primary rounded-l-full flex justify-center items-center flex-auto cursor-pointer gap-2">
                    <RiDashboardFill color="rgba(255,255,255,1)" /> {`${open?'Dashboard' :''}`}
                </div>
                <div title="Products"  onClick={() => navigate('/products')} className="  hover:bg-primary rounded-l-full flex justify-center items-center  flex-auto cursor-pointer gap-2">
                    <RiBox3Fill  color="rgba(255,255,255,1)" /> {`${open?'Products' :''}`}
                </div>
                <div title="Materials"  onClick={() => navigate('/materials')} className="  hover:bg-primary rounded-l-full flex justify-center items-center  flex-auto cursor-pointer gap-2">
                    <RiStackFill   color="rgba(255,255,255,1)" /> {`${open?'Materials' :''}`}
                </div>
                <div title="Technicals Sheets"  onClick={() => navigate('/sheets')} className="  hover:bg-primary rounded-l-full flex justify-center items-center  flex-auto cursor-pointer gap-2">
                    <RiClipboardFill  color="rgba(255,255,255,1)" /> {`${open?'Technicals Sheet' :''}`}
                </div>
                
                
            </div>
            
                <div title={`${open ? 'contract' : 'Expand'}`} className="w-full h-50 flex flex-col gap-1">
                    <div className="  hover:bg-primary rounded-l-full flex justify-center items-center flex-auto cursor-pointer gap-2"
                    onClick={() => {
                setOpen(open ? false : true)
                    }}>
                        {!open? <RiExpandRightFill color="rgba(255,255,255,1)" /> : <RiContractLeftFill color="rgba(255,255,255,1)" />}
                    </div>
                    
                </div>    
 
           </div>
        </div>



         
        </>
    )
}


export default Sidebar