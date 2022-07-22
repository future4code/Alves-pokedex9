import React, { useContext, useEffect, useState } from 'react'
import { MainDiv, InfoDiv, PokemonDiv, TypeDiv, Type, PokemonImg, PokeballImg } from './Styled'
import { useNavigate } from 'react-router-dom'
import { goToDetails } from '../../routes/Coordinator'
import axios from 'axios'
import { BaseUrl } from '../../contants/urls'
import pokeball from '../../assets/pokeball.png'
import { GlobalContext } from '../../global/GlobalContext'

export default function Card(props) {
    const { pokedex } = useContext(GlobalContext)
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
        }).catch((error) => {
            console.log(error.response)
        })
    }
    const TypesDiv = () => types.map((type) => {
        return <Type type={type.type.name} key={type.slot}> {type.type.name}</Type>
    })
    const chooseScreen = () => {
        switch (pokedex) {
            case []:
                return <h1>Seu Pokedex esá vazio</h1>
            default:
                return (
                    <>
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
                    </>
                )
        }
    }
    return (
        <MainDiv>
            {chooseScreen()}
        </MainDiv>
    )
}
