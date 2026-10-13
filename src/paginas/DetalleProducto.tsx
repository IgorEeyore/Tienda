import { useParams } from "react-router-dom"
import BotonVlr from "../componentes/atomos/BotonVlr"

const productos = [
    {
        id: 1,
        titulo: "Notebook",
        descripcion: "Notebook ideal para estudiar y trabajar",
        precio: 599000,
        imagen: "/img/notbu.jpg"
    },
    {
        id: 2,
        titulo: "Mouse",
        descripcion: "Mouse gamer con luces RGB",
        precio: 19990,
        imagen: "/img/maus.jpg"
    },
    {
        id: 3,
        titulo: "Teclado",
        descripcion: "Teclado mecánico con retroiluminación",
        precio: 39990,
        imagen: "/img/keibor.jpg"
    },
    {
        id: 4,
        titulo: "Auriculares",
        descripcion: "Auriculares inalámbricos con cancelación de ruido",
        precio: 59990,
        imagen: "/img/audifonos.jpg"
    }
]

function DetalleProducto(){
    const {id} = useParams()

    const producto = productos.find(
        producto => producto.id === Number(id)
    )

    return(
        <div>
            <h1>Detalle del producto</h1>
            <img src={producto?.imagen}
                alt={producto?.titulo}
                style={{width:'300px'}}
            />
            <h2 style={{color: 'black'}}> {producto?.titulo} </h2>
            <p>{producto?.descripcion}</p>
            <p>${producto?.precio}</p>
            <div>
                <BotonVlr/>
            </div>
        </div>
    )
}

export default DetalleProducto