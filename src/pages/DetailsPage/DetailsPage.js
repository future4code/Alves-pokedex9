import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToHome } from '../../routes/Coordinator'
import Header from '../../components/Header/Header'
import { BackDetails, PngWing, Pokemon, SpriteFront, SpriteBack, Stats, StatsImg, Moves } from './Styled'
import { GlobalContext } from '../../global/GlobalContext'
import { BaseUrl } from '../../contants/urls'

export default function DetailsPage() {
  const navigate = useNavigate()

  const { pokemons, setPokemons } = useContext(GlobalContext)

  return (
    <MainDiv>
      <Header />
      <h1>DetailsPage</h1>
      <button onClick={() => goToHome(navigate)}>Todos os Pokémons</button>
      <BackDetails>  
        {pokemons.map((pokemon) => {
          return (
            <>
              <SpriteFront alt='SpriteFront' src={pokemon.sprites.front_default}></SpriteFront>
              <SpriteBack alt='SpriteBack' src={pokemon.sprites.back_default}></SpriteBack>
              <Stats>
                <p>Base stats</p>
                <StatsImg alt='StatsImg' src={pokemon.stats} ></StatsImg>
              </Stats>
              <Pokemon alt='Pokemon' src={pokemon.sprites.front_default}></Pokemon>
              <Moves>{`${BaseUrl}/moves`}</Moves>
            </>
          )
        }
        )
        };
      </BackDetails>
    </MainDiv>
  );
};