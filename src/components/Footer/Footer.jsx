import { IoHomeOutline } from "react-icons/io5";
import { FiPhone, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {

    return (
        <footer className="bg-gray-300 mx-8 mt-8 h-56">
            <div className="grid grid-cols-3 gap-4 w-full">
                <div className="ml-3">
                    <h4 className="mb-6 pt-3 text-blue-700 font-bold text-3xl">Nosotros</h4>
                    <hr className="mb-3 bg-stone-600 h-0.5"></hr>
                    <p className="font-medium text-lg">¡Bienvenidos a Computer Store! Especialistas en notebooks, estamos comprometidos con ofrecerte propuestas innovadoras y equipos de calidad. Descubre con nosotros tu compañero tecnológico ideal. ¡Únete a esta emocionante travesía hacia tu nueva notebook perfecta!
                    </p>
                </div>
                <div className="ml-3">
                    <h4 className="mb-6 pt-3 text-blue-700 font-bold text-3xl">Productos</h4>
                    <hr className="mb-3 bg-stone-600 h-0.5"></hr>
                    <p>
                        <Link to="/productos/notebooks" className="font-medium text-lg">-Notebooks</Link>
                    </p>
                    <p>
                        <Link to="/productos/mothers" className="font-medium text-lg">-Mothers</Link>
                    </p>
                </div>
                <div className="ml-3">
                    <h4 className="mb-6 pt-3 text-blue-700 font-bold text-3xl">Contacto</h4>
                    <hr className="mb-3 bg-stone-600 h-0.5"></hr>
                    <p className="font-medium text-lg flex items-center gap-2">
                        <IoHomeOutline />Calle Falsa 123 Buenos Aires Argentina.
                    </p>
                    <p className="font-medium text-lg flex items-center gap-2">
                        <FiPhone />(123)15-123-456
                    </p>
                    <p className="font-medium text-lg flex items-center gap-2">
                        <FaWhatsapp />(123)15-123-456
                    </p>
                    <p className="font-medium text-lg flex items-center gap-2">
                        <FiMail />computer@store.com
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer