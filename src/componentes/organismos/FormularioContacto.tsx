import { useState } from "react"
import CampoFormulario from "../moleculas/CampoFormulario"

function FormularioContacto(){

    const[nombre,setNombre] = useState("")
    const[correo,setCorreo] = useState("")
    const[mensaje,setMensaje] = useState("")

    return(
        <form>
            <CampoFormulario
                etiqueta="Nombre completo"
                tipo="text"
                nombre="nombre"
                valor={nombre}
                alCambiar={setNombre}
            />
            <CampoFormulario
                etiqueta="Correo electronico"
                tipo="email"
                nombre="correo"
                valor={correo}
                alCambiar={setCorreo}
            />
            <CampoFormulario
                etiqueta="Mensaje"
                tipo="text"
                nombre="mensaje"
                valor={mensaje}
                alCambiar={setMensaje}
            />
            <button type="submit" className="btn btn-primary">
                Enviar mensaje
            </button>
        </form>
    )
}

export default FormularioContacto