import { RiDatabase2Fill, RiDashboardFill,RiBox3Fill  , RiStackFill, RiClipboardFill, RiContractLeftFill,RiExpandRightFill          }  from '@remixicon/react'
import { useState } from 'react'
function Sidebar(){

    const [open, setOpen] = useState(false)
    console.log(open)
    return(
        <>
        <div className={`h-screen w-screen md:w-2/4 lg:w-1/4 bg-secondary pt-30 pl-5 relative ${!open? 'hidden' : ''}`}>
        <div className='absolute top-2 right-2 hover:bg-primary rounded-full p-2' onClick={() => {
            setOpen(open ? false : true)
        }}>
            <RiContractLeftFill color="rgba(255,255,255,1)"/>
        </div>
           <div className="flex flex-col items-center justify-start h-full gap-20 text-white">
             <div className="flex gap-1 ">
                <RiDatabase2Fill color="rgba(255,255,255,1)" /> 
                    Marca
            </div>
            <div className="w-full h-50 flex flex-col gap-1">
                <div className="  hover:bg-primary rounded-l-full flex justify-center items-center flex-auto gap-2">
                    <RiDashboardFill color="rgba(255,255,255,1)" /> Dashboard 
                </div>
                <div className="  hover:bg-primary rounded-l-full flex justify-center items-center  flex-auto gap-2">
                    <RiBox3Fill  color="rgba(255,255,255,1)" /> Products
                </div>
                <div className="  hover:bg-primary rounded-l-full flex justify-center items-center  flex-auto gap-2">
                    <RiStackFill   color="rgba(255,255,255,1)" /> Materials
                </div>
                <div className="  hover:bg-primary rounded-l-full flex justify-center items-center  flex-auto gap-2">
                    <RiClipboardFill  color="rgba(255,255,255,1)" /> Technicals Sheet
                </div>
                
            </div>
           </div>
        </div>



         <div className={`h-screen w-1/12 md:w-1/20 bg-secondary pt-30   ${open? 'hidden' : ''}`}>
           <div className="flex flex-col items-center justify-start h-full gap-20 text-white">
             <div className="flex gap-1 ">
                <RiDatabase2Fill color="rgba(255,255,255,1)" /> 
            </div>
            <div className="w-full h-50 flex flex-col gap-1">
                <div className="  hover:bg-primary rounded-l-full flex justify-center items-center flex-auto gap-2">
                    <RiDashboardFill color="rgba(255,255,255,1)" />
                </div>
                <div className="  hover:bg-primary rounded-l-full flex justify-center items-center  flex-auto gap-2">
                    <RiBox3Fill  color="rgba(255,255,255,1)" /> 
                </div>
                <div className="  hover:bg-primary rounded-l-full flex justify-center items-center  flex-auto gap-2">
                    <RiStackFill   color="rgba(255,255,255,1)" /> 
                </div>
                <div className="  hover:bg-primary rounded-l-full flex justify-center items-center  flex-auto gap-2">
                    <RiClipboardFill  color="rgba(255,255,255,1)" /> 
                </div>
                
            </div>

            <div className="w-full h-50 flex flex-col gap-1">
                <div className="  hover:bg-primary rounded-l-full flex justify-center items-center flex-auto gap-2"
                onClick={() => {
            setOpen(open ? false : true)
        }}>
                    <RiExpandRightFill   color="rgba(255,255,255,1)" />
                </div>
                
            </div>
           </div>
        </div>
        </>
    )
}


export default Sidebar