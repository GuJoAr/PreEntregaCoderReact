import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { pedirDatos } from "../../utils/utilidades";
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailContainer = () => {
    const [item, setItem] = useState();

    const { itemId } = useParams()

    useEffect(() => {
        pedirDatos()
            .then((data) => {
                setItem( data.find ((prod) => prod.id === Number(itemId)) )
            })
    }, []);

    return (
        <>
            {item && <ItemDetail item={item} />}
        </>
    );
};

export default ItemDetailContainer;