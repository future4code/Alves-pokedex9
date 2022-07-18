import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToHome, goToDetails } from '../../routes/Coordinator'

export default function Pokedex() {
  const navigate = useNavigate()

  return (
    <div> 
      <h1>POKÉDEX</h1>

    <button onClick={() => goToHome(navigate)}>Todos os Pokémons</button>
    <button onClick={() => goToDetails(navigate)}>Detalhes</button>
    </div>
  );
};