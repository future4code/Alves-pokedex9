import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToHome, goToDetails } from '../../routes/Coordinator'
import { CardsDiv, HeaderDiv, MainDiv, ButtonDelete } from './Styled'
import Card from '../../components/Card/Card'
import { useContext } from 'react'
import { GlobalContext } from '../../global/GlobalContext'
import Header from '../../components/Header/Header'
import arrow from '../../assets/arrow.png'
import { useState, useEffect } from 'react'

export default function Pokedex() {
  const { setIdDetails } = useContext(GlobalContext)
  const [pokedex, setPokedex] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    const pokedexLocalStorage = localStorage.getItem('pokedex')
    if (pokedexLocalStorage) {
      const arrayPokedex = JSON.parse(pokedexLocalStorage)
      setPokedex(arrayPokedex)
    } else {
      setPokedex([])
      localStorage.setItem('pokedex', JSON.stringfy([]))
    }
    console.log(pokedex)
  }, [])
  const catchId = (id) => {
    setIdDetails(id)
    return id
  }

  const deletePokemon = (name) => {
    if (window.confirm('Tem certeza que deseja excluir?')) {
      const newPokedex = pokedex.filter((pokemon) => {
        return pokemon.name !== name
      })
      setPokedex(newPokedex)
    }
    localStorage.setItem('pokedex', JSON.stringify(pokedex))
  }
  const chooseScreen = () => {
    switch (pokedex) {
      case undefined:
        return <h1>Carregando...</h1>
      case [-1]:
        return <h1>Seu pokedex está vazio</h1>
      default:
        return (
          pokedex.map((pokemon) => {
            return (
              <Card key={pokemon.name}
                name={pokemon.name}
                details={
                  <div>
                    <button onClick={() => goToDetails(navigate, catchId(pokemon.name))}>Detalhes</button>
                  </div>
                }
                button={
                  <div>
                    <ButtonDelete
                      onClick={() => deletePokemon(pokemon.name)}
                    >Excluir</ButtonDelete>
                  </div>
                }
              />
            )
          })
        )
    }
  }

  return (
    <div>
      <Header
        buttonLeft={
          <HeaderDiv>
            <img
              src={arrow}
            />
            <p onClick={() => goToHome(navigate)}>Todos os Pokémons</p>
          </HeaderDiv>}
      />
      <MainDiv>
        <h1>Meus Pokémons</h1>
        <CardsDiv>
          {chooseScreen()}
        </CardsDiv>
      </MainDiv>
    </div>
  );
};