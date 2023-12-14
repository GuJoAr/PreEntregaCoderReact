// import { Link } from "react-router-dom"


const ItemDetail = ({ item }) => {

    return (
        <article className="item">
            <img src={item.img} alt={item.name} />
            <h3 className="item_title">{item.name}</h3>
            <p className="item_descrip">{item.description}</p>
            <p className="item_price">Precio: ${item.price}</p>
            <button className="link_buton" >Agregar al Carrito</button>
        </article>
    );
};

export default ItemDetail;

