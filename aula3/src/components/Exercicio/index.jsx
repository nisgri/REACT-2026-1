import React, { useState } from 'react'

export default function Exercicio() {
    const [status, setStatus] = useState(false)

    const alterarStatus = (() => {
        setStatus(!status)
    })
    
    return (
        <div>
            <p>{status ? "Login Efetuado" : "Efetuar Login"}</p>
            <button onClick={() => alterarStatus()}>{status ? "Logout" : "Login"}</button>
        </div>
    )
}
