import { useNavigate } from "react-router-dom"


export const goToHome = (navigate) => {
  navigate("/")
}

export const goToPokedex = (navigate) => {
  navigate("/pokedex")
}

export const goToDetails = (navigate, address) => {
  navigate(`/details/${address}`)
}