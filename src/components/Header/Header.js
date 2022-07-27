import React from 'react'
import { MainDiv, ImgStyled} from './Styled'
import pokemon from '../../assets/pokemon.png'
import { useNavigate } from 'react-router-dom'
import { goToPokedex } from '../../routes/Coordinator'

export default function Header(props) {
  const navigate = useNavigate()

  return (
    <MainDiv>
        {props.buttonLeft}
        <ImgStyled
        src={pokemon}
        />
        {props.buttonRight}
    </MainDiv>
  )
}
