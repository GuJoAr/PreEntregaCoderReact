import CartWidget from "../CartWidget/CartWidget"
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom"
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

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
    const { user, logout } = useContext(UserContext)
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
            {user.logged && <div className="navbar__login container">
                <p className="text-black">{user.email}</p>
                <button className="buton_login" onClick={logout}>Cerrar sesión</button>
            </div>}
        </header>
    )
}

export default Navbar
