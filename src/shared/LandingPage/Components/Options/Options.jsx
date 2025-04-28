import { SafetyCertificateFilled, ShoppingFilled, TagFilled, TruckFilled } from "@ant-design/icons"


const Options = () => {
    return (
        <div className="text-xs flex  items-center sm:justify-center sm:w-full  py-3 sm:py-8 sm:text-md">
            <div className="w-full flex m-3 justify-between  sm:w-2/3 sm:m-0">
            <label className="text-12 leading-none flex flex-col items-center gap-1 sm:font-semibold text-center"> <ShoppingFilled className="text-md p-3 sm:text-lg text-pink-500 bg-pink-200 sm:p-3 rounded-full transition-transform duration-500 ease-in-out hover:-translate-y-2 cursor-pointer" />Productos Fiables</label>
            <label className="text-12 leading-none flex flex-col items-center gap-1 sm:font-semibold text-center"> <TruckFilled    className="text-md p-3 sm:text-lg text-pink-500 bg-pink-200 sm:p-3 rounded-full  transition-transform duration-500 ease-in-out hover:-translate-y-2 cursor-pointer"/>Envíos Gratis</label>
            <label className="text-12 leading-none flex flex-col items-center gap-1 sm:font-semibold text-center"><SafetyCertificateFilled className="text-md p-3 sm:text-lg text-pink-500 bg-pink-200 sm:p-3 rounded-full  transition-transform duration-500 ease-in-out hover:-translate-y-2 cursor-pointer"/> Garantía de calidad</label>
            <label className="text-12 leading-none flex flex-col items-center gap-1 sm:font-semibold text-center"><TagFilled className="text-md p-3 sm:text-lg text-pink-500 bg-pink-200 sm:p-3 rounded-full  transition-transform duration-500 ease-in-out hover:-translate-y-2 cursor-pointer"/>Atención Personalizada</label>
            </div>
        </div>
    )
}

export default Options
