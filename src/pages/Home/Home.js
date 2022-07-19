import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToPokedex, goToDetails } from '../../routes/Coordinator'
import Header from '../../components/Header/Header'
import { MainDiv, CardsDiv} from './Styled'
import Card from '../../components/Card/Card'

export default function Home() {
  const navigate = useNavigate()

  return (
    <MainDiv>
      <Header />
      <h1>Todos Pokémons</h1>
      <CardsDiv>
        <Card
          id='#1'
          name='Bulbasaur'
          type='Poison'
          icon='ℹ'
          img=''
        />
         <Card
          id='#1'
          name='Bulbasaur'
          type='Poison'
          icon='ℹ'
          img=''
        />
         <Card
          id='#1'
          name='Bulbasaur'
          type='Poison'
          icon='ℹ'
          img=''
        />
      </CardsDiv>
    </MainDiv>
  );
};
