import { useState } from "react"
import CampoFormulario from "../moleculas/CampoFormulario"

function FormularioContacto(){

    const[nombre,setNombre] = useState("")
    const[correo,setCorreo] = useState("")
    const[mensaje,setMensaje] = useState("")

    const manejarEnvio = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(nombre.trim() === ""){
            alert("Por favor ingrese su nombre")
            return
        }
        if(correo.trim() === ""){
            alert("Por favor ingrese su correo")
            return
        }
        if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)){
            alert("Por favor ingrese un correo valido")
            return
        }
        if(mensaje.trim() === ""){
            alert("Por favor ingrese un mensaje")
            return
        }
        alert("Formulario enviado correctamente")

        setNombre("")
        setCorreo("")
        setMensaje("")
    }

    return(
        <form onSubmit={manejarEnvio} noValidate>
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