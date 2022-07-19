import React from 'react'
import { MainDiv, InfoDiv, PokemonDiv, TypeDiv, Type } from './Styled'
import { useNavigate } from 'react-router-dom'
import { goToDetails } from '../../routes/Coordinator'

export default function Card(props) {
    const navigate = useNavigate()
    return (
        <MainDiv>
            <InfoDiv>
                <span>{props.id}</span>
                <p><b>{props.name}</b></p>
                <TypeDiv>
                    <Type>{props.icon} {props.type}</Type>
                    <Type>{props.icon} {props.type}</Type>
                </TypeDiv>
                <button onClick={() => goToDetails(navigate)}>Detalhes</button>
            </InfoDiv>
            <PokemonDiv>
                <img
                    alt='Pokemon'
                    src={props.img}
                />
                <button>Capturar!</button>
            </PokemonDiv>
        </MainDiv>
    )
}
