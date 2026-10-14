import { useState } from "react"
import CampoFormulario from "../moleculas/CampoFormulario"

function FormularioLogin() {

    const [correo, setCorreo] = useState("")
    const [contrasena, setContrasena] = useState("")

    const manejarEnvio = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(correo.trim() === ""){
            alert("Por favor ingrese su correo")
            return
        }
        if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)){
            alert("Por favor ingrese un correo valido")
            return
        }
        if(contrasena.trim() === ""){
            alert("Por favor ingrese su contraseña")
            return
        }
        if(contrasena.length < 8){
            alert("La contraseña debe tener al menos 8 caracteres")
            return
        }
        alert("Datos ingresados correctamente")

        setCorreo("")
        setContrasena("")
    }

    return(
        <form onSubmit={manejarEnvio} noValidate>
            <CampoFormulario
                etiqueta="Correo electronico"
                tipo="email"
                nombre="correo"
                valor={correo}
                alCambiar={setCorreo}
            />
            <CampoFormulario
                etiqueta="Contraseña"
                tipo="password"
                nombre="contrasena"
                valor={contrasena}
                alCambiar={setContrasena}
            />
            <button type="submit" className="btn btn-primary">
                Iniciar sesión
            </button>
        </form>
    )
}



export default FormularioLogin