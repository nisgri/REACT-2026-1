import Alunos from './components/Alunos'
import ExemploGet from './components/ExemploGet'
import ExemploUseEffects from './components/ExemploUseEffects'
import Exercicio from './components/Exercicio'
import UserProvider from './contexts/user'

export default function App() {
  return (
    <UserProvider>
      <div>
        <h1>Escola</h1>
        {/* <Titulo>
          <h2>Escola Municipal...</h2>
          <h3>Situada no município de Petrópolis</h3>
          <h3>No bairro Quitandinha</h3>
        </Titulo> */}
        <hr />
        <Alunos />
        <hr />
        <ExemploUseEffects />
        <hr />
        <ExemploGet />
        <hr />
        <Exercicio />
      </div>
    </UserProvider>
  )
}

// function Titulo({ children }) {
//   return (
//     <div>
//       {children}
//     </div>
//   )
// }
