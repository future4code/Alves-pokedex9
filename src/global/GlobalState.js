import { GlobalContext } from "./GlobalContext";
import { useEffect, useState } from "react";
import { BaseUrl } from "../contants/urls";
import useRequestData from '../hooks/useRequestData'

const Provider = GlobalContext.Provider

export const GlobalState = (props) => {
    const [pokedex, setPokedex] = useState([])
    const [pokemons, setPokemons] = useState([])
    const [details, setDetails] = useState([])


    const newPokemons = useRequestData(`${BaseUrl}?limit=20&offset=0`)
    useEffect(() => {
        setPokemons(newPokemons)
        setPokedex(newPokemons.results)
    })

    const values = {
        pokedex,
        setPokedex,
        pokemons,
        setPokemons,
        details,
        setDetails,
    }

    return (
        <Provider value={values}>
            {props.children}
        </Provider>
    )
}