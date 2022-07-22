import styled from 'styled-components'

const chooseBackground = (props) =>{
    switch(props.type){
        case 'poison':
            return 
    }
}

export const MainDiv = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 50% 50%;
    width: 390px;
    height: 210px;
    background: #729F92;
    border-radius: 12px;
    padding: 15px;
    padding-top: 8px;
    margin-bottom: 40px;
`
export const InfoDiv = styled.div`
    button{
        cursor: pointer;
        text-decoration-line: underline;
        border: 0 ;
        background-color: transparent;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        position: absolute;
        margin-top: 35px;
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
    height: 31px;
    left: 129px;
    top: 89px;
    
    background: #70B873;
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