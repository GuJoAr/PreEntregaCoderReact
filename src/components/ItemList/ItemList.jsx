import ItemCard from "../Item/Item";


const ItemList = ({productos}) => {
    return (
        <section className="list_container">
            <h1 className="list_title">Productos</h1>
            <div className="list_item">
                {productos.map((item) => <ItemCard key={item.id} item={item}/>)}
            </div>
        </section>
    );
};

export default ItemList;