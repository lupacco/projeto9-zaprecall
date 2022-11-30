import styled from "styled-components"
import playBtn from "../assets/img/seta_play.png"

export default function FlashCard({question, answer, index}){
    return(
        <FlashCardContainer>
            <p>Pergunta {index}</p>
            <img alt="" src={playBtn}></img>
        </FlashCardContainer>
    )
}

const FlashCardContainer = styled.div`
    width: 300px;
    height: 65px !important;
    margin: 32px auto;
    background-color: #FFFFFF;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;

    > p{
        font-family: 'Recursive', sans-serif;
        font-size: 16px;
        font-weight: 700;
        font-style: normal;
        color: #333333;
    }
    > img{
        width: 20px;
        height: 23px;
    }
`