
/*me daba un error en el ({greeting}) que decia "'greeting' is missing in props validationeslintreact/prop-types
(parameter) greeting: any" y cuando ponia el mouse arriba me ponia esta solucion "// eslint-disable-next-line react/prop-types"*/

// eslint-disable-next-line react/prop-types
const ItemListContainer = ({greeting}) => {

    return (
        <section className="list_container">
            <h2 className="list_title">Productos</h2>
            <p>{greeting}</p>
        </section>
    )
}

export default ItemListContainer