import React, { useContext } from 'react'
import Header from '../../components/Header/Header'
import { MainDiv, CardsDiv, PokedexButton } from './Styled'
import Card from '../../components/Card/Card'
import { GlobalContext } from '../../global/GlobalContext'
import { useNavigate } from 'react-router-dom'
import { goToPokedex, goToDetails } from '../../routes/Coordinator'
import { useState, useEffect } from 'react'
import Swal from 'sweetalert2'

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
    const arrayPokedex = JSON.parse(pokeLocalS)
    let equal = false
    for (let i of arrayPokedex) {
      if (name === i.name) {
        equal = true
        Swal.fire({
          title: 'OPS!',
          text: 'Esse Pokémon já está na Pokédex',
          timer: 1800,
          icon: 'warning',
          showConfirmButton: false,
        })
      }
    }
    switch (equal) {
      case false:
        Swal.fire({
          showConfirmButton: false,
          title: 'Gotcha',
          text: 'O Pokémon foi adicionado a sua Pokédex',
          timer: 1800,
        })
        setPokedex([...pokedex, { "name": name }])
    }
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
            <PokedexButton onClick={() => goToPokedex(navigate)}>Pokedéx</PokedexButton>
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
