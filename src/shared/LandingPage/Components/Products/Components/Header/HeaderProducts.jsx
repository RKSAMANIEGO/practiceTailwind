import { FileTextOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import imgPromotions from '../../../../../../assets/image/otrosx.webp'
import { dataProducts } from '../../../../../utils/dataProducts'
import styles from '../../Styles/StyleAnimation.module.css'
import { Image } from 'antd'
import { useState } from 'react'
const HeaderProducts = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [currentImage, setCurrentImage] = useState('');
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

    return (
        <div className={styles.animationProducts}>
            <div className='w-full object-' style={{background:`url(${imgPromotions})`, backgroundPosition:"center" ,backgroundSize:"100%", height:"90vh" } }></div>
            
            {/* CONTAINER CATEGORIA */} 
            <section className='flex flex-col h-full'>

                {/*PRODUCTOS POR CATEGORIA */}

                {dataProducts?.map(cat => (

                    <div id={cat.categorie} className='h-full m-10 scroll-mt-20' key={cat.id}>

                        <h2 className='text-3xl font-bold text-pink-600 capitalize'>{cat.categorie}</h2>

                        {/*WRAPER PRODUCTOS POR CATEGORIA*/}
                        <div className='flex gap-8 flex-wrap '>
                            {cat.products.map(prod => (
                                
                            <section className='group w-72 h-1/6 border border-gray-200 rounded-2xl  overflow-hidden hover:shadow-lg hover:shadow-pink-400' key={prod.id}>
                                <div className='overflow-hidden'>
                                    {/** <img className='w-72 h-60  rounded-t-2xl object-cover transition-all duration-300 ease-in-out  overflow-hidden cursor-pointer group-hover:scale-105' src={prod.image}/>*/} 
                                    <Image height={300}  width={300} src={prod.image} onClick={() => showModal(prod.image)} className='w-72 h-60  rounded-t-2xl object-cover transition-all duration-300 ease-in-out  overflow-hidden cursor-pointer group-hover:scale-105'/>
                                </div>
                            <div className='flex flex-col px-5 py-4'>
                                <h3 className='font-bold group-hover:text-pink-600'>{prod.name.toUpperCase()}</h3>
                                <p className='text-xs'>{prod.description}</p>
                                {prod.discount > 0 ? 
                                    <label className='flex justify-between text-xs font-bold'><s className='text-gray-500'>Antes S/{(prod.price).toFixed(2)}</s> <span className='text-pink-500'>Ahora S/ {prod.price-(prod.price*(prod.discount/100))}</span></label>
                                : 
                                    <label className='flex justify-between text-xs font-bold text-pink-600'><span>Precio S/{(prod.price).toFixed(2)}</span></label>
                                }
                                {prod.image.includes("decoracion") ? 
                                <button onClick={()=>shoppinHandler(prod)} className='mt-2 py-2 px-8 font-bold rounded-md bg-pink-600 text-white hover:bg-blue-600'><FileTextOutlined  /> Cotizar</button>
                                :
                                <button onClick={()=>shoppinHandler(prod)} className='mt-2 py-2 px-8 font-bold rounded-md bg-pink-600 text-white hover:bg-green-600'><ShoppingCartOutlined/> Comprar</button>
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
