import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToHome, goToDetails } from '../../routes/Coordinator'
import { CardsDiv, HeaderDiv, MainDiv, ButtonDelete, EmptyPokDiv } from './Styled'
import Card from '../../components/Card/Card'
import { useContext } from 'react'
import { GlobalContext } from '../../global/GlobalContext'
import Header from '../../components/Header/Header'
import arrow from '../../assets/arrow.png'
import { useState, useEffect } from 'react'
import Swal from 'sweetalert2'
import PokedexEmpty from '../../assets/pokedex.png'

export default function Pokedex() {
  const { setIdDetails, pokedex, setPokedex } = useContext(GlobalContext)
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
  }, [])
  const catchId = (id) => {
    setIdDetails(id)
    return id
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
  const chooseTitle = () => {
    if (pokedex.length == 0) {
      return (
        <div>
          <h1>Seu Pokédex está vazio</h1>
          <EmptyPokDiv>
            <img src={PokedexEmpty} alt='Pokedéx vazio' />
          </EmptyPokDiv>
        </div>
      )
    } else {
      return <h1>Meus Pokémons</h1>
    }
  }
  const chooseScreen = () => {
    switch (pokedex) {
      case undefined:
        return <h1>Carregando...</h1>
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
          </HeaderDiv>
          }
      />
      <MainDiv>
        {chooseTitle()}
        <CardsDiv>
          {chooseScreen()}
        </CardsDiv>
      </MainDiv>
    </div>
  );
};