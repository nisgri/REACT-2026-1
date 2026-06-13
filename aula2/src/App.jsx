import AppClasse from "./components/AppClasse";
import { StyledButton, BlueButton, GreenButton } from "./components/Button.style";
import { Card } from "./components/Card.style";
import Contador from "./components/Contador";
import Evento from "./components/Evento";
import EventosProps from "./components/EventosProps";
import Formulario from "./components/Formulario";
import State from "./components/State";

export default function App() {
  return (
    <div>
      {/* <StyledButton onClick={() => alert("Clicado")}>Curso de React</StyledButton>
      <BlueButton onClick={() => alert("Clicado")}>Curso de React</BlueButton>
      <GreenButton onClick={() => alert("Clicado")}>Curso de React</GreenButton>
      <Card>
        <h1>Título do Card</h1>
        <p>Conteúdo do Card</p>
      </Card>
      <Evento /> */}
      {/* <AppClasse /> */}
      {/* <State /> */}
      {/* <Contador /> */}
      {/* <Formulario /> */}
      <EventosProps />
    </div>
  )
}
