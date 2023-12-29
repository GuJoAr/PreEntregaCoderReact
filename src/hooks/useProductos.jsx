import { useState, useEffect } from "react"
import { pedirDatos } from "../utils/utilidades"
import { useParams } from "react-router-dom"


const useProductos = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const [titulo, setTitulo] = useState("Productos")
    const {categoria}  = useParams()

    useEffect(() => {
        setLoading(true)
        pedirDatos(categoria)
            .then((data) => {
                const items = categoria 
                                ? data.filter(prod => prod.categoria === categoria)
                                : data
                if (!categoria) {
                    setTitulo("Productos");
                } else {
                    setTitulo(categoria);
                }
                setProductos(items)
                
            })
            .finally(() => setLoading( false ))
    }, [categoria])

    return {productos, titulo, loading}
}

export default useProductos