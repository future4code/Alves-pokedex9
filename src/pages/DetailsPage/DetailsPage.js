import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { goToHome } from '../../routes/Coordinator'
import Header from '../../components/Header/Header'
import { BackDetails, Pokemon, SpriteFront, SpriteBack, Stats, StatsImg, Moves, ButtonDelete } from './Styled'
import { GlobalContext } from '../../global/GlobalContext'
import { BaseUrl } from '../../contants/urls'
import useRequestData from '../../hooks/useRequestData'
import arrow from '../../assets/arrow.png'
import { goToPokedex } from '../../routes/Coordinator'
import { HeaderDiv } from '../Pokedex/Styled'
import Swal from 'sweetalert2'


export default function DetailsPage() {
  const navigate = useNavigate()

  const { pokemons, setPokemons, idDetails, pokedex, setPokedex } = useContext(GlobalContext)
  const [pokemonCheck, setPokemonCheck] = useState()
  const [pokemonsList, setpokemonsList] = useState([])
  const detailList = useRequestData(`${BaseUrl}/${idDetails}/`)

  const chooseScreen = () => {
    if (detailList.length === 0) {
      <h1>Carregando</h1>
    }
    /*   switch (detailList) {
         case undefined:
          return <h1>Carregando</h1>
         default:
           return (
              detailList.map((poke) => {
               return (
                 <>
                   <SpriteFront alt='SpriteFront' src={poke.sprites.front_default}></SpriteFront>
                   <SpriteBack alt='SpriteBack' src={poke.sprites.back_default}></SpriteBack>
                    <Stats>
                     <p>Base stats</p>
                     <StatsImg alt='StatsImg' src={poke.stats} ></StatsImg>
                   </Stats>
                    <Pokemon alt='Pokemon' src={poke.sprites.front_default}></Pokemon>
                   <Moves>{`${BaseUrl}/moves`}</Moves>
                 </>
               )
              }
             )
           )
       } */
  }
  const deletePokemon = (name) => {
    const newPokedex = pokedex.filter((pokemon) => {
      return pokemon.name !== name
    })
    setPokedex(newPokedex)
    localStorage.setItem('pokedex', JSON.stringify(newPokedex))
    Swal.fire({
      title: 'Oh, no!',
      text: 'O Pokémon foi removido da sua pokedex',
      showConfirmButton: false,
      timer: 1600
    })
  }
  const SearchPokemon = () => {
    const PokemonCheck = pokedex.map((pokemon) => {
      if (detailList.name === pokemon.name) {
        return <ButtonDelete
          onClick={() => deletePokemon(detailList.name)}
        >Excluir da Pokédex</ButtonDelete>
      }
    })
    return PokemonCheck
  }
  return (
    <div>
      <Header
        buttonRight={
          <div>
            {SearchPokemon()}
          </div>
        }
        buttonLeft={
          <HeaderDiv>
            <img
              src={arrow}
            />
            <p onClick={() => goToHome(navigate)}>Todos os Pokémons</p>
          </HeaderDiv>
        }
      />
      <h1>DetailsPage</h1>
      <BackDetails>
        {chooseScreen()}
      </BackDetails>

    </div>
  );
};