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
  const { pokemons, details, setDetails, pokedex, setPokedex, idDetails, setIdDetails } = useContext(GlobalContext)
  const [pokemonsList, setpokemonsList] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    setpokemonsList(pokemons.results)
  }, [pokemons])
  useEffect(() => {
    localStorage.setItem('pokedex', JSON.stringify(pokedex))
  }, [pokedex])
  
  const catchPokemon = (name) => {
    const pokeLocalS = localStorage.getItem('pokedex')

    const Name = { "name":name }
    // console.log(pokeLocalS)
    // const bbb = Name
    // const aaa = 'name'
    // if (aaa.search(Name) === -1) {
    //   console.log('É diferente')
    // } else {
    //   console.log('é igual')
    // }

    // console.log("Nome pego pelo botão Capturar:", name)

    pokedex.map((pokemon) => {
      // console.log(pokemon.name)
      switch (name) {
        case pokemon.name:
          console.log('igual')
          break;
        default:
          console.log('diferente')
      }
    })

    // if (name === pokemon.name) {
    //   console.log('a')

    // }if(name !== pokemon.name){
    //   console.log('b')

    // }
    setPokedex([...pokedex, { "name": name }])
  }

  const catchId = (id) => {
    const newId = id.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', '')
    setIdDetails(newId)
    return newId
  }
  const chooseScreen = () => {
    switch (pokemonsList) {
      case undefined:
        return (
          <h1>Carregando...</h1>
        )
      case []:
        return (
          <h1>Carregando...</h1>
        )
      default:
        return (
          pokemonsList.map((pokemon) => {
            return (
              <Card key={pokemon.name}
                name={pokemon.name}
                id={`# ${catchId(pokemon.url)}`}
                details={
                  <div>
                    <button onClick={() => goToDetails(navigate, catchId(pokemon.url))}>Detalhes</button>
                  </div>
                }
                button={
                  <div>
                    <button
                      onClick={() => catchPokemon(pokemon.name)}
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
