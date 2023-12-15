// import { Link } from "react-router-dom"


const ItemDetail = ({ item }) => {
    console.log(item.img)
    return (
        <article className="itemDetail">
            <img src={item.img} alt={item.name} />
            <h3 className="itemDetail_title">{item.name}</h3>
            <p className="itemDetail_descrip">{item.description}</p>
            <p className="itemDetail_price">Precio: ${item.price}</p>
            <button className="link_buton" >Agregar al Carrito</button>
        </article>
    );
};

export default ItemDetail;

