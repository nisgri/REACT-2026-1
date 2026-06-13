import Filho from "./Filho"

export default function Usuario() {
    const usuarios = [
        {
            nome: "Carlos",
            idade: "60"
        },
        {
            nome: "Carla",
            idade: "43"
        },
        {
            nome: "Marcos",
            idade: "21"
        },
    ]

    return (
        <div>
            <Filho usuarios={usuarios} />
        </div>
    )
}
