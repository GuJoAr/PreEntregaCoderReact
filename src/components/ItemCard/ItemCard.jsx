import { Link } from "react-router-dom";

const ItemCard = ({item}) => {

    return (
        <article className="item">
            <img src={item.img} alt={item.name} />
            <h3 className="item_title">{item.name}</h3>
            <p className="item_descrip">{item.description}</p>
            <p className="item_price">Precio: ${item.price}</p>
            { item.stock <= 10 && <p className="font-bold text-red-500">Quedan sólo {item.stock} unidades!</p> }
            <Link className="link_buton" to={`/item/${item.id}`}>VER MAS</Link>
        </article>
    );
};

export default ItemCard;