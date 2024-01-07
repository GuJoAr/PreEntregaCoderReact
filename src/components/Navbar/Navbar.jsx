import CartWidget from "../CartWidget/CartWidget"
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom"

const links = [
    {
        label: "Inicio",
        href: "/",
    },
    {
        label: "Notebooks",
        href: "/productos/notebooks",
    },
    {
        label: "Mothers",
        href: "/productos/mothers",
    },
    {
        label: "Contacto",
        href: "/contacto",
    }
];

const Navbar = () => {
    return (
        <header className="header">
            <div className="conteiner">
                <Link to="/">
                    <img src={logo} alt="Logo"/>
                </Link>
                <nav className="navbar">
                    {links.map((link) => (
                        <Link key={link.href} to={link.href} className="navbar__link">
                            {link.label}
                        </Link>
                    ))}
                </nav>
                <CartWidget/>
            </div>
        </header>
    )
}

export default Navbar
