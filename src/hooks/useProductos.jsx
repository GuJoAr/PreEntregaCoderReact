import { useState, useEffect } from "react"
import { pedirDatos } from "../utils/utilidades"
import { useParams } from "react-router-dom"



const useProductos = () => {
    const [productos, setProductos] = useState([])
    const [titulo, setTitulo] = useState("Productos")
    const {categoria}  = useParams()

    useEffect(() => {
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
    }, [categoria])

    // useEffect(() => {
    //     pedirDatos() 
    //         .then((data) => {
    //                 setProductos( data )
    //             })      
    // }, [])
    
    return {productos, titulo}
}

export default useProductos