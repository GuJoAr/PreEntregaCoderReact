import { BsCart4 } from "react-icons/bs";
import { IconContext } from "react-icons";

const CartWidget = () => {
    return (
        <div className="cart">
            <IconContext.Provider value={{ color: "#8139bd", size: "30px" }}>
                <a href="#"><BsCart4 /></a>
            </IconContext.Provider>
        </div>
    )
}

export default CartWidget