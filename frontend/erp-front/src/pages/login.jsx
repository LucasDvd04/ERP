import React from 'react';
import { RiDatabase2Fill }  from '@remixicon/react'

import '../App.css'
import Sidebar from '../components/_sidebar';

function Login(){
    return(
        <>
            <div className='h-screen w-screen flex flex-col justify-center items-center gap-8'>
                <div className='flex flex-col items-center'>
                        <RiDatabase2Fill size={60}/>
                        <h1 className='text-3xl text-center'> TecnoERP</h1>
                    </div>
                <div>
                    <h1 className='text-2xl text-center'>Bem-Vindo</h1>
                    <h1 className='text-xs text-gray-500 text-center'>Faça login para acessar o sistema</h1>
                </div>
                
                <div className='flex flex-col gap-5 '>
                    <div className='flex '>
                        <input type="text"  placeholder='Name' className='border-b border-b-gray-300 outline-none text-center focus:border-b-primary'/>
                    </div>
                    <div >
                        <input type="password" placeholder='Password' className='border-b border-b-gray-300 outline-none text-center  focus:border-b-primary'/>
                    </div> 
                    <div>
                        <p className='text-xs text-gray-300 text-end'>Esqueceu a senha?</p>
                    </div>
                        <button className='flex p-1 items-center justify-center bg-secondary text-white  rounded-full hover:bg-primary'>Entrar</button>
                          
                        
                </div>
            </div>
        </>
    )
}


export default Login;