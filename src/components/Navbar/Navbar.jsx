import CartWidget from "../CartWidget/CartWidget"
import logo from "../../assets/logo.png"

const Navbar = () => {
    return (
        <header className="header">
            <div className="container">
                <a href="/">
                    <img src={logo} alt="Logo"/>
                </a>
                <nav className="navbar">
                    <a className="navbar__link" href="#">Inicio</a>
                    <a className="navbar__link" href="#">Productos</a>
                    <a className="navbar__link" href="#">Contacto</a>
                </nav>
                <CartWidget/>
            </div>
        </header>
    )
}

export default Navbar