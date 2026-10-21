import { test, expect } from 'vitest'
import { render } from '@testing-library/react'
import Contacto from '../paginas/Contacto'

test('el contenedor de Contacto incluye las clases responsivas col-12, col-md-8 y col-lg-6', () => {
    const { container } = render(<Contacto />)

    // Obtenemos la columna responsiva dentro de la fila
    const columna = container.querySelector('.row > div')

    expect(columna).not.toBeNull()
    expect(columna?.classList.contains('col-12')).toBe(true)
    expect(columna?.classList.contains('col-md-8')).toBe(true)
    expect(columna?.classList.contains('col-lg-6')).toBe(true)
})
