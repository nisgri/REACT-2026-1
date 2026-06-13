import React, { useContext } from 'react'
import Nome from './Nome'
import { UserContext } from '../../contexts/user'

export default function Alunos() {
  const { nomeAluno, totalAlunos } = useContext(UserContext)

  return (
    <div>
      <h2>Componente de Aluno - {nomeAluno}</h2>
      <Nome />
      <h3>Total de Alunos: {totalAlunos}</h3>
    </div>
  )
}
