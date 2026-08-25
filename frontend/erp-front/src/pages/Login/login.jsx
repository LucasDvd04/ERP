import React, { useEffect, useState } from 'react';
import { RiDatabase2Fill }  from '@remixicon/react'

import '../../App.css'
import authApi from '../../services/api';
import axios from 'axios';
import { replace, useNavigate } from 'react-router-dom';

function Login(){

    const navigate = useNavigate();


    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })

    
    useEffect(
        () => {
            const loged = localStorage.getItem("@access")
            if(loged){
                navigate('/home', {replace: true})
            }
        },[]
    )


    const handleSubmit = async (e) => {
        e.preventDefault();
        const success = await logar(credentials);
        if (success) {
            console.log("Redirecionando...");
            // navigate("/home", { replace: true });
            window.location.reload();
        }
    };

    const logar = async (data) => {
        if (!data.username || !data.password) {
            alert("Preencha usuário e senha");
            return false;
        }

        try {
            const response = await authApi.post("accounts/token/", data);

            localStorage.setItem("@access", response.data.access);
            localStorage.setItem("@refresh", response.data.refresh);

            return true;
        } catch (err) {
            if (err.response?.status === 401) {
                document.getElementById("err").innerHTML =
                    "<p>User or Password not found</p>";
            }

            return false;
        }
    };

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
                
                <form className='flex flex-col gap-5 ' onSubmit={handleSubmit}>
                    <div className='flex '>
                        <input type="text"  placeholder='Username' className='border-b border-b-gray-300 outline-none text-center focus:border-b-primary'
                        onChange={(e) => setCredentials({
                            ...credentials, username: e.target.value
                        })}/>
                    </div>
                    <div >
                        <input type="password" autoComplete='current_password' placeholder='Password' className='border-b border-b-gray-300 outline-none text-center  focus:border-b-primary'
                        onChange={(e) => setCredentials({
                            ...credentials, password: e.target.value
                        })}/>
                       
                    <div>
                        <p className='text-xs text-gray-300 text-end'>Esqueceu a senha?</p>
                    </div>

                    </div> 
                        <div id='err' className='text-xs text-red-300 text-center'>
                            
                        </div>
                        <button className='flex p-1 items-center justify-center bg-secondary text-white  rounded-full hover:bg-primary'

                        >Entrar</button>
                          
                        
                </form>
            </div>
        </>
    )
}


export default Login;