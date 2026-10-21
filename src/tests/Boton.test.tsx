import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Boton from '../componentes/atomos/Boton'

test("el boton muestra el texto Ver producto", () => {
    render(
        <MemoryRouter>
            <Boton id={3} />
        </MemoryRouter>
    )
    const boton = screen.getByText("Ver producto")
    expect(boton.textContent).toBe("Ver producto")
})