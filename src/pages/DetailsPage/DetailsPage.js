import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToHome } from '../../routes/Coordinator'
import Header from '../../components/Header/Header'
import { MainDiv } from '../../components/Header/Styled'
import { BackDetails, PngWing, Pokemon, SpriteFront, SpriteBack, Stats, StatsImg, Moves } from './Styled'

export default function DetailsPage() {
  const navigate = useNavigate()

  return (
    <MainDiv>
      <Header />
      <h1>DetailsPage</h1>
      <button onClick={() => goToHome(navigate)}>Todos os Pokémons</button>
      <BackDetails>
        <SpriteFront alt='SpriteFront' src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'></SpriteFront>
        <SpriteBack alt='SpriteBack'></SpriteBack>
        <Stats>
          <StatsImg alt='StatsImg'></StatsImg>
        </Stats>
        <Pokemon alt='Pokemon' src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'></Pokemon>
        <Moves>'</Moves>
      </BackDetails>

    </MainDiv>
  );
};