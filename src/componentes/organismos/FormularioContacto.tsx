import { useState } from "react"
import CampoFormulario from "../moleculas/CampoFormulario"

import type {SubmitEvent} from "react"

function FormularioContacto(){

    const[nombre,setNombre] = useState("")
    const[correo,setCorreo] = useState("")
    const[mensaje,setMensaje] = useState("")
    const[enviando, setEnviando] = useState(false)

    const manejarEnvio = async(e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (enviando) return

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
        
        setEnviando(true)

        try {
            const respuesta = await fetch("http://localhost:8082/api/contactos",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        nombreCompleto: nombre.trim(),
                        correo: correo.trim(),
                        mensaje: mensaje.trim()
                    }),
                }
            )

            if (!respuesta.ok){
                throw new Error(`Error HTTP ${respuesta.status}`)
            }
            alert("Mensaje guardado correctamente")

            setNombre("")
            setCorreo("")
            setMensaje("")
        } catch(error){
            console.error("Error al enviar el contacto:", error)
            alert("No se puede enviar el mensaje. Intente nuevamente.")
        } finally{
            setEnviando(false)
        }
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
            <button type="submit" className="btn btn-primary" disabled={enviando}>
                {enviando ? "Enviando...": "Enviar mensaje"}
            </button>
        </form>
    )
}

export default FormularioContacto