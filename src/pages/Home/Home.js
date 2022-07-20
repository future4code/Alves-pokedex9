import React, { useContext } from 'react'
import Header from '../../components/Header/Header'
import { MainDiv, CardsDiv } from './Styled'
import Card from '../../components/Card/Card'
import { GlobalContext } from '../../global/GlobalContext'

export default function Home() {
  const { pokemons, setPokemons } = useContext(GlobalContext)
  console.log(pokemons)
  return (
    <>
      <Header />
      <MainDiv>
        <h1>Todos Pokémons</h1>
        <CardsDiv>
          {pokemons.map((pokemon) => {
            return (
              <Card key={pokemon.name}
                id='#1'
                name={pokemon.name}
                type='Poison'
                icon='ℹ'
                img=''
              />
            )
          })}
        </CardsDiv>
      </MainDiv>
    </>
  );
};
