import { test, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import FormularioContacto from '../componentes/organismos/FormularioContacto'

test("Muestra una alerta cuando el nombre esta vacio", () => {
    const alerta = vi.spyOn(window, "alert").mockImplementation(() => {})

    render(<FormularioContacto />)

    fireEvent.click(screen.getByRole("button", { name: "Enviar mensaje" }))

    expect(alerta).toHaveBeenCalledWith("Por favor ingrese su nombre")

    alerta.mockRestore()
})