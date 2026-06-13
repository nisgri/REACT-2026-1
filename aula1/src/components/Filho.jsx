export default function Filho(props) {
    const lista = props.usuarios

    return (
        <div>
            <h2>Lista de Usuários</h2>
            <ul>
                {lista.map((usuario, index) => (
                    <li key={index}>
                        {usuario.nome} - {usuario.idade}
                    </li>
                ))}
            </ul>
        </div>
    )
}
