import { BsCart4 } from "react-icons/bs";
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {
    const { itemsInCart } = useContext(CartContext)
    return (
        <div className="cart font-medium text-lg flex items-center gap-2">
            <Link to="/cart" className='flex items-center gap-1 cursor-pointer'>
                <BsCart4 />
                <span className='text-black text-2xl'>{ itemsInCart() }</span>
            </Link>
        </div>
    )
}

export default CartWidget