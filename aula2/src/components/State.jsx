import React, { useState } from 'react'

export default function State() {
    // let valor = 100
    const [valor, setValor] = useState(100)
    const inicial = 100
    // function alterarValor() {
    //     valor = valor * 2
    //     console.log(valor)
    // }
    function alterarValor() {
        setValor(valor * 2)
    }

    const [nome, setNome] = useState("João")

    return (
        <div>
            <h2>Exemplo de useState</h2>
            <p>Valor inicial: {inicial}</p>
            <p>Resultado: {valor}</p>
            <button onClick={alterarValor}>Calcular</button>
            <p>Nome: {nome}</p>
            <button onClick={() => setNome(nome === "João" ? "José" : "João")}>Alterar Nome</button>
        </div>
    )
}
