import ItemCard from "../ItemCard/ItemCard";
import { toCapital } from "../../utils/toCapital";


const ItemList = ({productos, titulo}) => {
    return (
        <section className="list_container">
            <h1 className="list_title">{toCapital(titulo)}</h1>
            <div className="list_item">
                {productos.map((item) => <ItemCard key={item.id} item={item}/>)}
            </div>
        </section>
    );
};

export default ItemList;