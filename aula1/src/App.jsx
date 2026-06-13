import Aluno from "./components/Aluno"
import { Componente2, Componente3 } from "./components/Componente"
import Curso from "./components/Curso"
import Exemplo from "./components/Exemplo"
import Usuario from "./components/Usuario"
import "./index.css"

export default function App() {
  const texto = {
    color: "#cd4466",
    fontsize: "6rem"
  }

  const times = ["São Paulo", "Santos", "Palmeiras", "Santo André"]
  const listaTimes = times.map((time, index) => (
    <li key={index}>{time}</li>
  ))

  const curso = () => {
    return "Curso de React"
  }

  const dados = (p) => p.nome
  const pessoa = {
    nome: "José",
    idade: 23
  }

  const soma = (x, y) => x + y

  return (
    <div style={{ color: "greenyellow", fontfamily: "Arial" }}>
      <h2>Lista de Times</h2>
      <ul>
        {listaTimes}
      </ul>
      <h3>{curso()}</h3>
      <h3>Olá, {dados(pessoa)}</h3>
      <h3>Resultado da soma: {soma(2, 3)}</h3>
      <Exemplo />
      <Componente3 />
      <Componente2 />
      <Curso
        nome="React"
        texto="Aula de introdução"
      />
      <Aluno
        nome="Juliana"
        email="adriano@gmail.com"
        idade="16"
        status={false}
      />
      <Usuario />
      <p style={texto}>Introdução ao CSS</p>
    </div>
  )
}