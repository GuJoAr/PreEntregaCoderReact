import ItemList from "../ItemList/ItemList"
// import useProductos from "../../hooks/useProductos"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { pedirDatos } from "../../utils/utilidades"


const ItemListContainer = (  ) => {
    const [productos, setProductos] = useState([])
    const {categoria}  = useParams()
    // console.log(categoriaId)

    useEffect(() => {
        pedirDatos()
            .then((data) => {
                const items = categoria 
                                ? data.filter(prod => prod.categoria === categoria)
                                : data
                setProductos(items)
            })
    }, [categoria])

    // const productos = useProductos()

    return (
        <div>
            <ItemList productos={productos}/>
        </div>
        
    )
}

export default ItemListContainer