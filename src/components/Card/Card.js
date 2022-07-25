import React, { useContext, useEffect, useState } from 'react'
import { MainDiv, InfoDiv, PokemonDiv, TypeDiv, Type, PokemonImg, PokeballImg } from './Styled'
import { useNavigate } from 'react-router-dom'
import { goToDetails } from '../../routes/Coordinator'
import axios from 'axios'
import { BaseUrl } from '../../contants/urls'
import pokeball from '../../assets/pokeball.png'
import { GlobalContext } from '../../global/GlobalContext'
//images
import poison from '../../assets/poison.png'
import grass from '../../assets/grass.png'
import fire from '../../assets/fire.png'
import water from '../../assets/water.png'
import bug from '../../assets/bug.png'
import normal from '../../assets/normal.png'
import electric from '../../assets/electric.png'
import ground from '../../assets/ground.png'
import fairy from '../../assets/fairy.png'
import fighting from '../../assets/fighting.png'
import psychic from '../../assets/psychic.png'
import rock from '../../assets/rock.png'
import ghost from '../../assets/ghost.png'
import ice from '../../assets/ice.png'
import dragon from '../../assets/dragon.png'
import steel from '../../assets/steel.png'
import dark from '../../assets/dark.png'
import flying from '../../assets/flying.png'


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
        const chooseTypeIcon = () => {
            switch (type.type.name) {
                case 'poison':
                    return poison
                case 'grass':
                    return grass
                case 'fire':
                    return fire
                case 'water':
                    return water
                case 'bug':
                    return bug
                case 'normal':
                    return normal
                case 'electic':
                    return electric
                case 'ground':
                    return ground
                case 'fairy':
                    return fairy
                case 'fighting':
                    return fighting
                case 'psychic':
                    return psychic
                case 'rock':
                    return rock
                case 'ghost':
                    return ghost
                case 'ice':
                    return ice
                case 'dragon':
                    return dragon
                case 'steel':
                    return steel
                case 'dark':
                    return dark
                case 'flying':
                    return flying
            }
        }
        return <Type typeBackground={type.type.name} key={type.slot}><img src={chooseTypeIcon()} /> {type.type.name[0].toUpperCase() + type.type.name.substring(1)}</Type>
    })
    const typeSlot1 = () => {
        const type = types.map((type) => {
            if (type.slot === 1) {
                return type.type.name
            }
        })
        return(type.toString())
    }
    const chooseScreen = () => {
        switch (pokedex) {
            case []:
                return <h1>Seu Pokedex esá vazio</h1>
            default:
                return (
                    <MainDiv 
                    typeBackground={typeSlot1()}
                    >
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
    }
    return (
        <>
            {chooseScreen()}
        </>
    )
}
