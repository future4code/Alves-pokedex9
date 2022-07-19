import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToPokedex, goToDetails } from '../../routes/Coordinator'

export default function Home () {
const navigate = useNavigate()

  return (
    <div>
      <h1>Home</h1>

    <button onClick={() => goToPokedex(navigate)}>POKÉDEX</button>
    <button onClick={() => goToDetails(navigate)}>Detalhes</button>
    </div>
  );
};
