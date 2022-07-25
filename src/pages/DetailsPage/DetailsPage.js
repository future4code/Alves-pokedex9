import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { goToHome } from '../../routes/Coordinator'
import Header from '../../components/Header/Header'
import { BackDetails, Pokemon, SpriteFront, SpriteBack, Stats, StatsImg, Moves, ButtonDelete, PokeballImg, MainDiv, Type, TypeDiv, InfoDiv, MoveDiv, StatsDiv } from './Styled'
import { GlobalContext } from '../../global/GlobalContext'
import { BaseUrl } from '../../contants/urls'
import useRequestData from '../../hooks/useRequestData'
import arrow from '../../assets/arrow.png'
import { HeaderDiv } from '../Pokedex/Styled'
import Swal from 'sweetalert2'
//images
import pokeball from '../../assets/pokeball.png'
import poison from '../../assets/poison.png'
import grass from '../../assets/grass.png'
import fire from '../../assets/fire.png'
import water from '../../assets/water.png'
import bug from '../../assets/bug.png'
import normal from '../../assets/normal.png'
import electric from '../../assets/electric.png'
import ground from '../../assets/ground.png'
import fairy from '../../assets/fairy.png'
import fighting from '../../assets/fighting.png'
import psychic from '../../assets/psychic.png'
import rock from '../../assets/rock.png'
import ghost from '../../assets/ghost.png'
import ice from '../../assets/ice.png'
import dragon from '../../assets/dragon.png'
import steel from '../../assets/steel.png'
import dark from '../../assets/dark.png'
import flying from '../../assets/flying.png'


export default function DetailsPage() {
  const navigate = useNavigate()

  const { pokemons, setPokemons, idDetails, pokedex, setPokedex } = useContext(GlobalContext)
  const detailList = useRequestData(`${BaseUrl}/${idDetails}/`)
  const [stats, setStats] = useState([])
  const [moves, setMoves] = useState([])
  const [types, setTypes] = useState([])
  useEffect(() => {
    if (idDetails.length !== 0) {
      setStats(detailList.stats)
      setMoves(detailList.moves)
      setTypes(detailList.types)
    }
  })
  const StatsList = () => {
    if (stats) {
      const Stat = stats.map((stat) => {
        if (stats.length !== 0) {
          return (
            <StatsDiv key={stat.stat.name}>
              <div>{stat.stat.name}</div>
              <div>{stat.base_stat}</div>
              <div></div>
            </StatsDiv>
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
          if (moves !== undefined) {
            return (
              <MoveDiv key={move.move.name}>{move.move.name}</MoveDiv>
            )
          }
        }
      })
      return Move
    }
  }


  const TypesDiv = () => {
    if (types !== undefined) {
      const Types = types.map((type) => {
        if (types.length !== 0) {
          const chooseTypeIcon = () => {
            switch (type.type.name) {
              case 'poison':
                return poison
              case 'grass':
                return grass
              case 'fire':
                return fire
              case 'water':
                return water
              case 'bug':
                return bug
              case 'normal':
                return normal
              case 'electic':
                return electric
              case 'ground':
                return ground
              case 'fairy':
                return fairy
              case 'fighting':
                return fighting
              case 'psychic':
                return psychic
              case 'rock':
                return rock
              case 'ghost':
                return ghost
              case 'ice':
                return ice
              case 'dragon':
                return dragon
              case 'steel':
                return steel
              case 'dark':
                return dark
              case 'flying':
                return flying
            }
          }
          return <Type typeBackground={type.type.name} key={type.slot}><div><img src={chooseTypeIcon()} /></div> <div>{type.type.name[0].toUpperCase() + type.type.name.substring(1)}</div></Type>
        }
      })
      return Types
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
          <PokeballImg src={pokeball} alt='pokeball' />
          <SpriteFront alt='SpriteFront' src={detailList.sprites.front_default}></SpriteFront>
          <SpriteBack alt='SpriteBack' src={detailList.sprites.back_default}></SpriteBack>
          <Stats>
            <h1>Base stats</h1>
            {StatsList()}
          </Stats>
          <Pokemon alt='Pokemon' src={detailList.sprites.other.home.front_default}></Pokemon>
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
    <MainDiv>
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
      <h1>Detalhes</h1>
      <BackDetails>
        <InfoDiv>
          {detailList.name}
        </InfoDiv>
        <TypeDiv>
          {TypesDiv()}
        </TypeDiv>
        {chooseScreen()}
      </BackDetails>

    </MainDiv>
  );
};