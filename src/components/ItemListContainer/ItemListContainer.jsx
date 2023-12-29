import ItemList from "../ItemList/ItemList"
import useProductos from "../../hooks/useProductos"
import Loader from "../Loader/Loader"


const ItemListContainer = (  ) => {

    const {productos, titulo, loading} = useProductos()

    return (
        <div>
            {loading ? (
                <Loader />
                ) : (
                    <ItemList productos={productos} titulo={titulo} />
                )}
        </div>
        
    )
}

export default ItemListContainer