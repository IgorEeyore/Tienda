import {Link} from "react-router-dom"

function BotonVlr(){
    return(
        <Link to={`/productos`} className="btn btn-primary">
            Volver a productos
        </Link>
    )
}

export default BotonVlr