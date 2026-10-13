import CampoFormulario from "../moleculas/CampoFormulario"

function FormularioContacto(){
    return(
        <form>
            <CampoFormulario
                etiqueta="Nombre completo"
                tipo="text"
                nombre="nombre"
            />
            <CampoFormulario
                etiqueta="Correo electronico"
                tipo="email"
                nombre="correo"
            />
            <CampoFormulario
                etiqueta="Mensaje"
                tipo="text"
                nombre="mensaje"
            />
            <button type="submit" className="btn btn-primary">
                Enviar mensaje
            </button>
        </form>
    )
}

export default FormularioContacto