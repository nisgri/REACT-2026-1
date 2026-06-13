export default function Evento() {
    let nome = "Roni"
    
    const handleClick = () => {
        alert("Clicado")
    }

    function handleChangeName() {
        nome = "José"
    }

    return (
        <div>
            <p>Exemplo de Evento</p>
            <button onClick={handleClick}>Click</button>
            <p>Segundo Botão</p>
            <button onClick={() => alert("Clicado 2")}>Click</button>

            <h2>{nome}</h2>
            <button onClick={handleChangeName}>Alterar Nome</button>
        </div>
    )
}
