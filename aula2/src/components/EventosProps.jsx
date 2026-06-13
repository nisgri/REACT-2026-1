import React from 'react'
import Botao from './Botao'

export default function EventosProps() {
    const primeiroEvento = () => alert("Evento 1")
    const segundoEvento = () => alert("Evento 2")
    
    return (
        <div>
            <Botao evento={primeiroEvento} texto="Botão1" />
            <Botao evento={segundoEvento} texto="Botão2" />
        </div>
    )
}
