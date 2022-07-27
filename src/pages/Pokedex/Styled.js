import styled from 'styled-components'
import Backgound from '../../assets/background.jpg'

export const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px;
    color: white;
    background-color: #5e5e5e;
    min-height: 415px;
`
export const CardsDiv = styled.div`
    display: grid;
    grid-template-columns: 33% 33% 33%;
    gap: 15px;
`
export const HeaderDiv = styled.div`
    display: flex;
    justify-content: space-around;
    width: 215px;
    padding: 75px;
    height: 8px;
    align-items: center;
    p{
        font: 'Poppins';
        font-size: 24px;
        cursor: pointer;
        &:hover{
            text-decoration: underline;
            color: #1A1A1A;
        }
    }
`
export const ButtonDelete = styled.button`
    background-color: #FF6262;
`
export const EmptyPokDiv = styled.div`
    position: absolute;
    width: 95%;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    background-image: url(${Backgound});
    img{
        width: 400px;
    }
` 