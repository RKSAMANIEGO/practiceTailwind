import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../core/hook/useAuth';

const Login = () => {
    const [form ,setForm]= useState({email:"",password:""});
    const navigate =useNavigate();
    const {authentication} = useAuth();

    //login
    const handlerInicioSesion = ()=>{
        if(form.email==="admin" && form.password==="admin123") {
            alert("Inicio de Session Successfull");
            authentication(form.email);
            navigate("/panel");
            cleanForm();
        } else alert("Acceso Denegado¡ Credenciales Incorrectas...");
    }
    
    //get input form
    const getInputForm = (e)=> setForm(prevData => ({ ...prevData, [e.target.name] : e.target.value }));
    
    //clean form
    const cleanForm =()=>setForm({email:"",password:""});
    
    return (
        <div className= "flex flex-col justify-center items-center h-svh bg-pink-400">
        <h1 className="text-white text-5xl text-center font-bold uppercase pt-8">Welcome to Web Ecommerce</h1>
        <h1 className="font-bold  text-blue-600 text-xl text-center pb-8">¡Hola Tailwind!</h1>
        <img className="" src="https://png.pngtree.com/png-clipart/20211116/original/pngtree-beauty-logo-png-image_6943898.png" width="150"/>
        <section className="flex flex-col items-center my-8  gap-5 w-full">
            <input type="text" name="email" value={form.email} onChange={getInputForm} placeholder="Ingrese Email" className="w-3/6 border border-pink-300 rounded-md px-3 py-3 text-sm"/>
            <input type="password" name="password" value={form.password} onChange={getInputForm} placeholder="Ingrese Password" className="w-3/6 border border-pink-300 rounded-md px-3 py-3 text-sm" />
            <button onClick={handlerInicioSesion} className="border bg-pink-500 text-white font-bold p-4 rounded-xl w-40 hover:bg-blue-600">Iniciar Session</button>
        </section>
        </div>
    )
}

export default Login
