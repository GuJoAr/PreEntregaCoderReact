import { IoHomeOutline } from "react-icons/io5"
import { FiPhone, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";

const Contacto = () => {

    return (
        <section className="contac">
            <h1>Contactanos</h1>
            <div className="contac_container">
                <h2>Sucursal</h2>
                <div className="contac_pri">
                    <div className="contac_sec font-medium text-lg flex items-center gap-2">
                        <IoHomeOutline />Direccion: Calle Falsa 123 Buenos Aires Argentina.
                    </div>
                    <div className="contac_sec font-medium text-lg flex items-center gap-2">
                        <FiPhone />Contacto: (0123) 456-7890
                    </div>
                    <div className="contac_sec font-medium text-lg flex items-center gap-2">
                        <FaWhatsapp />Whatsapp: (123)15-123-456
                    </div>
                    <div className="contac_sec font-medium text-lg flex items-center gap-2">
                        <FiMail />Email: computer@store.com
                    </div>
                    <div className="contac_sec font-medium text-lg flex items-center gap-2">
                        <IoMdTime />Horario: de 10 a 13hs. y de 17 a 20hs.
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contacto