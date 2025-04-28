import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import floresRojas  from '../../../../assets/image/maxresdefault.jpg'
import floresAmarillas  from '../../../../assets/image/Flores-preservadas-1210x423.jpg'
import floresAmarillas2  from '../../../../assets/image/carrusel.jpg'
import floresAmarillas3  from '../../../../assets/image/carrusel1.jpg'

const Hero = () => {

    const [index, setIndex] = useState(0);
    
    const images = [
    {
        src: floresAmarillas2,
        title: "Celebra con estilo",
        subtitle: "Donde el estilo florece, la celebración comienza."
    },
    {
        src: floresRojas,
        title: "Detalles que hablan por ti",
        subtitle: "Cada detalle cuenta, cada gesto habla."
    },
    {
        src: floresAmarillas3,
        title: "Recuerdos que florecen",
        subtitle: "Flores que guardan recuerdos."
    },
    {
        src: floresAmarillas,
        title: "Decoración con estilo y amor",
        subtitle: "Estilo y amor en cada detalle."
    }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 4000);
    
        return () => clearInterval(timer);
    }, []);

    return (
    <div  className="scroll-mt-20 relative h-[50vh] sm:h-[90vh] w-full overflow-hidden bg-gray-500">
        <AnimatePresence>
        <motion.div
            key={images[index].src}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}  
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0"
        >
            <img
            src={images[index].src}
            alt={images[index].title}
            className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center">
                <h1 className="text-3xl sm:text-5xl font-bold mb-4">{images[index].title.toUpperCase()}</h1>  
                <p className="text-md sm:text-xl">{images[index].subtitle}</p>
            </div>
        </motion.div>
        </AnimatePresence>
    </div>
    )
    }

export default Hero  
