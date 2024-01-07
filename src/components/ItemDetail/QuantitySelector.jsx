

const QuantitySelector = ({cantidad, stock, setCantidad}) => {

        const handleSumar = () => {
            cantidad < stock && setCantidad(cantidad + 1)
        }

        const handleRestar = () => {
            cantidad > 1 && setCantidad(cantidad - 1)
        }
    return (
        <div className="flex gap-4 items-center">
            <button 
                onClick={handleRestar}
                className={`${cantidad === 1 ? 'bg-red-300' : 'bg-blue-500'} 
                rounded flex items-center py-2 px-4 text-center text-white font-semibold my-4`}
                disabled={cantidad === 1}
            >
                -
            </button>
            <span>{cantidad}</span>
            <button 
                onClick={handleSumar} 
                className={`${cantidad === stock ? 'bg-red-300' : 'bg-blue-500'} 
                rounded flex items-center py-2 px-4 text-center text-white font-semibold my-4`}
                disabled={cantidad === stock}
            >
                +
            </button>
        </div>
    )
}

export default QuantitySelector