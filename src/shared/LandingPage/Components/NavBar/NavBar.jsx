import { Link, useNavigate } from 'react-router-dom'
import logo from '../../../../assets/logo/logo3.jpg'
import { WhatsAppOutlined } from '@ant-design/icons'
const NavBar = () => {

    const navigate =useNavigate();

    const  handlerRedirect=(seccion)=>{
        navigate("/");

        setTimeout(()=>{
            const idService = document.getElementById(`${seccion}`);
            idService && idService.scrollIntoView({behavior:"smooth"});
        },100)

    }
    //CONTACTAME
    const handlerContact =()=>{
        const url =`https://wa.me/51922490068?text=%C2%A1Hola!%0AGracias%20por%20tu%20inter%C3%A9s.%20Si%20tienes%20dudas%20o%20quieres%20m%C3%A1s%20detalles%20sobre%20alg%C3%BAn%20producto,%20%C2%A1estoy%20aqu%C3%AD%20para%20ayudarte!%20Si%20ya%20est%C3%A1s%20listo%20para%20hacer%20tu%20pedido,%20solo%20confirma%20la%20cantidad%20y%20te%20env%C3%ADo%20los%20detalles%20para%20completar%20la%20compra.%0A%0A%C2%A1Quedo%20atenta%20a%20tu%20respuesta!%20%F0%9F%98%8A`
        window.open(url,"_blank");
    }

    return (         
        <nav className="flex items-center justify-between p-5 sm:px-10 bg-pink-500 text-white font-bold h-16 fixed right-0 left-0  top-0 z-10   ">
            <div className='w-12 h-12'><img src={logo} alt='logo' className='w-full h-12 rounded-full '/></div> 

            <ul className='hidden  sm:flex sm:items-center sm:justify-between w-6/12 py-4 m-5'>
                <li onClick={() => handlerRedirect("home")} className='transition-transform duration-500 ease-in-out hover:scale-150 cursor-pointer hover:translate-y-1'><a href='#home'>Inicio</a></li>
                <li onClick={()=> handlerRedirect("service")} className='transition-transform duration-500 ease-in-out hover:scale-150 cursor-pointer hover:translate-y-1'><a href='#service'>Servicios</a></li>
                <Link to="/products"> <li className='transition-transform duration-500 ease-in-out hover:scale-150 cursor-pointer hover:translate-y-1'>Productos</li></Link>
                <li onClick={()=>handlerRedirect("contacts")} className='transition-transform duration-500 ease-in-out hover:scale-150 cursor-pointer hover:translate-y-1'><a href='#contacto'>Contacto</a></li>
            </ul>

            <button onClick={handlerContact} type="button" className='bg-green-600 py-3 px-2 sm:px-4 text-12 sm:text-sm rounded-lg hover:bg-blue-500'><WhatsAppOutlined/> Contactanos</button>

            {/* MENU MOVILE*/}
            <input type="checkbox" id="menu-toggle" className="hidden peer" />
            <label htmlFor="menu-toggle" className="cursor-pointer text-xl sm:hidden z-50">
                <span className="peer-checked:hidden ">&#9776;</span>
                <span className="hidden peer-checked:inline">&#215;</span>
            </label>

            <div className="hidden peer-checked:flex flex-col items-center justify-center z-40 gap-10 w-full h-svh bg-pink-500 p-4 fixed top-0 left-0 sm:hidden">
                <p onClick={() => handlerRedirect("home")}> <a href="#home" className="py-2">Inicio</a></p>
                <p onClick={()=> handlerRedirect("service")}> <a href="#service" className="py-2">Servicios</a></p>
                <Link to="/products"><a href="#" className="py-2">Productos</a></Link>
                <p onClick={()=>handlerRedirect("contacts")}><a href="#contacto" className="py-2">Contacto</a></p>
            </div>
        </nav>   
        
    )
}

export default NavBar
