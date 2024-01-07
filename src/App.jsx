import './App.css'
import './styles/styles.scss'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Contacto from './components/Contacto/Contacto'
import ItemDetailContainer from './components/ItemDetailContainer/IItemDetailContainer'
import { CartProvider } from './context/CartContext'
import CartView from './components/CartView/CartView'
import { UserProvider } from './context/UserContext'
import Checkout from './components/Checkout/Checkout'


function App() {

  return (
    <UserProvider>
      <CartProvider>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/productos/:categoria" element={ <ItemListContainer /> } />
            <Route path="/item/:itemId" element={ <ItemDetailContainer/> } />
            <Route path="/cart" element={<CartView />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path='contacto' element={<Contacto/>} />
            <Route path="/not-found" element={ <h2>Not found</h2> }/>
            <Route path="*" element={ <Navigate to={"/not-found"}/> }/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </CartProvider>
    </UserProvider>
  )
}

export default App
