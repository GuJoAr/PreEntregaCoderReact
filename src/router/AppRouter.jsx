import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Navbar from "../components/Navbar/Navbar"
import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "../components/ItemDetailContainer/IItemDetailContainer"
import CartView from "../components/CartView/CartView"
import Checkout from "../components/Checkout/Checkout"
import Contacto from "../components/Contacto/Contacto"
import LoginScreen from "../components/LoginScreen/LoginScreen"
import Footer from "../components/Footer/Footer"


const AppRouter = () => {
    const { user } = useContext(UserContext)

    return (
        <BrowserRouter>
            <Navbar/>
            {user.logged ? (
                <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/productos/:categoria" element={ <ItemListContainer /> } />
                <Route path="/item/:itemId" element={ <ItemDetailContainer/> } />
                <Route path="/cart" element={<CartView />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path='contacto' element={<Contacto/>} />
                <Route path="*" element={ <Navigate to={"/"}/> }/>
                </Routes>
                ) : (
                <Routes>
                    <Route path="/login" element={<LoginScreen />} />
                    <Route path="*" element={<Navigate to="/login" />} />
                </Routes>
                )}
            
            <Footer/>
        </BrowserRouter>
    )
}

export default AppRouter