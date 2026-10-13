import CardProducto from "../componentes/moleculas/CardProducto";

function Productos(){
    return(
        <div>
            <h1>Productos</h1>

            <div className="d-flex gap-3">
                
                <CardProducto id={1} 
                titulo= "Notebook"
                descripcion= "Notebook ideal para estudiar y trabajar"
                precio= {599000}
                imagen= "/img/notbu.jpg"
                />
                <CardProducto id={2} 
                titulo= "Mouse"
                descripcion= "Mouse gamer con luces RGB"
                precio= {19990}
                imagen= "/img/maus.jpg"
                />
                <CardProducto id={3} 
                titulo= "Teclado"
                descripcion= "Teclado mecánico con retroiluminación"
                precio= {39990}
                imagen= "/img/keibor.jpg"
                />
                <CardProducto id={4} 
                titulo= "Auriculares"
                descripcion= "Auriculares inalámbricos con cancelación de ruido"
                precio= {59990}
                imagen= "/img/audifonos.jpg"
                />

            </div>
        </div>
    )
}
export default Productos