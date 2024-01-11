import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../firebase/config"

const useProductos = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const [titulo, setTitulo] = useState("Productos")
    const {categoria}  = useParams()

    useEffect(() => {
        setLoading(true)
        const productosRef = collection(db, 'productos')
        const docsRef = categoria
                            ? query( productosRef, where('categoria', '==', categoria))
                            : productosRef
        getDocs(docsRef)
            .then((querySnapshot) => {
                const docs = querySnapshot.docs.map(doc => {
                return {
                ...doc.data(),
                id: doc.id
                }
            })
            setProductos( docs )
            })
            .finally(() => setLoading(false))
        if (!categoria) {
            setTitulo("Productos");
        } else {
            setTitulo(categoria);
        }
    }, [categoria])

    return {productos, titulo, loading}
}

export default useProductos