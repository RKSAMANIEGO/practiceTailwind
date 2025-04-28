import { FileTextOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import imgPromotions from '../../../../../../assets/image/otrosx.webp'
import { dataProducts } from '../../../../../utils/dataProducts'
import styles from '../../Styles/StyleAnimation.module.css'
import { Image } from 'antd'
import { useEffect, useState } from 'react'
const HeaderProducts = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [currentImage, setCurrentImage] = useState('');
    const [widthPage,setWidthPage]=useState(window.innerWidth)

    const showModal = (src) => {
        setCurrentImage(src);
        setIsModalVisible(true);
    };

    const shoppinHandler=(producto)=>{
        console.log(producto);

        const url =`https://wa.me/51922490068?text=${encodeURIComponent(

            `¡Hola! 🖐️ Muchas gracias por tu interés en nuestros productos.

            Me gustaría solicitar  lo sgte:
            • 1  ${producto.name}  - S/${producto.price} soles
            
            Total: S/${producto.price} soles`
        )}`;

        window.open( url,"_blank");
    }

    useEffect(()=>{
        const handlerResizable = () => setWidthPage(window.innerWidth);

        window.addEventListener("resize",handlerResizable);

        return () => window.removeEventListener("resize",handlerResizable);

    },[])


    return (
        <div className={styles.animationProducts}>
            <div className='h-32  sm:h-56 md:h-80 lg:h-96  w-full sm:object-cover' style={{background:`url(${imgPromotions})`, backgroundPosition:"center" ,backgroundSize:"100%"} }></div>
            
            {/* CONTAINER CATEGORIA */} 
            <section className='flex flex-col h-full'>

                {/*PRODUCTOS POR CATEGORIA */}

                {dataProducts?.map(cat => (

                    <div id={cat.categorie} className='h-full m-2 sm:m-10 scroll-mt-20' key={cat.id}>

                        <h2 className='text-3xl font-bold text-pink-600 capitalize'>{cat.categorie}</h2>

                        {/*WRAPER PRODUCTOS POR CATEGORIA*/}
                        <div className='flex justify-evenly gap-5 sm:justify-evenly md:justify-around flex-wrap sm:gap-8 sm:flex-wrap '>
                            {cat.products.map(prod => (
                                    
                            <section className='group w-36 h-260   sm:w-72 sm:h-1/6 border border-gray-200 rounded-2xl  overflow-hidden hover:shadow-lg hover:shadow-pink-400' key={prod.id}>
                                <div className='overflow-hidden'>
                                    {/** <img className='w-72 h-60  rounded-t-2xl object-cover transition-all duration-300 ease-in-out  overflow-hidden cursor-pointer group-hover:scale-105' src={prod.image}/>*/} 
                                    <Image height={widthPage < 640 ? 120 : 300 }  width={widthPage < 640 ? 150 :300} src={prod.image} onClick={() => showModal(prod.image)} className='w-40 h-40 sm:w-72 sm:h-60  rounded-t-2xl object-cover transition-all duration-300 ease-in-out  overflow-hidden cursor-pointer group-hover:scale-105'/>
                                </div>
                                <div className='flex flex-col  px-2 sm:px-5  py-2 sm:py-4'>
                                    <h3 className='text-12 sm:text-lg font-bold group-hover:text-pink-600'>{prod.name.toUpperCase()}</h3>
                                    <p className='text-10 sm:ext-xs'>{prod.description}</p>
                                    {prod.discount > 0 ? 
                                        <label className='flex justify-between text-10 sm:text-xs font-bold'><s className='text-gray-500'>S/{(prod.price).toFixed(2)}</s> - <span className='text-10 sm:text-xs text-pink-500'>S/ {prod.price-(prod.price*(prod.discount/100))}</span></label>
                                    : 
                                        <label className='flex justify-between text-10 sm:text-xs font-bold text-pink-600'><span>Precio S/{(prod.price).toFixed(2)}</span></label>
                                    }
                                    {prod.image.includes("decoracion") ? 
                                    <button onClick={()=>shoppinHandler(prod)} className='mt-2 py-2 sm:py-2 px-5 sm:px-8 text-12 sm:text-xs font-bold rounded-md bg-pink-600 text-white hover:bg-blue-600'><FileTextOutlined  /> Cotizar</button>
                                    :
                                    <button onClick={()=>shoppinHandler(prod)} className='mt-2 py-2 sm:py-2 px-5 sm:px-8 text-12 sm:text-xs font-bold rounded-md bg-pink-600 text-white hover:bg-green-600'><ShoppingCartOutlined/> Comprar</button>
                                    }
                                </div>

                            </section>

                            ))}


                        </div>
                    </div>   


                ))}
            </section>
        
        </div>
    )
}

export default HeaderProducts
