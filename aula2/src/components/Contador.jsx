import React, { useState } from 'react'

export default function Contador() {
    const [contador, setContador] = useState(0)
    function somar() {
        setContador(contador + 1)
    }
    function subtrair() {
        setContador(contador - 1)
    }
    function zerar() {
        setContador(0)
    }

    return (
        <div>
            <p>Contador: {contador}</p>
            <button onClick={() => somar()}>+1</button>
            <button onClick={() => subtrair()}>-1</button>
            <button onClick={() => zerar()}>0</button>
        </div>
    )
}
