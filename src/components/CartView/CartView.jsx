import { useContext } from "react"
import { FaRegTrashCan } from "react-icons/fa6";
import { CartContext } from "../../context/CartContext";
import { UserContext } from "../../context/UserContext";
import EmtpyCart from "./EmtpyCart";
import { Link } from "react-router-dom";



const CartView = () => {
    const { cart, totalCart, clearCart, removeItem } = useContext(CartContext)
    const { user } = useContext(UserContext)

    if (cart.length === 0) return <EmtpyCart />

    return (
        <section className="cartView">
            <p>Bienvenido: {user.usser}</p>
            <h2 className="text-4xl font-semibold">Tu Compra</h2>
            <ul>
                {
                    cart.map((item) => (
                        <li key={item.id} className="flex gap-3 border-b my-4">
                            <img src={item.img} alt={item.name} className="m-4 w-32 h-32"/>
                            <div>
                                <h3 className="text-2xl">{item.name}</h3>
                                <p className="text-2xl font-bold">$ {item.price * item.cantidad}</p>
                                <p>Cantidad: {item.cantidad}</p>
                                <button className="link_buton_remove" onClick={() => removeItem(item.id)}>
                                    <FaRegTrashCan />
                                </button>
                            </div>
                        </li>
                    ))
                }
            </ul>
            <hr className="mb-3 bg-stone-600 h-0.5 w-full"></hr>
            <h4 className="text-4xl font-semibold">TOTAL: ${totalCart()}</h4>
            <button className="cart_buton" onClick={clearCart}>Vaciar carrito</button>
            <button className="cart_buton" ><Link to="/checkout">Terminar mi compra</Link></button>
        </section>
    )
}

export default CartView