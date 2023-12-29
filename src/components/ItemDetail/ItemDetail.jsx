import { useContext, useState } from "react";
import QuantitySelector from "./QuantitySelector";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";


const ItemDetail = ({ item }) => {
    const navigate = useNavigate()
    const [cantidad, setCantidad] = useState(1)
    const { addToCart, isInCart } = useContext(CartContext)

    const handleAgregar = () => {
        const itemToCart = {
        ...item,
        cantidad,
        }
        addToCart(itemToCart)
    }

    const handleVolver = () => {
        navigate(-1)
    }

    return (
        <article className="itemDetail">
            <img src={item.img} alt={item.name} />
            <h3 className="itemDetail_title">{item.name}</h3>
            <p className="itemDetail_descrip">{item.description}</p>
            <p className="itemDetail_price">Precio: ${item.price}</p>
            {
            isInCart( item.id )
                ? <button className="link_buton"><Link to="/cart">Terminar mi compra</Link></button>
                : <>
                    <QuantitySelector 
                        cantidad={cantidad}
                        stock={item.stock}
                        setCantidad={ setCantidad }
                    />          
                    <button onClick={handleAgregar} className="link_buton" >Agregar al Carrito</button>
                    </>
            }
            <button className="link_buton" onClick={handleVolver}>Ver mas productos</button>
        </article>
    );
};

export default ItemDetail;

