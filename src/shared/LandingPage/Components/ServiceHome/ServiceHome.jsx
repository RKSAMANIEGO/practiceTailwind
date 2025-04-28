import { ArrowRightOutlined } from "@ant-design/icons"
import Title from '../Title/Title'
import Options from '../Options/Options'
import RosasEternas from '../../../../assets/image/426633951_122107230530203149_2896847044547583428_n.png';
import Chocolate from '../../../../assets/image/detalles.jpg'
import Decoracion from '../../../../assets/image/decoracion.webp'
import Otros from '../../../../assets/image/otrosx.webp'
import { useNavigate } from "react-router-dom";
const categorieService= [
    {
        id:1,
        categorie:"Especiales",
        title:"Rosas Eternas",
        description:`Regala elegancia que dura toda la vida.\n Con nuestras Rosas de Lazos Satín, cada celebración se vuelve única. Perfectas para aniversarios, bodas o simplemente para decir “te quiero” de una manera inolvidable.`,
        image:RosasEternas
    },
    {
        id:2,
        categorie:"Personalizado",
        title:"Detalles Personalizados",
        description:"Haz cada momento más dulce y especial. Desayunos y regalos de dulces personalizados para convertir cualquier ocasión en una celebración única.Perfectos para sorprender a esa persona especial.",
        image:Chocolate
    },    
    {
        id:3,
        categorie:"Unicos",
        title:"Decoraciones",
        description:"Transforma cada espacio con estilo. Con nuestras decoraciones personalizadas, convierte cualquier ocasión en una celebración única llena de elegancia y detalle.",
        image:Decoracion
    },
    {
        id:4,
        categorie:"Dias Especiales",
        title:"Promociones",
        description:"Celebra con promociones irresistibles. Aprovecha nuestras ofertas en rosas eternas, detalles personalizados y decoraciones para hacer de cualquier ocasión una celebración inolvidable.",
        image:Otros
    }
] 

const ServiceHome = () => {

    const navigate = useNavigate();

    const handlerProduct=(title)=>{
        navigate("/products");
        
        setTimeout(()=>{
            const element = document.getElementById(`${title}`);
            element && element.scrollIntoView({behavior:"smooth"});
        },1000)


    }
    return (
        <>
        <Options/>
        <Title title='Servicios'/>

        <div id="service" className=" scroll-mt-40 flex flex-wrap gap-5 justify-center sm:justify-between p-0 sm:p-10">
            {categorieService.map(service => (

            <section key={service.id} className=" group shadow-lg  shadow-slate-300 border-none  w-72 rounded-2xl hover:shadow-md  hover:shadow-gray-400">
                <div className="overflow-hidden rounded-t-2xl h-40">
                    <img src={service.image} alt={service.categorie} className="w-full h-full object-cover transition-all duration-500 ease-in-out rounded-t-2xl cursor-pointer group-hover:scale-110"/>
                </div>
                <section className="flex flex-col gap:0 sm:gap-2 p-5">
                    <h4 className="text-10 sm:text-xs text-center bg-pink-100  text-pink-700 font-semibold p-1  rounded-md w-1/2">{service.categorie}</h4>
                    <h3 className="font-bold cursor-pointer hover:text-pink-500 ">{service.title}</h3>
                    <p className="text-12 sm:text-xs">{service.description}</p>
                    <label onClick={()=> handlerProduct(service.title.toLowerCase())} className="flex items-center justify-between font-bold cursor-pointer text-pink-500  hover:text-blue-500 mt-0 sm:mt-8"><a href={`#${service.title.toLowerCase()}`}> Mas <ArrowRightOutlined  className="transition-all duration-500 ease-in-out group-hover:translate-x-2"/></a></label>
                </section>
            </section>
                

            ))}
        </div>
        </>
    )
}

export default ServiceHome
