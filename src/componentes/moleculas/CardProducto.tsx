import Boton from "../atomos/Boton";

function CardProducto(){
    return(
        <div className="card" style={{width: '18rem'}}>
        
            <img
                src="/img/notbu.jpg"
                className="card-img-top"
                alt="Notebook"
            />
            <div className="card-body">
                <h5 className="card-tittle">
                Notebook
                </h5>

                <p className="card-text">
                Notebook ideal para estudiar y trabajar
                </p>

                <Boton/>

            </div>
        </div>
    )
}
export default CardProducto