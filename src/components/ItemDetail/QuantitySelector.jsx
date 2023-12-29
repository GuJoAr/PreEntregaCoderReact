

const QuantitySelector = ({cantidad, stock, setCantidad}) => {

        const handleSumar = () => {
            cantidad < stock && setCantidad(cantidad + 1)
        }

        const handleRestar = () => {
            cantidad > 1 && setCantidad(cantidad - 1)
        }
    return (
        <div className="flex gap-4 items-center">
            <button onClick={handleRestar} className="bg-blue-500 rounded flex items-center py-2 px-4 text-center text-white font-semibold my-4">-</button>
            <span>{cantidad}</span>
            <button onClick={handleSumar} className="bg-blue-500 rounded flex items-center py-2 px-4 text-center text-white font-semibold my-4">+</button>
        </div>
    )
}

export default QuantitySelector