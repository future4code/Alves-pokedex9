import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToHome, goToDetails } from '../../routes/Coordinator'
import { CardsDiv, HeaderDiv, MainDiv, ButtonDelete } from './Styled'
import Card from '../../components/Card/Card'
import { useContext } from 'react'
import { GlobalContext } from '../../global/GlobalContext'
import Header from '../../components/Header/Header'
import arrow from '../../assets/arrow.png'

export default function Pokedex() {
  const navigate = useNavigate()

  const { pokedex, setPokedex } = useContext(GlobalContext)

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
          {pokedex.map((pokemon) => {
            return (
              <Card key={pokemon.name}
                id='#1'
                name={pokemon.name}
                type='Poison'
                icon='ℹ'
                img=''
                button={
                  <div>
                    <ButtonDelete>Excluir</ButtonDelete>
                  </div>
                }
              />
            )
          })}
        </CardsDiv>
      </MainDiv>
    </div>
  );
};