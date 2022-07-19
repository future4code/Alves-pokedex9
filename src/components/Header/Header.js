import React from 'react'
import { MainDiv } from './Styled'
import pokemon from '../../assets/pokemon.png'
import { useNavigate } from 'react-router-dom'
import { goToPokedex } from '../../routes/Coordinator'

export default function Header() {
  const navigate = useNavigate()

  return (
    <MainDiv>
        <img
        src={pokemon}
        />
        <button onClick={() => goToPokedex(navigate)}>Pokedéx</button>
    </MainDiv>
  )
}
