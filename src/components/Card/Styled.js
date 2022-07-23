import styled from 'styled-components'


export const MainDiv = styled.div`
    font-family: 'Poppins';
    position: relative;
    display: grid;
    grid-template-columns: 50% 50%;
    width: 390px;
    height: 210px;
    background: ${props => {
        const newType = () => {
            return props.typeBackground.replace(',', '')
        }
        switch (newType()) {
            case 'grass':
                return '#729F92'
            case 'fire':
                return '#EAAB7D'
            case 'water':
                return '#71C3FF'
            case 'bug':
                return '#76A866'
            case 'normal':
                return '#BF9762'
            case 'electic':
                return '#FFC95E'
            case 'ground':
                return '#B6866F'
            case 'fairy':
                return '#BD7886'
            case 'fighting':
                return '#B0385A'
            case 'psychic':
                return '#E05E65'
            case 'rock':
                return '#9E8F65'
            case 'ghost':
                return '#7084CA'
            case 'ice':
                return '#48A497'
            case 'dragon':
                return '#004170'
            case 'steel':
                return '#B7B9D0'
            case 'dark':
                return '#55433C'
            case 'flying':
                return '#A891EC'
        }
    }};
    border-radius: 12px;
    padding: 15px;
    padding-top: 8px;
    margin-bottom: 40px;
`
export const InfoDiv = styled.div`
    button{
        cursor: pointer;
        color: white;
        text-decoration-line: underline;
        border: 0 ;
        background-color: transparent;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        position: absolute;
        margin-top: 55px;
    }
    p{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
    }
    b{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 39px;
    }
`
export const TypeDiv = styled.div`
    display: flex;
    gap: 10px;
    
`
export const Type = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 5px 8px;
    gap: 17px;
    font-size: 14px;

    width: 80px;
    height: 23px;
    left: 129px;
    top: 89px;
    
    background: ${props => {
        switch (props.typeBackground) {
            case 'poison':
                return '#AD61AE'
            case 'grass':
                return '#70B873'
            case 'fire':
                return '#F44900'
            case 'water':
                return '#33A4F5'
            case 'bug':
                return '#316520'
            case 'normal':
                return '#8A8A8A'
            case 'electic':
                return '#FFC95E'
            case 'ground':
                return '#B6866F'
            case 'fairy':
                return '#BD7886'
            case 'fighting':
                return '#B0385A'
            case 'psychic':
                return '#E05E65'
            case 'rock':
                return '#9E8F65'
            case 'ghost':
                return '#7084CA'
            case 'ice':
                return '#48A497'
            case 'dragon':
                return '#004170'
            case 'steel':
                return '#B7B9D0'
            case 'dark':
                return '#55433C'
            case 'flying':
                return '#6892B0'
        }
    }};
    border: 1px dashed rgba(255, 255, 255, 0.47);
    border-radius: 8px;
`
export const PokemonDiv = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    button{
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 4px 10px;
        border: 0;
        width: 146px;
        height: 38px;
        border-radius: 8px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        bottom:30px;
        cursor: pointer;
    }
`
export const PokemonImg = styled.img`
    position: relative;
    width: 193px;
    height: 193px;
    bottom:80px;
`
export const PokeballImg = styled.img`
    position: absolute;
    width: 240px;
    bottom: 20px;
`