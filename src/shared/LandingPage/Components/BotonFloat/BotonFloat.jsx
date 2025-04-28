import { WhatsAppOutlined } from "@ant-design/icons"
import { Tooltip } from "antd"

const BotonFloat = () => {
    
    const handlerShooping=()=>{
        const url =`https://wa.me/51922490068?text=%C2%A1Hola!%20%F0%9F%96%90%EF%B8%8F%0A%C2%A1Est%C3%A1s%20a%20un%20paso%20de%20completar%20tu%20compra!%20%F0%9F%8E%89%0A%0ASolo%20ind%C3%ADcanos%20qu%C3%A9%20producto%20te%20gustar%C3%ADa%20adquirir%20y%20te%20ayudamos%20a%20hacerlo%20r%C3%A1pido%20y%20f%C3%A1cil.%20Si%20tienes%20alguna%20duda,%20%C2%A1estamos%20a%20tu%20disposici%C3%B3n!%20%F0%9F%93%A8%0A%0A%C2%A1Esperamos%20tu%20respuesta!%20%F0%9F%98%8A`
        window.open(url,"_blank");
    }
    return (
        <Tooltip title="Realiza tu Compra Aqui" defaultOpen  mouseLeaveDelay="1s" placement="left">
            <WhatsAppOutlined onClick={handlerShooping} className="text-2xl fixed bottom-5 right-10 sm:text-4xl bg-green-700 z-50 rounded-full p-3 animate-bounce "/>
        </Tooltip>
        
)
}

export default BotonFloat
