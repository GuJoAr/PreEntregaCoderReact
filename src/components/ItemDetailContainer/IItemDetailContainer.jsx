import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { pedirDatos } from "../../utils/utilidades";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loader from "../Loader/Loader";


const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true);
        pedirDatos()
            .then((data) => {
                setItem( data.find ((prod) => prod.id === Number(itemId)) )
            })
            .finally(() => setLoading(false));
    }, []);

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <ItemDetail item={item}/>
            )}
        </>
    );
};

export default ItemDetailContainer;