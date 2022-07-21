import React, { useContext } from 'react'
import Header from '../../components/Header/Header'
import { MainDiv, CardsDiv } from './Styled'
import Card from '../../components/Card/Card'
import { GlobalContext } from '../../global/GlobalContext'
import { useNavigate } from 'react-router-dom'
import { goToPokedex, goToDetails } from '../../routes/Coordinator'
import { useState, useEffect } from 'react'
import useRequestData from '../../hooks/useRequestData'
import { BaseUrl } from '../../contants/urls'

export default function Home() {
  const { pokemons, details, setDetails, pokedex, setPokedex } = useContext(GlobalContext)
  const [id, setId] = useState([])
  const [pokemonsList, setpokemonsList] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    setpokemonsList(pokemons.results)
  }, [pokemons])


  const catchPokemon = (name) => {
    pokedex.map((pokemon) => {
      if (name !== pokemon) {
        return setPokedex([...pokedex, name])
      }
    })
  }
  const catchDetails = useRequestData(`${BaseUrl}/1/`)
  
  const catchId = (id) => {
    const newId = id.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', '')
    return newId
  }
  const chooseScreen = () => {
    switch (pokemonsList) {
      case undefined:
        return (
          <h1>Carregando</h1>
        )
      case []:
        return (
          <h1>Carregando</h1>
        )
      default:
        return (
          pokemonsList.map((pokemon) => {
            return (
              <Card key={pokemon.name}
                name={pokemon.name}
                id={`# ${catchId(pokemon.url)}`}
                type='Poison'
                icon='ℹ'
                img=''
                details={
                  <div>
                    <button onClick={() => goToDetails(navigate, catchId(pokemon.url))}>Detalhes</button>
                  </div>
                }
                button={
                  <div>
                    <button
                      onClick={() => catchPokemon(pokemon)}
                    >Capturar!</button>
                  </div>
                }
              />
            )
          })
        )
    }

  }
  return (
    <>
      <Header
        buttonRight={
          <div>
            <button onClick={() => goToPokedex(navigate)}>Pokedéx</button>
          </div>
        }
      />
      <MainDiv>
        <h1>Todos Pokémons</h1>
        <CardsDiv>
          {chooseScreen()}
        </CardsDiv>
      </MainDiv>
    </>
  );
};
