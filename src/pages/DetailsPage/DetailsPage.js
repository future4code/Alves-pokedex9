import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToHome } from '../../routes/Coordinator'

export default function DetailsPage() {
  const navigate = useNavigate()

  return (
    <div> 
      <h1>DetailsPage</h1>

    <button onClick={() => goToHome(navigate)}>Todos os Pokémons</button>
    </div>
  );
};