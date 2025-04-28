import Title from '../Title/Title'
import fondoContact from '../../../../assets/image/contacto2.avif'
const Contact = () => {
    return (
        <>
            <Title title='Contáctanos'/>
            <section id="contacts" className='scroll-mt-40 flex mb:0 sm:mb-10 justify-end items-center relative px-5 pt-0 pb-10 sm:p-10 w-full'>
                <div className=' flex items-center h-72 sm:h-96 lg:w-full w-full xl:w-1/2 rounded-2xl  xl:absolute left-36' style={{background:`url(${fondoContact})`}}>
                    <div className='flex justify-center items-center flex-col gap-2 sm:w-2/3 px-5 sm:pl-5'>
                        <h2 className='text-2xl sm:text-4xl text-pink-600 font-bold'>Suscribete...</h2>
                        <input className='w-full px-5 py-2  text-10 sm:text-sm rounded-sm  placeholder:text-12 sm:placeholder:text-xs' type='text' placeholder='Ingrese su Correo Electronico'/>
                        <p className='w-2/3  text-12 sm:text-sm text-center text-gray-600'>Dejanos su correo electronico para acceder a nuestras Promociones y Descuentos</p>
                        <button className='bg-pink-600 text-white py-3 px-8 rounded-sm cursor-pointer font-bold hover:bg-blue-500'>Enviar</button>
                    </div>

                </div>
                <img className='hidden    xl:block   h-96 mr-24 rounded-2xl' src='https://img.freepik.com/fotos-premium/feliz-bastante-joven-mujer-morena-caucasica-senalar-dedo-pancarta-espacio-blanco-palabras_116547-53400.jpg'/>
            </section>
        </>
    ) 
}

export default Contact
