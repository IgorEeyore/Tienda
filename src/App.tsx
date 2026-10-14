import { Routes, Route } from "react-router-dom"
import Inicio from "./paginas/Inicio"
import Productos from "./paginas/Productos"
import Navbar from "./componentes/organismos/Navbar"
import Nosotros from "./paginas/Nosotros"
import Contacto from "./paginas/Contacto"
import DetalleProducto from "./paginas/DetalleProducto"
import Login from "./paginas/Login"

function App() {
  return(
    <>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/productos" element={<Productos/>}/>
        <Route path="/productos/:id" element={<DetalleProducto/>}/>
        <Route path="/nosotros" element={<Nosotros/>}/>
        <Route path="/contacto" element={<Contacto/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App
