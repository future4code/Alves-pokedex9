import { GlobalContext } from "./GlobalContext";
import { useEffect, useState } from "react";
import { BaseUrl } from "../contants/urls";
import useRequestData from '../hooks/useRequestData'

const Provider = GlobalContext.Provider

export const GlobalState = (props) => {
    const [pokedex, setPokedex] = useState([])
    const [pokemons, setPokemons] = useState([])
    const [details, setDetails] = useState([])
    const [idDetails, setIdDetails] = useState(1)

    const newPokemons = useRequestData(`${BaseUrl}`)
 
    useEffect(()=>{
        setPokemons(newPokemons)
    })
    useEffect(() => {
        const pokedexLocalStorage = localStorage.getItem('pokedex')
        const detailsPoke = localStorage.getItem('detailsPoke')
        setIdDetails(detailsPoke)
        if (pokedexLocalStorage) {
            const arrayPokedex = JSON.parse(pokedexLocalStorage)
            setPokedex(arrayPokedex)
        } else {
            setPokedex([])
            localStorage.setItem('pokedex', JSON.stringfy([]))
            localStorage.setItem('detailsPoke', JSON.stringfy([]))
        }
    }, [])

    const values = {
        pokedex, setPokedex,
        pokemons, setPokemons,
        details, setDetails,
        idDetails, setIdDetails,
    }

    return (
        <Provider value={values}>
            {props.children}
        </Provider>
    )
}