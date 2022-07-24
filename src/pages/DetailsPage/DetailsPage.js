import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { goToHome } from '../../routes/Coordinator'
import Header from '../../components/Header/Header'
import { BackDetails, Pokemon, SpriteFront, SpriteBack, Stats, StatsImg, Moves, ButtonDelete } from './Styled'
import { GlobalContext } from '../../global/GlobalContext'
import { BaseUrl } from '../../contants/urls'
import useRequestData from '../../hooks/useRequestData'
import arrow from '../../assets/arrow.png'
import { HeaderDiv } from '../Pokedex/Styled'
import Swal from 'sweetalert2'


export default function DetailsPage() {
  const navigate = useNavigate()

  const { pokemons, setPokemons, idDetails, pokedex, setPokedex } = useContext(GlobalContext)
  const detailList = useRequestData(`${BaseUrl}/${idDetails}/`)
  const [stats, setStats] = useState([])
  const [moves, setMoves] = useState([])
  useEffect(() => {
    if (idDetails.length !== 0) {
      setStats(detailList.stats)
      setMoves(detailList.moves)
    }
  })
  const StatsList = () => {
    if (stats) {
      const Stat = stats.map((stat) => {
        if (stats.length !== 0) {
          return (
            <div key={stat.stat.name}>
              <div>{stat.stat.name}</div>
              <div>{stat.base_stat}</div>
              <div></div>
            </div>
          )
        } else if (stats === undefined) {
          return <p>Carregando...</p>
        }
      })
      return Stat
    }
  }
  const MovesList = () => {
    if (moves) {
      const arrMove = moves.slice(0, 4)
      const Move = arrMove.map((move) => {
        if (moves.length !== 0) {
          console.log(arrMove)
          if (moves !== undefined) {
            return (
              <div key={move.move.name}>{move.move.name}</div>
            )
          }
        }
      })
      return Move
    }
  }

  const chooseScreen = () => {
    if (detailList.length === 0) {
      <h1>Carregando</h1>
    } else if (detailList === undefined) {
      return <h1>Carregando</h1>
    } else {
      return (
        <>
          <SpriteFront alt='SpriteFront' src={detailList.sprites.front_default}></SpriteFront>
          <SpriteBack alt='SpriteBack' src={detailList.sprites.back_default}></SpriteBack>
          <Stats>
            <p>Base stats</p>
            {StatsList()}
          </Stats>
          <Pokemon alt='Pokemon' src={detailList.sprites.front_default}></Pokemon>
          <Moves>
            <h1>Moves:</h1>
            {MovesList()}
          </Moves>
        </>

      )
    }

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