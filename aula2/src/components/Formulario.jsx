import React, { use, useState } from 'react'

export default function Formulario() {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [digito, setDigito] = useState("")
    function handleSubmit() {
        alert(`Dados de envio do cadastro: ${nome} - ${email}`)
    }

    return (
        <div>
            <h1>Formulário de Cadastro de Clientes</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nome">Nome: </label>
                <input
                    type="text"
                    id="nome"
                    name="nome"
                    placeholder="Digite seu nome"
                    onChange={(e) => setNome(e.target.value)}
                />
                <label htmlFor="nome">E-mail: </label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Digite seu e-mail"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <input
                    type="text"
                    onChange={(e) => setDigito(e.target.value)} 
                />
                <p>Voce digitou: {digito}</p>
                <button type='submit'>Enviar</button>
            </form>
        </div>
    )
}
