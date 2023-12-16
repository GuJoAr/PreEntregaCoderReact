import ItemList from "../ItemList/ItemList"
import useProductos from "../../hooks/useProductos"


const ItemListContainer = (  ) => {

    const {productos, titulo} = useProductos()

    return (
        <div>
            <ItemList productos={productos} titulo={titulo}/>
        </div>
        
    )
}

export default ItemListContainer