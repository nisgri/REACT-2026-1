const Exemplo = () => {
    const numeros = [10, 20, 30, 60, 100]
    const soma = numeros.reduce((soma, numero) => soma + numero, 0)

    const filtro = numeros.filter((numero) => numero >= 50)
    
    return (
        <>
            <div>
                <h1>Componente de Exemplo</h1>
                <h3>Resultado da soma: {soma}</h3>
                <h3>Números maiores que 50: {filtro.join(', ')}</h3>
            </div>
        </>
    )
}
export default Exemplo