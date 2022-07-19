import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToHome } from '../../routes/Coordinator'
import Header from '../../components/Header/Header'
import { MainDiv } from '../../components/Header/Styled'
import { backDetails, pngWing, pokemon, spriteFront, spriteBack, stats, statsImg, moves } from './Styled'

export default function DetailsPage() {
  const navigate = useNavigate()

  return (
    <MainDiv>
      <Header />
      <h1>DetailsPage</h1>
      <button onClick={() => goToHome(navigate)}>Todos os Pokémons</button>
      <backDetails>
        <spriteFront>'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'</spriteFront>
        <spriteBack>''</spriteBack>
        <stats>
          <statsImg>''</statsImg>
        </stats>
        <pokemon>'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'</pokemon>
        <moves>'</moves>
      </backDetails>

    </MainDiv>
  );
};