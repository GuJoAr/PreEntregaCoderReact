import './App.css'
import './styles/styles.scss'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Footer from './components/Footer/Footer'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Contacto from './components/Contacto/Contacto'
import ItemDetailContainer from './components/ItemDetailContainer/IItemDetailContainer'

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/productos/:categoria" element={ <ItemListContainer /> } />
        <Route path="/item/:itemId" element={ <ItemDetailContainer /> } />
        <Route path='contacto' element={<Contacto/>} />


        <Route path="/not-found" element={ <h2>Not found</h2> }/>
        <Route path="*" element={ <Navigate to={"/not-found"}/> }/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
