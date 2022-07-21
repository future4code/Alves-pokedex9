import React, { useEffect, useState } from 'react'
import { MainDiv, InfoDiv, PokemonDiv, TypeDiv, Type, PokemonImg, PokeballImg } from './Styled'
import { useNavigate } from 'react-router-dom'
import { goToDetails } from '../../routes/Coordinator'
import axios from 'axios'
import { BaseUrl } from '../../contants/urls'
import pokeball from '../../assets/pokeball.png'

export default function Card(props) {
    const navigate = useNavigate()
    const [types, setTypes] = useState([])
    const [img, setImg] = useState('')

    useEffect(() => {
        catchDetails(props.name)
    }, [])

    const catchDetails = (name) => {
        axios.get(
            `${BaseUrl}/${name}/`
        ).then((response) => {
            setTypes(response.data.types)
            setImg(response.data.sprites.other.home.front_default)
            console.log(response.data)
        }).catch((error) => {
            console.log(error.response)
        })
    }
    const TypesDiv = () => types.map((type) => {
        return (
            <Type key={type.slot}> {type.type.name}</Type>
        )
    })
    return (
        <MainDiv>
            <InfoDiv>
                <span>{props.id}</span>
                <p><b>{props.name[0].toUpperCase() + props.name.substring(1)}</b></p>
                <TypeDiv>
                    {TypesDiv()}
                </TypeDiv>
                {props.details}
            </InfoDiv>
            <PokemonDiv>
                <PokeballImg
                    alt='pokebola'
                    src={pokeball}
                />
                <PokemonImg
                    alt='Pokemon'
                    src={img}
                />
                {props.button}
            </PokemonDiv>
        </MainDiv>
    )
}
