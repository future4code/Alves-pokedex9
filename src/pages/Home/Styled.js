import styled from 'styled-components'

export const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px;
    color: white;
    background-color: #5e5e5e;
`
export const CardsDiv = styled.div`
    display: grid;
    grid-template-columns: 33% 33% 33%;
    gap: 15px;
`
export const PokedexButton = styled.button`
        color: white;
        font-size: 24px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 4px 10px;

        position: absolute;
        width: 287px;
        height: 74px;
        left:77%;
        top: 41px;

        background: #33A4F5;
        border-radius: 8px;
        border: 0;
        cursor: pointer;
`  