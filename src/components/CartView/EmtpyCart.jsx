import { Link } from "react-router-dom"


const EmtpyCart = () => {

    return (
        <section className="cartView">
            <h2 className="text-4xl font-semibold">Tu carrito está vacío</h2>
            <hr />
            <p>Agrega algún producto a tu carrito</p>
            <button className="cart_buton">
                <Link to={"/"}>Volver</Link>
            </button>
        </section>
    )
}

export default EmtpyCart