import styled from "styled-components"

export const MainDiv = styled.div`
    background-color: #5e5e5e;
    width: 100%;
    min-height: 100vh;
`

export const BackDetails = styled.div`
margin-top: 50px;
position: relative;
width: 100%;
height: 663px;
left: 0px;
top: 0px;
background: #729F92; 
border-radius: 37.8857px;
img{
    position: absolute;    
}
`

export const PngWing = styled.img`
position: absolute;
width: 665.31px;
height: 665.31px;
left: 944.66px;
top: -122px;

background: url(pngwing.png);
opacity: 0.17;
transform: rotate(30deg);
`

export const Pokemon = styled.img`
position: absolute;
width: 270px;
left: 980px;
top:-90px;
`

export const SpriteFront = styled.img`
position: absolute;
width: 282px;
height: 282px;
left: 44px;
top: 26px;

background: url(image.png), #FFFFFF;
border: 2px solid #FFFFFF;
border-radius: 8px;
`

export const SpriteBack = styled.img`
position: absolute;
width: 282px;
height: 282px;
left: 44px;
top: 355px;

background: url(image.png), #FFFFFF;
border: 2px solid #FFFFFF;
border-radius: 8px;
`
export const Stats = styled.div`
position: absolute;
width: 343px;
height: 587px;
left: 360px;
top: 24px;
padding: 15px;
background: #FFFFFF;
border-radius: 12px;
`

export const StatsImg = styled.img`
position: absolute;
width: 307px;
height: 257px;
left: 378px;
top: 43px;

background: url(image.png);
`

export const Moves = styled.div`
display: flex;
flex-direction: column;
gap: 15px;
padding: 15px;
position: absolute;
width: 292px;
height: 427px;
left: 771px;
top: 184px;

background: #FFFFFF;
border-radius: 8px;
`
export const ButtonDelete = styled.button`
    background-color: #FF6262;
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
        border-radius: 8px;
        border: 0;
        cursor: pointer;
`
export const PokeballImg = styled.img`
    position: absolute;
    width: 665.31px;
    height: 665.31px;
    left: 680px;
    top: -50px;
`
export const TypeDiv = styled.div`
    position: absolute;
    display: flex;
    gap: 10px;
    top: 100px;
    right: 370px;
`
export const Type = styled.div`
    display: flex;
    flex-direction: row;
    padding: 5px 8px;
    gap: 25px;
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
export const InfoDiv = styled.div`
    position: absolute;
    font-size: 48px;
    right: 380px;
    top: 20px;
`
export const MoveDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 10px;
    gap: 10px;
    width: 102px;
    background: #ECECEC;
    border: 1px dashed rgba(0, 0, 0, 0.14);
    border-radius: 12px;
`
export const StatsDiv = styled.div`
    display: flex;
    gap: 20px;
    justify-content: flex-end;
`