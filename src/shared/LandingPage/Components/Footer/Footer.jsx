import { ClockCircleOutlined, EnvironmentOutlined, FacebookOutlined, MailOutlined, PhoneOutlined, TikTokOutlined, WhatsAppOutlined } from "@ant-design/icons"
import logo from '../../../../assets/logo/logo3.jpg';
import BotonFloat from "../BotonFloat/BotonFloat";
import { useNavigate } from "react-router-dom";

const Footer = () => {

    const navigate = useNavigate()

    const handlerProducts =(title)=>{
        navigate("/products");

        setTimeout(()=>{
            const element = document.getElementById(title);
            element && element.scrollIntoView({behavior:"smooth"});
        },1000)

    }

    return (

        <div className="flex flex-col gap-0 py-5 items-center bg-pink-500 text-white w-full h-auto px-10 sm:py-14 relative  sm:flex-row sm:items-start ">
            <section className="flex flex-col gap-3 items-center justify-center sm:w-1/4">
                <img src={logo} alt="logo" className="w-24 h-24 rounded-full"/>
                <p className=" text-center text-xs  sm:text-md">En Flow&Deco encontrarás una cuidada selección de flores eternas, decoraciones elegantes y servicios personalizados diseñados para transformar cualquier espacio y momento.</p>
            </section>
            <section className="px-0 text-xs sm:w-1/4 sm:px-10 sm:text-lg">
                <h3 className="font-bold">Servicios</h3>
                <ul className="flex flex-col gap-2 cursor-pointer">
                    <li onClick={()=> handlerProducts("rosas eternas")} className="text-xs transition-all duration-500 ease-in-out hover:text-gray-300 hover:translate-x-8 sm:text-md"><a href="#rosas eternas"> Rosas Eternas </a></li>
                    <li onClick={()=> handlerProducts("detalles personalizados")} className="text-xs transition-all duration-500 ease-in-out hover:text-gray-300 hover:translate-x-8 sm:text-md"><a href="#detalles personalizados">Detalles Personalizados</a></li>
                    <li onClick={()=> handlerProducts("decoraciones")} className="text-xs transition-all duration-500 ease-in-out hover:text-gray-300 hover:translate-x-8 sm:text-md"><a href="#decoraciones">Decoración</a></li>
                    <li onClick={()=> handlerProducts("")} className="text-xs transition-all duration-500 ease-in-out hover:text-gray-300 hover:translate-x-8 sm:text-md">Otros</li>
                </ul>
            </section>
            <section className="px-0 text-xs sm:w-1/4 sm:px-10 sm:text-lg">
                <h3 className="font-bold">Contacto</h3>
                <ul className="flex flex-col gap-2">
                    <li className="text-xs sm:text-md"><EnvironmentOutlined className=" text-pink-300 "/> Lima Lima Ate</li>
                    <li className="text-xs sm:text-md"><PhoneOutlined className="text-pink-300"/> 922490068</li>
                    <li className="text-xs sm:text-md"><MailOutlined className="text-pink-300"/> prueba_xl@gmail.com</li>
                    <li className="text-xs sm:text-md"><ClockCircleOutlined className="text-pink-300"/> 9:00am - 6:00pm</li>
                </ul>
            </section>
            <section className=" px-0  text-xs sm:w-1/4 sm:px-10 sm:text-lg">
                <h3 className="font-bold">Siguenos en </h3>
                <span className="flex gap-4">
                <TikTokOutlined onClick={()=> window.open("https://www.tiktok.com/","_blank") } className="text-xl bg-black p-2 rounded-full cursor-pointer transition-all duration-500 ease-in-out hover:scale-125"/>
                <FacebookOutlined onClick={()=>window.open("https://es-la.facebook.com/login/device-based/regular/login/","_blank")} className="text-xl bg-blue-900 p-2 rounded-full cursor-pointer transition-all duration-500 ease-in-out hover:scale-125" />
                <WhatsAppOutlined onClick={()=>window.open("https://wa.link/kxi8sa","_blank")} className="text-xl bg-green-900 p-2 rounded-full cursor-pointer transition-all duration-500 ease-in-out hover:scale-125" />
                </span>

            </section>

            <BotonFloat/>
        </div>
    )
}

export default Footer
