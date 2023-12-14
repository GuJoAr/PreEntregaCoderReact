import Item from "../Item/Item";
import { toCapital } from "../../utils/toCapital";


const ItemList = ({productos, titulo}) => {
    return (
        <section className="list_container">
            <h1 className="list_title">{toCapital(titulo)}</h1>
            <div className="list_item">
                {productos.map((item) => <Item key={item.id} item={item}/>)}
            </div>
        </section>
    );
};

export default ItemList;