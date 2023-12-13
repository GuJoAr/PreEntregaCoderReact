import { useState, useEffect } from "react"
import { pedirDatos } from "../utils/utilidades"
import { useParams } from "react-router-dom"



const useProductos = () => {
    const [productos, setProductos] = useState([])
    
    // useEffect(() => {
    //     pedirDatos() 
    //         .then((data) => {
    //                 setProductos( data )
    //             })      
    // }, [])
    const { categoriaId } = useParams()
    console.log(categoriaId)

    useEffect(() => {
        pedirDatos()
        .then((data) => {
            const items = categoriaId 
                            ? data.filter(prod => prod.categoria === categoriaId)
                            : data
            setProductos(items)
        })
    }, [categoriaId])
    
    return productos
}

export default useProductos