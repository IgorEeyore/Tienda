import { Routes, Route } from "react-router-dom"
import Inicio from "./paginas/Inicio"
import Productos from "./paginas/Productos"
import Navbar from "./componentes/organismos/Navbar"
import Nosotros from "./paginas/Nosotros"
import Contacto from "./paginas/Contacto"

function App() {
  return(
    <>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/productos" element={<Productos/>}/>
        <Route path="/nosotros" element={<Nosotros/>}/>
        <Route path="/contacto" element={<Contacto/>}/>
      </Routes>
    </>
  )
}

export default App
