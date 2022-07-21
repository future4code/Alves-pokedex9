import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { goToHome } from '../../routes/Coordinator'
import Header from '../../components/Header/Header'
import { BackDetails, Pokemon, SpriteFront, SpriteBack, Stats, StatsImg, Moves } from './Styled'
import { GlobalContext } from '../../global/GlobalContext'
import { BaseUrl } from '../../contants/urls'
import useRequestData from '../../hooks/useRequestData'



export default function DetailsPage() {
  const navigate = useNavigate()

  const { pokemons, setPokemons, idDetails } = useContext(GlobalContext)
  const [pokemonsList, setpokemonsList] = useState([])
  const detailList = useRequestData(`${BaseUrl}/${idDetails}/`)
  console.log(detailList) 
 //const abilities = detailList.abilities
  
  const chooseScreen = () => {
/*   switch (detailList) {
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
          detailList.map((poke) => {
           return (
             <>
               <SpriteFront alt='SpriteFront' src={poke.sprites.front_default}></SpriteFront>
               <SpriteBack alt='SpriteBack' src={poke.sprites.back_default}></SpriteBack>
                <Stats>
                 <p>Base stats</p>
                 <StatsImg alt='StatsImg' src={poke.stats} ></StatsImg>
               </Stats>
                <Pokemon alt='Pokemon' src={poke.sprites.front_default}></Pokemon>
               <Moves>{`${BaseUrl}/moves`}</Moves>
             </>
           )
          }
         )
       )
   } */
  }

  return (
    <div>
      <Header />
      <h1>DetailsPage</h1>
      <button onClick={() => goToHome(navigate)}>Todos os Pokémons</button>
      <BackDetails>
        {chooseScreen()}
      </BackDetails>

    </div>
  );
};