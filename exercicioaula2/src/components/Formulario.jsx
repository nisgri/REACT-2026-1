import { useState } from "react"

export default function Formulario() {
    const [peso, setPeso] = useState("")
    const [altura, setAltura] = useState("")

    function calcular() {
        const imc = Number(peso) / (Number(altura) * Number(altura))
        let resultado = ""

        if (imc < 18.5) {
            resultado = "abaixo do normal"
        } else if (imc > 25) {
            resultado = "acima do normal"
        } else {
            resultado = "normal"
        }

        alert("O seu IMC está " + resultado)
    }

    return (
        <div>
            <form className="formulario">
                <div className="peso">
                    <label htmlFor="peso">Peso: </label>
                    <input
                        type="text"
                        id="peso"
                        name="peso"
                        placeholder="Digite seu peso"
                        onChange={(e) => setPeso(e.target.value)}
                    />
                    <br />
                </div>
                <div className="altura">
                    <label htmlFor="">Altura: </label>
                    <input
                        type="text"
                        id="altura"
                        name="altura"
                        placeholder="Digite sua altura"
                        onChange={(e) => setAltura(e.target.value)}
                    />
                    <br />
                </div>
            </form>
            <br />
            <button type='button' onClick={calcular}>Calcular</button>
        </div>
    )
}
